const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    author: {
        type: String,
        required: true,
    },

    releaseYear: {
        type: Number,
        required: true,
    },

    price: {
        type: Number,
        required: true,
    },

    stock: {
        type: Number,
        required: true,
    },

    isManga: {
        type: Boolean,
        required: true,
    },

    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)