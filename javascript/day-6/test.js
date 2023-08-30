// push, pop, unshift, shift, delete
let arr1 = [1, 2, 3, 4]

arr1.push(5)
console.log(arr1)

arr1.pop()
console.log(arr1)

arr1.unshift(-1)
console.log(arr1)

arr1.shift()
console.log(arr1)

delete arr1[0]
console.log(arr1)

// join
let arr2 = ["Alabasta", "Water 7", "Wholecake Island"]

console.log(arr2.join(", "))

// concat

let mangas = ["One Piece", "Oyasumi Punpun", "Kengan Ashura"]
let novels = ["Mockingjay", "The Da Vinci Code"]

let books = mangas.concat(novels)
console.log(books)


// array for foreach and  map
let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
]

// foreach
let officersIds = [];
officers.forEach( (officer) => officersIds.push(officer.id) )
console.log(officersIds)

// // map
// let officersIds = officers.map( (officer) => officer.id)
// console.log(officersIds)

// flat
let twoDimensionArray = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]

let oneDimensionArray = twoDimensionArray.flat()
console.log(oneDimensionArray)
