/**
 *
 * Write a Node.js function isPrime(n) that takes an integer n as an argument and returns true if n is a prime number and false otherwise.
 *
 */
function isPrime(n) {
    let factor = 0

    for (let i = 1; i <= n; i++) {
        if (n % i == 0) {
            factor += 1
        }
    }

    return factor == 2
  }
  
  console.log(isPrime(10));
  console.log(isPrime(43));
  console.log(isPrime(2));
  console.log(isPrime(10));
  console.log(isPrime(1));