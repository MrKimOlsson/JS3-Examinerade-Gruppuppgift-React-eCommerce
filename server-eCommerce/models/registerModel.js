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

exports.getUserById = (req, res) => {
  Register.findById(req.params.id)
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => {
      res.status(404).json({
        message: 'Something went wrong when fetching the user',
        err: err.message
      })
    })
}

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
        return res.status(200).json(user);
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
        message: 'Could not get all users',
        err: err.message
      })
    })
}

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, streetName, postalCode, city, email, password } = req.body;

  if (!firstName || !lastName || !streetName || !postalCode || !city || !email || !password) {
    res.status(400).json({
      message: 'All following inputs must be filled in: firstName, lastName, streetName, postalCode, city, email, password'
    });
    return;
  }

  bcrypt.hash(password, 10)
    .then((hashedPassword) => {
      return Register.findByIdAndUpdate(id, { firstName, lastName, streetName, postalCode, city, email, password: hashedPassword }, { new: true }).select('-confirmPassword');
    })
    .then((user) => {
      res.status(200).json({
        message: 'Your account has been updated',
        user
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Your account was not updated, something went wrong',
        err: err.message
      });
    });
};

exports.deleteUser = (req, res) => {
  const userId = req.userInfo._id;

  Register.findByIdAndDelete(userId)
    .then(user => {
      if (!user) {
        res.status(404).json({
          message: 'User not found'
        });
        return;
      }

      res.status(200).json({
        message: 'User has been deleted'
      });
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong',
        err: err.message
      });
    });
};
