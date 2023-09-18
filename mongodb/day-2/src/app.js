const express = require('express')
require('./db/mongoose')
const app = express()
const port = 3000

app.use(express.json())

const User = require('./db/models/user.model')
const Book = require('./db/models/book.model')


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
        res.status(201).send(books)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.delete('/books', async (req, res) => {
    try {
        deleted = await Book.deleteMany(req.body)
        res.status(201).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/books', async (req, res) => {
    try {
        updated = await Book.updateMany(req.body[0], req.body[1])
        res.status(201).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})