// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let { length } = str;
  let newStr;
  for (length; length >= 0; length--) {
    if (newStr) {
      newStr = newStr + str[length];
    } else {
      newStr = str[length];
    }
  }
  return newStr;
}

function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

function reverse3(str) {
  let newStr = '';
  for (const character of str) {
    newStr = character + newStr;
  }
  return newStr;
}

const reverse4 = str => str.split('').reduce((prev, curr) => curr + prev, '');
module.exports = reverse4;
