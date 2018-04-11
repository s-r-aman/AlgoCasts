// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function stringToObject(string) {
  const array = string
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('');
  return array.reduce((prev, curr) => {
    if (prev[curr]) {
      prev[curr] = prev[curr] + 1;
    } else {
      prev[curr] = 1;
    }
    return prev;
  }, {});
}

function anagrams1(stringA, stringB) {
  const objectA = stringToObject(stringA);
  const objectB = stringToObject(stringB);
  for (const key in objectA) {
    if (objectA[key] !== objectB[key]) {
      return false;
    }
  }
  for (const key in objectB) {
    if (objectB[key] !== objectA[key]) {
      return false;
    }
  }
  return true;
}

function anagrams2(stringA, stringB) {
  const arrayA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('');
  const arrayB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('');
  console.log('====================================');
  console.log(arrayA, arrayB);
  console.log('====================================');
  arrayA.map(x => {
    console.log('curr: ', x);
    if (arrayB.find(y => x === y)) {
      arrayB.pop(x);
      console.log('pop: ', x);
    } else {
      arrayB.push(x);
      console.log('push: ', x);
    }
  });
  if (!arrayB[0]) {
    console.log(arrayB);
    return false;
  } else {
    console.log(arrayB);
    return false;
  }
}

function anagrams(stringA, stringB) {
  const modStringA = stringA
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join();

  const modStringB = stringB
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join();

  return modStringA === modStringB;
}

module.exports = anagrams;
