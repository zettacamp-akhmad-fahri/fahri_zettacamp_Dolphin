require('../db/mongoose')
const mongoose = require('mongoose')
const Song = require('../db/models/song.model')

function createRandomPlaylist (songs) {
    let totalDuration = 0   // declare total duration as 0
    let playlist = []       // declare playlist as an empty array

    while (totalDuration <= 3600)  {
        // get random number
        let random = Math.floor(Math.random() * songs.length)

        // check if the song already on playlist
        if (!playlist.includes(songs[random]["_id"])) {
            // check whether duration goes over one hour if the song is added
            if (totalDuration + songs[random].duration > 3600) {
                break
            }
            playlist.push(songs[random]["_id"])         // add song to playlist
            totalDuration += songs[random].duration     // add song duration to total duration
        }
    }

    const output = {
        songs: playlist,
        totalSongs: playlist.length,
        totalDuration: totalDuration
    }

    return output
}

async function container() {
    const songs = await Song.find()
    return createRandomPlaylist(songs)
}

container()

module.exports = {container}