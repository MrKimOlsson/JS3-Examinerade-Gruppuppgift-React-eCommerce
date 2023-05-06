const bcrypt = require('bcryptjs');
const Register = require('../schemas/registerSchema');
const auth = require('../authenticator/auth')
const jwt = require('jsonwebtoken')
const mySecretKey = process.env.SECRET_KEY

exports.addUser = (req, res) => {
  const { firstName, lastName, streetName, postalCode, city, email, password, passwordConfirm } = req.body;

  if (!firstName || !lastName || !streetName || !postalCode || !city || !email || !password || !passwordConfirm) {
    res.status(400).json({
      message: 'All following inputs must be filled in: firstName, lastName, streetName, postalCode, city, email, password, passwordConfirm'
    });
    return;
  }

  if (password !== passwordConfirm) {
    res.status(400).json({
      message: 'Password and confirmPassword fields must match'
    });
    return;
  }

  bcrypt.hash(password, 10)
    .then((hashedPassword) => {
      return Register.create({ firstName, lastName, streetName, postalCode, city, email, password: hashedPassword, confirmPassword: passwordConfirm })
    })
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, mySecretKey);
      res.status(201).json({
        message: 'Your account is now created',
        token
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Your account was not created, something went wrong',
        err: err.message
      });
    });
};

exports.userLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: 'Please enter your email and password'
    });
  }

  Register.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: 'User not found, please check your email and password'
        });
      }

      bcrypt.compare(password, user.password, (err, response) => {
        if (err) {
          return res.status(500).json({
            message: 'Something went wrong during the decryption process'
          });
        }
        if (!response) {
          return res.status(401).json({
            message: 'Invalid email or password'
          });
        }
        const token = auth.createJwt(user);
        return res.status(200).json({ token });
      });
    })
    ;
};



exports.getUsers = (req, res) => {
  Register.find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Failed to get list of all users',
        err: err.message
      })
    })
}