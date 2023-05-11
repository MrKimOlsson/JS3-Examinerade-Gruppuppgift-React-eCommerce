const router = require('express').Router()
const { addSubscriber, getSubscribers } = require('../models/subscriberModel')

router.post('/', addSubscriber)

router.get('/', getSubscribers)

module.exports = router;