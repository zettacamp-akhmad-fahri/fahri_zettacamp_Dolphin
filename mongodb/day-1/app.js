const mongoose = require('mongoose')
const User = require('./user.model')

const url = 'mongodb://localhost:27017/'
const database = 'test-database'

mongoose.connect(`${url}${database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch((error) => {
    console.error("Error connecting to MongoDB: ", error)
})

const users = new User()

// run()

// async function run() {
//     try {
//         const user = User.create({
//             name: "Fahri",
//             age: 26,
//             email: "akhfahrim@gmail.com",
//         })
//     }
//     catch (e) {
//         console.log(e.message)
//     }
// }