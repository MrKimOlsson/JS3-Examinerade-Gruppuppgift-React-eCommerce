const router = require('express').Router()
const { addProduct, getAllProducts, getProductById, deleteProduct } = require('../models/productModel')



//CREATE
router.post('/', addProduct)

//READ
router.get('/', getAllProducts)
router.get('/:id', getProductById)


//UPDATE


//DELETE
router.delete('/:id', deleteProduct)
module.exports = router;