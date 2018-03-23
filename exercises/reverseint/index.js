// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const numberString = n + '';
  const numberRevString = numberString
    .split('')
    .reduce((prev, curr) => curr + prev);
  if (n > 0) return parseInt(numberRevString, 10);
  else {
    const num = parseInt(numberRevString, 10);
    return num - 2 * num;
  }
}

function reverseInt2(n) {
  const numberRevString = n
    .toString()
    .split('')
    .reduce((prev, curr) => curr + prev);
  return parseInt(numberRevString) * Math.sign(n);
}

module.exports = reverseInt2;
