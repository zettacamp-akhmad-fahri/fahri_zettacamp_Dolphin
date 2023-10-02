const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const app = express()
const port = 3000

app.use(express.json())

const User = require('./db/models/user.model')
const Book = require('./db/models/book.model')
const Bookshelf = require('./db/models/bookshelf.model')

// books
app.post('/createBooks', async (req, res) => {
    try {
        insertedBooks = await Book.create(req.body)
        res.status(201).send(insertedBooks)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.post('/books', async (req, res) => {
    try {
        insertedBooks = await Book.insertMany(req.body)
        res.status(201).send(insertedBooks)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/books', async (req, res) => {
    try {
        books = await Book.find(req.body)
        res.status(200).send(books)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.delete('/books', async (req, res) => {
    try {
        deleted = await Book.deleteMany(req.body)
        res.status(200).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/books', async (req, res) => {
    try {
        updated = await Book.updateOne(req.body[0], req.body[1])
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// users
app.post('/users', async (req, res) => {
    try {
        insertedUsers = await User.insertMany(req.body)
        res.status(201).send(insertedUsers)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/users', async (req, res) => {
    try {
        users = await User.find(req.body)
        res.status(200).send(users)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.delete('/users', async (req, res) => {
    try {
        deleted = await User.deleteMany(req.body)
        res.status(200).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/users', async (req, res) => {
    try {
        updated = await User.updateMany(req.body[0], req.body[1])
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/usersFavBook', async (req, res) => {
    try {
        users = await User.aggregate([{
            $lookup: {
                   from: "books",
                   localField: "favoriteBook",
                   foreignField: "_id",
                   as: "favoriteBook"
                 }
        }])
        res.status(200).send(users)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// bookshelves
app.post('/bookshelves', async (req, res) => {
    try {
        insertedBookshelf = await Bookshelf.insertMany(req.body)
        res.status(201).send(insertedBookshelf)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// app.get('/bookshelves', async (req, res) => {
//     try {
        
//         const bookshelves = await Bookshelf.aggregate([
//             {
//                 $lookup: {
//                     from: "books",
//                     localField: "books",
//                     foreignField: "_id",
//                     as: "books"
//                     }
//             },
//             {
//                 $match: req.body
//             }

//         ])
//         res.status(200).send(bookshelves)
//     }
//     catch(error) {
//         res.status(400).send(error)
//     }
// })

app.get('/bookshelves', async (req,res) => {
    try {
        const bookshelves = await Bookshelf.find(req.body).populate("books")
        res.status(200).json(bookshelves)
    }
    catch (error) {
        res.status(400).send(error)
    }
})

app.get('/bookshelves/:id', async (req, res) => {
    try {
        const bookshelves = await Bookshelf.findById(req.params.id)
        res.status(200).send(bookshelves)
    }
    catch (error) {
        res.status(400).send(error)
    }
})


app.delete('/bookshelves', async (req, res) => {
    try {
        const deleted = await Bookshelf.deleteMany(req.body)
        res.status(200).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/bookshelves', async (req, res) => {
    try {
        const updated = await Bookshelf.updateOne(req.body[0], req.body[1])
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})