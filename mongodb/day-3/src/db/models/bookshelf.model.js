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
    }]
})

module.exports = mongoose.model('Bookshelf', bookshelfSchema)