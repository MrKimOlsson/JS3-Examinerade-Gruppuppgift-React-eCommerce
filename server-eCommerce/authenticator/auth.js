const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
config();

const mySecretKey = process.env.SECRET_KEY;

exports.createJwt = (user) => {
  return jwt.sign({ _id: user._id }, mySecretKey);
};

exports.verifyJwt = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    req.userInfo = jwt.verify(token, mySecretKey);
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Access is denied, you must login',
      error: error.message
    });
  }
};
