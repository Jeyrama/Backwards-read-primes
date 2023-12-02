/*
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) 
are a different prime. (This rules out primes which are palindromes.)

Task:
  Find all Backwards Read Primes between two positive given numbers (both inclusive), 
  the second one always being greater than or equal to the first one. 
  The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Example:
  13 17 31 37 71 73 are Backwards Read Primes
  13 is such because it's prime and read from right to left 
  writes 31 which is prime too. Same for the others.

Example: (in general form):
  backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => 
    [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

Note:
  Forth Return only the first backwards-read prime between start and end or 0 if you don't find any.
*/


// Solution

const isPrime = num => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isReversePrime = num => {
  let reverseNum = +num.toString().split('').reverse().join('');
  if (num !== reverseNum) return isPrime(reverseNum);
  else return false;
}

const backwardsPrime = (start, stop) => {
  let result = [];
  for (let num = start; num <= stop; num++) {
    if (num % 2 !== 0) {
      if (isPrime(num) && isReversePrime(num)) result.push(num);
    }
  }
  return result;
}

// or