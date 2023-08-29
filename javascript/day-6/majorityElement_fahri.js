/**
 * write a function that returns the majority element.
 * The majority element is the element that appears more than other element.
 * READ EXAMPLE BELOW!

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 

 * You may assume that the majority element always exists in the array.

 * Returns the majority element from the input array of integers.

 * @param {number[]} nums - The input array of integers.
 * @return {number} Returns the majority element.
 */
function majorityElement(nums) {
    const count = {}
    let maxCount = 0
    let maxCountNum
    for (let num of nums) {
        if (count[num] == null) {
            count[num] = 1
        }
        else {
            count[num] += 1
        }

        if (count[num] ) {
            maxCount = count[num]
            maxCountNum = num
        }

        
    }
    return maxCountNum
  }

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2 