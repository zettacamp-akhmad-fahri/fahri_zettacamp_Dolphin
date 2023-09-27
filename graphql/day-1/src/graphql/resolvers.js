const Book = require('../db/models/book.model')

module.exports = {
    Query: {
        async getBookById(_, {ID}) {
            return await Book.findById(ID)
        },
        async getAllBooks(_) {
            return await Book.find()
        }
    },

    Mutation: {
        async createBook(_, {bookInput}) {
            // return await Book.create({
            //     title: bookInput.title,
            //     author: bookInput.author,
            //     releaseYear: bookInput.releaseYear,
            //     price: bookInput.price,
            //     stock: bookInput.stock,
            //     isManga: bookInput.isManga,
            //     genre: bookInput.genre
            // })
            return await Book.create(bookInput)
        },

        async createManyBooks(_, {books}) {
            try {
                return await Book.insertMany(books)
            }
            catch (error) {
                return error
            }
        },

        async deleteBookById(_, {ID}) {
            try {
                const wasDeleted = (await Book.deleteOne({_id: ID})).deletedCount
                return wasDeleted
            }
            catch (error) {
                return error
            }
        },

        async deleteAllBooks(_) {
            try {
                const wasDeleted = (await Book.deleteMany()).deletedCount
                return wasDeleted
            }
            catch (error) {
                return error
            }
        },

        async editBookById(_, {ID, bookInput}){
            try {
                const wasEdited = (await Book.updateOne({_id: ID}, bookInput)).nModified
                return wasEdited
            }
            catch (error) {
                return error
            }
        }
    }
}