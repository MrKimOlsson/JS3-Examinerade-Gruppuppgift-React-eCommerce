const Product = require('../schemas/productSchema')

exports.addProduct = (req, res) => {
  const { title, shortDescription, price, category, imageURL, description } = req.body

  if (!title || !shortDescription || !price || !category || !imageURL || !description) {
    res.status(400).json({
      message: 'All following inputs must be filled in: title, shortDescription, price, category, imageURL, description'
    })
    return
  }
  Product.create({ title, shortDescription, price, category, imageURL, description })
    .then(() => {
      res.status(201).json({
        message: 'Your product is now created'
      })
    })
    .catch(err => {
      res.status(500).json({
        message: 'Your product was not created, something went wrong',
        err: err.message
      })
    })
}

exports.getAllProducts = (req, res) => {

  Product.find()
    .then(products => {
      res.status(200).json(products)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error when getting the list of all products',
        err: err.message
      })
    })
}

exports.getProductById = (req, res) => {

  Product.findById(req.params.id)
    .then(products => {
      res.status(200).json(products)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Error when getting that specific product',
        err: err.message
      })
    })
}


exports.deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
  .then(products => {
    res.status(200).json(products)
  })
  .catch(err => {
    res.status(500).json({
      message: 'Error when trying to delete that specific product',
      err: err.message
    })
  })
}

