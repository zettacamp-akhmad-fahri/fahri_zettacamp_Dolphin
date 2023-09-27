require('../db/mongoose')
const mongoose = require('mongoose')
const Song = require('../db/models/song.model')
const Playlist = require('../db/models/playlist.model')

async function calculatePlaylist () {
    const playlists = await Playlist.aggregate([
        {
            $lookup: {
                from: "songs",
                localField: "songs",
                foreignField: "_id",
                as: "songs"
            }
        },

        {
            $addFields: {
                calculatedTotalDuration: {$sum: "$songs.duration"}
            }
        }
    ])

    for (let playlist of playlists) {
        await Playlist.updateOne(
            {
                "_id": playlist["_id"]
            },

            {
                "totalDuration": playlist.calculatedTotalDuration,
                "totalSongs": playlist.songs.length
            }
        )
    }
}

module.exports = calculatePlaylist