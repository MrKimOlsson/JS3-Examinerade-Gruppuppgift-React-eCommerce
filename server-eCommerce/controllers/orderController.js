const router = require('express').Router();
const { addOrder, getOrders, deleteOrder, deleteOneOProduct } = require('../models/orderModel');
const verify = require('../authenticator/auth');

// CREATE
router.post('/', verify.verifyToken, addOrder);

// READ
router.get('/', verify.verifyToken, getOrders);

// DELETE
router.delete('/', verify.verifyToken, deleteOrder);


module.exports = router;
