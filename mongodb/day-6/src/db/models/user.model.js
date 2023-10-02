const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    age: {
        type: Number,
        required: true,
    },

    hobbies: {
        type: [String],
        required: true,
    },

    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        province: {
            type: String,
            required: true
        },
    },

    favoriteBook: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
        required: false
    }
})

module.exports = mongoose.model('User', userSchema)