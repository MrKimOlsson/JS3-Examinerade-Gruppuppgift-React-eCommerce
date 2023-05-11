const mongoose = require('mongoose')

const subscriberSchema = mongoose.Schema({
    email: { type: String, reqired: true }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)