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
    // variables declaration
    const count = {}
    let maxCount = 0
    let maxCountNum

    // loop through nums array
    for (let num of nums) {
        // set nums element as key and its count as value
        if (count[num] == null) {
            count[num] = 1
        }
        else {
            count[num] += 1
        }

        // pick element with the highest count 
        if (count[num] > maxCount) {
            maxCount = count[num]
            maxCountNum = num
        }
    }
    return maxCountNum
  }

  count = {
    3: 2,
    2: 1
  }

  maxCount = 2
  maxCountNum = 3

console.log(majorityElement([3, 2, 3])); // Output: 3 
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement(["Akhmad", "Fahri", "Akhmad", "Fahri", "Fahri"])); // Output: "Fahri"
console.log(majorityElement([4, 3, 2, 1, 2, 2, 3, 4])); // Output: 2