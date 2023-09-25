const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    songs: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Song"
    }],

    totalSongs: {
        type: Number,
        required: true
    },

    totalDuration: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Playlist', playlistSchema)