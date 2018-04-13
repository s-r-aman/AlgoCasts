// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let index = 1; index <= n; index++) {
    let str = '';
    for (let index2 = 0; index2 < index; index2++) {
      str = str + '#';
    }
    for (let index3 = 0; index3 < n - index; index3++) {
      str = str + ' ';
    }
    console.log(str);
  }
}

module.exports = steps;
