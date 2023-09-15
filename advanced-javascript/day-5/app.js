require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const jwt = require('jsonwebtoken')

const songs = require('./songs')
const functions = require('./functions')


app.use(express.json())

// middleware to authenticate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'] // get BEARER token
    const token = authHeader ? authHeader.split(' ')[1] : null // get token
    if (token == null) return res.send("No token")

    // token verification
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.send("Invalid token")
        next()
    })

}

app.get('/all-songs', authenticateToken, (req, res) => {
    res.send(songs)
})

app.get('/group-artist', authenticateToken, (req, res) => {
    const groupByArtist = functions.groupArtist(songs)
    res.send(groupByArtist)
})

app.get('/group-genre', authenticateToken, (req, res) => {
    const groupByGenre = functions.groupGenre(songs)
    res.send(groupByGenre)
})

app.get('/random-playlist', authenticateToken, (req, res) => {
    const randomPlaylist = functions.createRandomPlaylist(songs)
    res.send(randomPlaylist)
})

app.get('/generate-token', (req, res) => {
    // user information
    const user = {
        name: "admin",
        authorization: "admin"
    }

    // create token
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '1h'})
    res.json({accessToken: accessToken})
})

app.post('/get-total', authenticateToken, (req, res) => {
    const total = functions.getTotal(req.body[0])
    res.send(total)
})
app.listen(port, () => {
    console.log(`Final task listening on port ${port}`)
  })