const router = require('express').Router()
const { addSubscriber } = require('../models/subscriberModel')

router.post('/', addSubscriber)

module.exports = router;