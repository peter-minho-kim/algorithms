// Sum all the prime numbers up to and including the provided number.

// A prime number is defined as a number greater than one and having 
// only two divisors, one and itself.For example, 2 is a prime number 
// because it's only divisible by one and two.

// The provided number may not be a prime.

function sumPrimes(num) {
  let sum = 0

  for (let j = 2; j <= num; j++) {
    if (checkPrime(j)) {
      sum += j
    }
  }

  return sum
}

const checkPrime = (n) => {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true
}

sumPrimes(10);

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.