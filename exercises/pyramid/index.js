// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

let arr = [];
const giveHash = n => {
  let str = '';
  for (let index = 0; index < n; index++) {
    str = str + '#';
  }
  arr.push(`called with ${n}`);
  return str;
};

function pyramid(n) {
  for (let index = 1; index <= n; index++) {
    let str = '';
    for (let index2 = 0; index2 < n - index; index2++) {
      str = str + ' ';
    }
    str = str + giveHash(index * 2 - 1);
    for (let index4 = 0; index4 < n - index; index4++) {
      str = str + ' ';
    }
    console.log(str);
  }
}

pyramid(3);

module.exports = pyramid;
