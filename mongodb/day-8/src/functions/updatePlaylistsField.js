require('../db/mongoose')
const mongoose = require('mongoose')
const Song = require('../db/models/song.model')
const Playlist = require('../db/models/playlist.model')

async function updatePlaylistsField() {
    const songs = await Song.find()
    const playlists = await Playlist.find()

    for (let song of songs) {
        const playlistArray = []
        for (let playlist of playlists) {
            for (let id of playlist.songs) {
                if(String(id) == String(song["_id"])) {
                    playlistArray.push(playlist["_id"])
                    break
                }
            }
        }
        await Song.updateOne(
            {
                "_id": song["_id"]
            },

            {
                "playlists": playlistArray
            }
        )
    }
}

module.exports = updatePlaylistsField
