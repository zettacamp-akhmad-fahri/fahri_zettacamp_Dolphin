const mongoose = require('mongoose')

const bookshelfSchema = mongoose.Schema({
    position: {
        column: {
            type: String,
            required: true
        },
        row: {
            type: Number,
            required: true
        },
    },

    books: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Book"
    }],

    discount: [{
        month: {
            type: String,
            required: true
        },
        value: {
            type: Number,
            required: true
        }
    }],

    genre: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Bookshelf', bookshelfSchema)