const router = require('express').Router();
const { addOrder, getOrders } = require('../models/orderModel');
const verify = require('../authenticator/auth');

// CREATE
router.post('/', verify.verifyToken, addOrder);

// READ
router.get('/', verify.verifyToken, getOrders);
// UPDATE

// DELETE

module.exports = router;