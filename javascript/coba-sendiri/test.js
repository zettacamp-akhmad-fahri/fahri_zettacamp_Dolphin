l1 = [9,9,9,9,9,9,9]
l2 = [9,9,9,9]

var addTwoNumbers = function(l1, l2) {
    let firstNumberAsString = ""
    let secondNumberAsString = ""
    for (let i = l1.length - 1; i >= 0; i--) {
        firstNumberAsString += l1[i]
    }

    for (let i = l2.length - 1; i >= 0; i--) {
        secondNumberAsString += l2[i]
    }

    firstNumber = Number(firstNumberAsString)
    secondNumber = Number(secondNumberAsString)

    sum = firstNumber + secondNumber

    sumAsString = String(sum)

    let output = []

    for (let i = sumAsString.length - 1; i >= 0; i--) {
        output.push(Number(sumAsString[i]))
    }

    return output
};

output = addTwoNumbers(l1,l2)

console.log(output)