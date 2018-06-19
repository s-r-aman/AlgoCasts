// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:

// const fib = (length) => {
// 	let tempArray = [0];
// 	for (i = 0; i < length; i++) {
// 		if (i === 0) {
// 			tempArray.push(1)

// 		} else {
// 			tempArray.push(tempArray[i] + tempArray[i-1])
// 		}
// 	}
// 	return tempArray;
// }

const cache = {
  0: 0,
  1: 1
};

const fib = n => {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  let temp1 = cache[n - 1] || fib(n - 1);
  let temp2 = cache[n - 2] || fib(n - 2);
  cache[n] = temp1 + temp2;

  return cache[n];
};
//   fib(4) === 3

// function fib(n) {}

module.exports = fib;
