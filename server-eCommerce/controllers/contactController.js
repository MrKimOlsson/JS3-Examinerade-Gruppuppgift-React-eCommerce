const router = require('express').Router()
const { contact } = require('../models/contactModel')

// CREATE 
router.post('/', contact)

module.exports = router;