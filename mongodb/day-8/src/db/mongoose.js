const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/'
const database = 'day-8'

mongoose.connect(`${url}${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error)
})