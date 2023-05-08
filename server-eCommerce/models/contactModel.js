const Register = require('../schemas/contactSchema')

exports.contact = (req, res) => {
    const { nameFL, email, number, company, text, checkbox } = req.body;
    
    if (!nameFL || !email || !number) {
        res.status(400).json({
            message: 'you need to fill in this information'
        });
        return
    }
    
    return Register.create({ nameFL, email, number, company, text, checkbox })
    .then((data) => { 
        res.status(201).json({
        message: 'You have sent a contact request'
        })
   })
   .catch(err => {
    res.status(500).json({
        message: 'Failed to create contact request',
        err: err.message
    })
})
}