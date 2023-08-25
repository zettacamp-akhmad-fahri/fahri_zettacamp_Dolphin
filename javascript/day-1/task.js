// declare favorite book
let firstBook = "One Piece"

// update value with least favorite book
firstBook = "Two Piece"

// declare second book as constant
const secondBook = "Mockingjay"

// // try to update constant value
// secondBook = "Catching Fire"

// console.log(firstBook)
// console.log(secondBook)

// concat first and second variable

// concat1 = firstBook + " is my least favorite book and " + secondBook + " is one of my favorite books"
// concat2 = `${firstBook} is my least favorite book and ${secondBook} is one of my favorite books`

// console.log(concat1)
// console.log(concat2)

// experimenting with other data types

books = {
    ownerName: "Akhmad Fahri",
    ownerAge: 26,
    isSingle: true,
    favorite: ["One Piece", "Mockingjay", "Laskar Pelangi", "Monster", "Injustice"],
    leastFavorite: ["Two Piece", "Boruto", "The Boys", "Fifty Shades of Grey"],

    addFavorite: function(addition) {
        this.favorite.push(addition)
    },

    addLeastFavorite: function(addition) {
        this.leastFavorite.push(addition)
    }
}

// console.log(books.favorite)
// books.addFavorite("Oyasumi Punpun")
// console.log(books.favorite)

// variable types
// console.log(`Data Type of books: ${typeof books}`)
// console.log(`Data Type of ownerName: ${typeof books.ownerName}`)
// console.log(`Data Type of ownerAge: ${typeof books.ownerAge}`)
// console.log(`Data Type of isSingle: ${typeof books.isSingle}`)
console.log(`Data Type of favorite: ${typeof books.favorite}`)
console.log(typeof [1, 2, 3])
console.log(Array.isArray(books.favorite))

// console.log(`Data Type of addFavorite: ${typeof books.addFavorite}`)