const app = require('./app')
const mongoose = require('mongoose')
const { config } = require('dotenv')
config()

const PORT = process.env.PORT || 8080
const SERVER_URI = `http://localhost:${PORT}`
const MONGO_URI = process.env.MONGO_URI

app.listen(PORT, () => console.log('Server is up and running on ' + SERVER_URI))

const dbConnect = async () => {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connection is up and going good')
  } catch (error) {
    console.log('Error when connecting to the database')
  }
}
dbConnect()
