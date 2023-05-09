const router = require('express').Router()
const { addcontact } = require('../models/contactModel')

// CREATE 
router.post('/', addcontact)

module.exports = router;