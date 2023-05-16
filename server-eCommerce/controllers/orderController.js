const router = require('express').Router();
const { addOrder, getOrders, deleteOrder, updateOrder } = require('../models/orderModel');
const verify = require('../authenticator/auth');

// CREATE
router.post('/', verify.verifyToken, addOrder);

// READ
router.get('/', verify.verifyToken, getOrders);

router.put('/:id', verify.verifyToken, updateOrder)

// DELETE
router.delete('/', verify.verifyToken, deleteOrder);


module.exports = router;
