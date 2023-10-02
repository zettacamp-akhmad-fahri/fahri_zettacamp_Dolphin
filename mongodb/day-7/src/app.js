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
        const updated = await Bookshelf.updateMany(req.body[0], req.body[1], req.body[2])
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// distinct
app.get('/bookDistinct', async (req, res) => {
    try {
        const books = await Book.find(req.body[0]).distinct(req.body[1].distinct)
        res.status(200).send(books)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// aggregates
app.get('/bookshelfAggregate', async(req, res) => {
    try {
        const bookshelves = await Bookshelf.aggregate()
        res.status(200).send(bookshelves)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/bookAggregate', async(req, res) => {
    try {
        const aggregateArray = []
        
        // match
        if (req.body.match){
            const matchInnerObject = {}
            matchInnerObject[req.body.match.field] = req.body.match.condition
        
            const matchObject = {
                $match: matchInnerObject
            }

            aggregateArray.push(matchObject)
        }

        // sort
        if (req.body.sort) {
            const sortInnerObject = {}
            sortInnerObject[req.body.sort.field] = req.body.sort.sortOrder

            const sortObject = {
                $sort: sortInnerObject
            }

            aggregateArray.push(sortObject)
        }

        // concat

        if (req.body.concat) {
            const concatObject = {
                $concat: req.body.concat.elements
            }
    
            const addFieldInnerObject = {}
            addFieldInnerObject[req.body.concat.newFieldName] = concatObject
    
            const addFieldObject = {
                $addFields: addFieldInnerObject
            }
    
            aggregateArray.push(addFieldObject)
        }
        

        console.log(aggregateArray)
        const books = await Book.aggregate(aggregateArray)
        res.status(200).send(books)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/bookshelfLookup', async(req, res) => {
    try {
        const lookupArray = []

        for (let element of req.body) {
            lookupArray.push({
                $lookup: {
                    from: element.reference,
                    localField: element.localField,
                    foreignField: element.foreignField,
                    as: element.as
                }
            })
        }
        const bookshelves = await Bookshelf.aggregate(lookupArray)
        res.status(200).send(bookshelves)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/pagination', async (req, res) => {
    try {
        const pageSize = req.body.documentsPerPage
        const viewPage = req.body.viewPage

        const aggregateArray = [
            {
                $skip:  pageSize * (viewPage - 1)
            },

            {
                $limit: pageSize
            }

        ]

        const books = await Book.aggregate(aggregateArray)
        res.status(200).send(books)
    }

    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/facet', async (req, res) => {
    aggregateArray = [
        {
            $facet: {
                "group": [
                    {
                        $group: {
                            _id: {genre: "$" + req.body[0].groupBy},
                            count: {$sum: 1}
                        }
                    },

                    {
                        $sort: {count: -1}
                    }
                ],

                "bucket": [
                    {
                        $bucket: {
                            groupBy: "$" + req.body[1].groupBy,
                            boundaries: req.body.boundaries,
                            default: "Other",
                            output: {
                                "count": {$sum: 1},
                                "books": {
                                    $push: {
                                        "titleAuthor": {$concat: ["$title", " by ", "$author"]},
                                        "releaseYear": "$" + req.body[1].groupBy
                                    }
                                }
                            }
                        }
                    }
                ]
            }
        }
    ]

    const books = await Book.aggregate(aggregateArray)
    res.status(200).send(books)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})