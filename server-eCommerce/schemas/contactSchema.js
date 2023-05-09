const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
  nameFL:   { type: String,   required: true },
  email:    { type: String,   required: true },
  number:   { type: Number,   required: true },
  company:  { type: String,   required: false },
  text:     { type: String,   required: false },
  checkbox: { type: Boolean,  required: false }
})

module.exports = mongoose.model('Contacts', contactSchema);