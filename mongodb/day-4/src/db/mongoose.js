const mongoose = require('mongoose')
const User = require('./models/user.model')
const Book = require('./models/book.model')

const url = 'mongodb://localhost:27017/'
const database = 'day-2'

mongoose.connect(`${url}${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error)
})