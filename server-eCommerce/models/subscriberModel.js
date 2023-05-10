const Subscriber = require('../schemas/subscriberSchema')
// let email = document.querySelector('#subEmail')

exports.addSubscriber = (req, res) => {
    const { email } = req.body;

    if (! email ) {
        res.status(400).json({
            message: 'You need to enter your email adress'
        })
        return
    }

    return Subscriber.create({ email })
    .then((data) => {
        res.status(201).json({
            message: 'Thank you for your subscription!',
        })
    })
    .catch(err => {
        res.status(500).json({
            message: 'Failed to create contact request',
            err: err.message
        })
    })
}