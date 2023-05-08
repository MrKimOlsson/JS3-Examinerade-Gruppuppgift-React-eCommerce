const router = require('express').Router()
const { addUser, getUsers, updateUser, userLogin, deleteUser } = require('../models/registerModel')
const { deleteMany } = require('../schemas/productSchema')



//CREATE
router.post('/', addUser)
router.post('/login', userLogin)

//READ
router.get('/', getUsers)

//UPDATE
router.put('/:id', updateUser)

//DELETE
router.delete('/:id', deleteUser)

module.exports = router;