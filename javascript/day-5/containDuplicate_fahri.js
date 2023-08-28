/**
 * write a function that returns true if there's duplicate in the array, and false otherwise.
 * SEE EXAMPLE BELLOW!
 * 
 * 
Example
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true

 * Determines if the array contains any duplicate value.

 * @param {number[]} nums - The input array of integers.
 * @return {boolean} Returns true if the array contains any duplicate value, false otherwise.
 */
function containsDuplicate(nums) {
    // initialize empty array to store unique numbers
    let uniqueNumbers = []

    // loop through the nums array
    for (let num of nums) {
        // return true if we find duplicate
        if(uniqueNumbers.includes(num)) {
            return true
        }
        uniqueNumbers.push(num)
    }
    // return false if no duplicate is found
    return false
  }

// function containsDuplicate(nums) {
// // create set from nums array
// uniqueSet = new Set(nums)

// // compare the sizes of nums and uniqueSet
// // return true if the sizes are different -> duplicate found
// // return false otherwise
// return !(nums.length === uniqueSet.size)
// }

console.log(containsDuplicate([1, 2, 3, 1])); // Output: true
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Output: true