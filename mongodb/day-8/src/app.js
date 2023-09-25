const express = require('express')
const mongoose = require('mongoose')
require('./db/mongoose')
const app = express()
const port = 3000

app.use(express.json())

const Song = require('./db/models/song.model')
const Playlist = require('./db/models/playlist.model')
const createRandomPlaylist = require('./functions/createRandomPlaylists')
const updatePlaylistsField = require('./functions/updatePlaylistsField')

// songs
app.post('/songs', async (req, res) => {
    try {
        const insertedSongs = await Song.insertMany(req.body)
        res.status(201).send(insertedSongs)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/songs', async (req, res) => {
    try {
        const songs = await Song.find(req.body)
        res.status(200).send(songs)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.delete('/songs', async (req, res) => {
    try {
        const deleted = await Song.deleteMany(req.body)
        res.status(200).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/songs', async (req, res) => {
    try {
        const updated = await Song.updateOne(req.body[0], req.body[1])
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/updatePlaylistsField', async (req, res) => {
    try {
        await updatePlaylistsField()
        res.status(200).send("Update Successful")
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// playlist
app.post('/playlists', async (req, res) => {
    try {
        const playlist = await createRandomPlaylist.container()
        const insertedPlaylist = await Playlist.insertMany(playlist)
        res.status(201).send(insertedPlaylist)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/playlists', async (req, res) => {
    try {
        const playlists = await Playlist.find(req.body)
        res.status(200).send(playlists)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.delete('/playlists', async (req, res) => {
    try {
        const deleted = await Playlist.deleteMany(req.body)
        res.status(200).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/playlists', async (req, res) => {
    try {
        const updated = await Playlist.updateOne(req.body[0], req.body[1])
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})