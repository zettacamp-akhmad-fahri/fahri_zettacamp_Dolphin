const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    artist: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    duration: {
        type: Number,
        required: true
    },

    playlists: [{
        type: mongoose.Types.ObjectId,
        required: false,
        ref: "Playlist"
    }]
})

module.exports = mongoose.model('Song', songSchema)