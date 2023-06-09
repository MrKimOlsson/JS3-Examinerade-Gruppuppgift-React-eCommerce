const router = require('express').Router()
const { addUser, getUsers, updateUser, userLogin, deleteUser, getUserById } = require('../models/registerModel')
const verify = require('../authenticator/auth')




//CREATE
router.post('/', addUser)
router.post('/login', userLogin)

//READ
router.get('/', getUsers)
router.get('/:id', getUserById)

//UPDATE
router.put('/:id', updateUser)

//DELETE
router.delete('/', verify.verifyToken, deleteUser)

module.exports = router;