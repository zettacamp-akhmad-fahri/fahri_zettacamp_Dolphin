// array of object songs
const songs = [
    {
        title: "Dana-Dan",
        artist: "Bloodywood",
        genre: "Metal",
        duration: 295
    },

    {
        title: "Monochrome",
        artist: "Babymetal",
        genre: "Metal",
        duration: 238
    },

    {
        title: "Spaceman",
        artist: "Electric Callboy",
        genre: "Metal",
        duration: 190
    },

    {
        title: "Parasite Eve",
        artist: "Bring Me The Horizon",
        genre: "Metal",
        duration: 298
    },

    {
        title: "Aaj",
        artist: "Bloodywood",
        genre: "Metal",
        duration: 301
    },

    {
        title: "Jee Veerey",
        artist: "Bloodywood",
        genre: "Metal",
        duration: 279
    },

    {
        title: "Megitsune",
        artist: "Babymetal",
        genre: "Metal",
        duration: 248
    },

    {
        title: "Distortion",
        artist: "Babymetal",
        genre: "Metal",
        duration: 186
    },

    {
        title: "Drown",
        artist: "Bring Me The Horizon",
        genre: "Metal",
        duration: 222
    },

    {
        title: "We Got The Moves",
        artist: "Electric Callboy",
        genre: "Metal",
        duration: 207
    },

    {
        title: "El Diablo",
        artist: "Machine Gun Kelly",
        genre: "Hip Hop",
        duration: 147
    },

    {
        title: "Floor 13",
        artist: "Machine Gun Kelly",
        genre: "Hip Hop",
        duration: 195
    },

    {
        title: "Glass House",
        artist: "Machine Gun Kelly",
        genre: "Hip Hop",
        duration: 212
    },

    {
        title: "Drive Safe",
        artist: "Rich Brian",
        genre: "Hip Hop",
        duration: 241
    },

    {
        title: "Kids",
        artist: "Rich Brian",
        genre: "Hip Hop",
        duration: 271
    },

    {
        title: "100 Degrees",
        artist: "Rich Brian",
        genre: "Hip Hop",
        duration: 187
    },

    {
        title: "Where Does The Time Go",
        artist: "Rich Brian",
        genre: "Hip Hop",
        duration: 252
    },

    {
        title: "Slow Down Turbo",
        artist: "Rich Brian",
        genre: "Hip Hop",
        duration: 240
    },

    {
        title: "Idol",
        artist: "Yoasobi",
        genre: "Jpop",
        duration: 214
    },

    {
        title: "Tabun",
        artist: "Yoasobi",
        genre: "Jpop",
        duration: 257
    },

    {
        title: "Yoru Ni Kakeru",
        artist: "Yoasobi",
        genre: "Jpop",
        duration: 259
    },

    {
        title: "Monster",
        artist: "Yoasobi",
        genre: "Jpop",
        duration: 206
    },

    {
        title: "Odo",
        artist: "Ado",
        genre: "Jpop",
        duration: 211
    },

    {
        title: "Usseewa",
        artist: "Ado",
        genre: "Jpop",
        duration: 207
    },

    {
        title: "New Genesis",
        artist: "Ado",
        genre: "Jpop",
        duration: 227
    },

    {
        title: "Tot Musica",
        artist: "Ado",
        genre: "Jpop",
        duration: 196
    },

    {
        title: "Perfect",
        artist: "Ed Sheeran",
        genre: "Pop",
        duration: 264
    },

    {
        title: "Dive",
        artist: "Ed Sheeran",
        genre: "Pop",
        duration: 239
    },

    {
        title: "Happier",
        artist: "Ed Sheeran",
        genre: "Pop",
        duration: 208
    },

    {
        title: "Castle on The Hill",
        artist: "Ed Sheeran",
        genre: "Pop",
        duration: 262
    },

    {
        title: "Skyfall",
        artist: "Adele",
        genre: "Pop",
        duration: 287
    },

    {
        title: "Set Fire to The Rain",
        artist: "Adele",
        genre: "Pop",
        duration: 243
    },

    {
        title: "Rolling in The Deep",
        artist: "Adele",
        genre: "Pop",
        duration: 229
    }, 
]

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

    console.log(playlist)
    console.log(`Total Songs: ${playlist.length}`)
    console.log(`Total Duration: ${totalDuration}`)
}

// function to get total duration and total songs

const groupByArtist = groupArtist(songs)
const groupByGenre = groupGenre(songs)

function getTotal (groups) {
    // declare output as an empty array
    let outputArray = []
    // turn groups object into array
    const groupsEntries = Object.entries(groups)

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


// // execute task 2
// console.log(groupArtist(songs))

// // execute task 3
// console.log(groupGenre(songs))

// // execute task 4
// createRandomPlaylist(songs)

// execute additional
// console.log(getTotal(groupByGenre))
console.log(getTotal(groupByArtist))