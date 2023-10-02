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
const calculatePlaylist = require('./functions/calculatePlaylist')

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
        const updated = await Song.updateMany(req.body[0], req.body[1])
        calculatePlaylist()
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/songAggregate', async (req, res) => {
    try {
        const docPerPage = req.body.docPerPage
        const viewPage = req.body.viewPage

        const songAggregate = await Song.aggregate([
            {
                $facet: {
                    "genreSummary": [
                        {
                            $group: {
                                _id: {genre: "$genre"},
                                totalDuration: {$sum: "$duration"},
                                averageDuration: {$avg: "$duration"},
                                count: {$sum: 1}
                            }
                        }
                    ],

                    "showSongs": [
                        {
                            $match: {duration: {$gte: 250}}
                        },

                        {
                            $lookup: {
                                from: "playlists",
                                localField: "playlists",
                                foreignField: "_id",
                                as: "playlists"
                            }
                        },

                        {
                            $sort: {duration: - 1}
                        },
            
                        {
                            $skip: viewPage * (docPerPage - 1)
                        },
            
                        {
                            $limit: docPerPage
                        }
                    ]
                }
            }
        ])
        res.status(200).send(songAggregate[0][req.body.facet])
        // res.status(200).send(songAggregate)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

// playlist
app.post('/createRandomPlaylist', async (req, res) => {
    try {
        const playlist = await createRandomPlaylist.container()
        const insertedPlaylist = await Playlist.insertMany(playlist)

        await updatePlaylistsField()

        res.status(201).send(insertedPlaylist)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.post('/playlists', async (req, res) => {
    try {
        for (ids of req.body.ids) {
            await Playlist.create({
                songs: ids,
                totalSongs: 0,
                totalDuration: 0
            })
            calculatePlaylist()
        }

        await updatePlaylistsField()
        res.status(201).send("Successful")
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
        await updatePlaylistsField()
        res.status(200).send(deleted)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.put('/playlists', async (req, res) => {
    try {
        const updated = await Playlist.updateMany(req.body[0], req.body[1])
        calculatePlaylist()
        res.status(200).send(updated)
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.get('/playlistAggregate', async (req, res) => {
    try {
        const docPerPage = req.body.docPerPage
        const viewPage = req.body.viewPage

        const playlistAggregate = await Playlist.aggregate([
            {
                $facet: {
                    "playlistGrouping": [
                        {
                            $group: {
                                _id: {totalSongs: "$totalSongs"},
                                totalDuration: {$sum: "$totalDuration"},
                                averageDuration: {$avg: "$totalDuration"},
                                count: {$sum: 1}
                            }
                        }
                    ],

                    "showPlaylists": [
                        {
                            $match: {totalSongs: {$gte: 10}}
                        },
            
                        {
                            $lookup: {
                                from: "songs",
                                localField: "songs",
                                foreignField: "_id",
                                as: "songs"
                            }
                        },
            
                        {
                            $sort: {totalSongs: -1, totalDuration: -1}
                        },
            
                        {
                            $skip: viewPage * (docPerPage - 1)
                        },
            
                        {
                            $limit: docPerPage
                        }
                    ]
                }
            }
        ])
        res.status(200).send(playlistAggregate[0][req.body.facet])
    }
    catch(error) {
        res.status(400).send(error)
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})