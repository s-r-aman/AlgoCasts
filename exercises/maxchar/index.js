// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const objectChar = str.split('').reduce((prev, curr) => {
    const object = prev;
    if (object[curr]) {
      object[curr] = object[curr] + 1;
    } else {
      object[curr] = 1;
    }
    return object;
  }, {});

  return str.split('').sort((a, b) => {
    if (objectChar[a] > objectChar[b]) {
      return -1;
    } else {
      return 1;
    }
  })[0];
}

function maxChar2(str) {
  let object = {};
  let max = 0;
  let maxChar = '';
  for (const character of str) {
    object[character] = object[character] + 1 || 1;
  }
  for (const char in object) {
    if (object[char] > max) {
      max = object[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar2;
