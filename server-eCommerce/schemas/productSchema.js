const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  price: { type: Number, required: true },
  // quantity: { type: Number },
  category: { type: String, required: true },
  imageURL: [{ type: String, required: 3 }],
  description: { type: String, required: true }
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);