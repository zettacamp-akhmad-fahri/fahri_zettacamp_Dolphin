/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
    let uniqueCharacters = "" // the string that stores the unique characters

    // loop through str
    for (let character of str) {
        // add all unique characters to uniqueCharactes string
        if (!uniqueCharacters.includes(character)) {
            uniqueCharacters += character
        }
    }
    // return true if all characters are unique, return false otherwise
    return str == uniqueCharacters

}

// function hasUniqueCharacters(str) {
//     // create a set from the string
//     uniqueSet = new Set(str)

//     // compare the size of the set and the original string
//     // return true if the sizes are the same, return false otherwise
//     return str.length == uniqueSet.size

// }


console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
console.log(hasUniqueCharacters("qwertyu123")); // Output: true
console.log(hasUniqueCharacters("qwertyu1231")); // Output: false