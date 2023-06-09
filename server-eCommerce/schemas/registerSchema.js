const mongoose = require('mongoose');


const registerSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  streetName: { type: String, required: true },
  postalCode: { type: Number, required: true },
  city: { type: String, required: true },
  mobile: { type: Number, required: false },
  company: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  passwordConfirm: { type: String },
  profilePic: { type: Buffer, required: false } // Add file field
}, { timestamps: true });


module.exports = mongoose.model('Register', registerSchema);

