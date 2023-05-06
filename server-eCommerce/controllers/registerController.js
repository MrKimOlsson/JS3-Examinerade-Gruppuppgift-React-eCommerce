const router = require('express').Router()
const { addUser, getUsers, userLogin } = require('../models/registerModel')
const verify = require('../authenticator/auth')



//CREATE
router.post('/', addUser)
router.post('/login', userLogin)

//READ
router.get('/', getUsers)

//UPDATE


//DELETE
module.exports = router;