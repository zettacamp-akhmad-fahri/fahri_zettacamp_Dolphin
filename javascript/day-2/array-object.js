// declare array of objects
bookData = [
    {
        title: "One Piece",
        author: "Eiichiro Oda",
        releaseYear: 1997,
        isManga: true
    },
    {
        title: "Mockingjay",
        author: "Suzanne Collins",
        releaseYear: 2010,
        isManga: false
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        releaseYear: 2003,
        isManga: false
    },
    {
        title: "Oyasumi Punpun",
        author: "Inio Asano",
        releaseYear: 2007,
        isManga: true
    }
]

console.log(bookData)

// // assign new key to object
// console.log(bookData[0])
// bookData[0].isFinished = false

// console.log(bookData[0])

// push object into array
bookData.push(
    {
        title: "Naruto",
        author: "Masashi Kishimoto",
        releaseYear: 1999,
        isManga: true
    }
)

console.log(bookData)