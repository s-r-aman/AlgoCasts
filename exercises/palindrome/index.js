// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  const reversedString = str.split('').reduce((prev, curr) => curr + prev, '');
  return reversedString === str;
}

const palindrome2 = str =>
  str.split('').every((curr, i) => curr === str[str.length - i - 1]);

module.exports = palindrome2;
