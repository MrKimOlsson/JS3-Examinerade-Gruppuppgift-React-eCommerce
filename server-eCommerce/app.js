const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/product', require('./controllers/productController'));
app.use('/api/user', require('./controllers/registerController'));
app.use('/api/order', require('./controllers/orderController'));
app.use('/api/contact', require('./controllers/contactController'))
app.use('/api/subscriber', require('./controllers/subscriberController'))

module.exports = app;
