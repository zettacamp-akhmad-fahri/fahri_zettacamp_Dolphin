const songs = require('./songs')

// function to group songs based on artists
function groupArtist(songs) {
    // declare output as empty object
    const groupByArtist = {}

    // loop through songs array
    for (let song of songs) {
        // set artist as key and the songs objects as value
        if (groupByArtist[song.artist] == null) {
            groupByArtist[song.artist] = [song]
        }
        else {
            groupByArtist[song.artist].push(song)
        }
    }

    return groupByArtist
}

// function to group songs based on genre
function groupGenre(songs) {
    // declare output as empty object
    const groupByGenre = {}

    // loop through songs array
    for (let song of songs) {
        // set genre as key and the songs objects as value
        if (groupByGenre[song.genre] == null) {
            groupByGenre[song.genre] = [song]
        }
        else {
            groupByGenre[song.genre].push(song)
        }
    }

    // console.log(groupByGenre)
    // console.log("Genres:")
    // console.log(Object.keys(groupByGenre))
    return groupByGenre
}

// function to create random playlist under one hour
function createRandomPlaylist (songs) {
    let totalDuration = 0   // declare total duration as 0
    let playlist = []       // declare playlist as an empty array

    while (totalDuration <= 3600)  {
        // get random number
        let random = Math.floor(Math.random() * songs.length)

        // check if the song already on playlist
        if (!playlist.includes(songs[random])) {
            // check whether duration goes over one hour if the song is added
            if (totalDuration + songs[random].duration > 3600) {
                break
            }
            playlist.push(songs[random])            // add song to playlist
            totalDuration += songs[random].duration // add song duration to total duration
        }
    }

    const output = {
        playlist: playlist,
        totalSongs: playlist.length,
        totalDuration: totalDuration
    }
    return output
    // console.log(playlist)
    // console.log(`Total Songs: ${playlist.length}`)
    // console.log(`Total Duration: ${totalDuration}`)
}

// function to get total duration and total songs
function getTotal (targetGroup) {
    const groupByArtist = groupArtist(songs)
    const groupByGenre = groupGenre(songs)
    let groups

    // choose object based on the category
    if (targetGroup.category == "genre") {
        groups = groupByGenre
    }
    else if (targetGroup.category == "artist") {
        groups = groupByArtist
    }
    else {
        return "Invalid input"
    }

    // declare output as an empty array
    let outputArray = []
    // turn groups object into array
    const groupsEntries = Object.entries(groups)
    // console.log(groupsEntries)

    for (let group of groupsEntries) {
        // calculate total duration
        let durationArray = group[1].map( (song) => song.duration) // create array of duration
        let totalDuration = durationArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // sum all duration

        // create group object containing name, total songs, and total duration
        const groupObject = {
            "name": group[0],
            "total songs": durationArray.length,
            "total duration": totalDuration
        }

        // add group object into output array
        outputArray.push(groupObject)


    }
    return outputArray
}

module.exports = {groupArtist, groupGenre, createRandomPlaylist, getTotal}