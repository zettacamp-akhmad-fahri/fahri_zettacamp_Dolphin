const mongoose = require('mongoose')
const User = require('./user.model')

const url = 'mongodb://localhost:27017/'
const database = 'task'

mongoose.connect(`${url}${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error)
})

User.create({
    name: "Akhmad",
    age: 27,
    hobbies: ["books", "walks"],
    address: {
        street: "Anjing",
        city: "Jakarta Selatan",
        province: "DKI Jakarta",
        zipCode: 14555,
    }
})