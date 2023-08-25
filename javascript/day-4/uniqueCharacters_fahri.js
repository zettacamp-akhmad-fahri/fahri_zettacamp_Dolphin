/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
    let uniqueCharacters = ""

    for (let character of str) {
        if (!uniqueCharacters.includes(character)) {
            uniqueCharacters += character
        }
    }
    return str == uniqueCharacters

}

// function hasUniqueCharacters(str) {
//     uniqueSet = new Set(str)
//     return str.length == uniqueSet.size

// }


console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
console.log(hasUniqueCharacters("qwertyu123")); // Output: true
console.log(hasUniqueCharacters("qwertyu1231")); // Output: false