const express = require('express')
const app = express()
const port = 3000
const songs = require('./songs')
const functions = require('./functions')

app.use(express.json())

app.get('/all-songs', (req, res) => {
    res.send(books)
})

app.listen(port, () => {
    console.log(`Final task listening on port ${port}`)
  })