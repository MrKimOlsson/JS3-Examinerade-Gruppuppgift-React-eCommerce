const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')

app.use(express.static(path.join(__dirname, 'frontend')))

// Import Routes
const caseController = require('./controllers/caseController')
const commentController = require('./controllers/commentController')
const statusController = require('./controllers/statusController')

// Import Error middleware
const notFoundMiddleware = require('./middleware/notFoundMiddleware')
const errorMiddleware = require('./middleware/errorMiddleware')

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/cases', caseController)
app.use('/api/comments', commentController)
app.use('/api/status', statusController)

// 404 middleware
app.use(notFoundMiddleware)

// Error middleware
app.use(errorMiddleware)


module.exports = app