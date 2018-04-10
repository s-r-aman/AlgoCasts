// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk1(array, size) {
  let temp = [];
  for (let index = 0; index < array.length; index++) {
    if (!temp[temp.length - 1] || temp[temp.length - 1].length === size) {
      temp.push([array[index]]);
    } else if (temp[temp.length - 1].length === size) {
      temp.push([array[index]]);
    } else {
      temp[temp.length - 1].push(array[index]);
    }
  }
  return temp;
}

function chunk2(array, size) {
  let temp = [];
  for (const element of array) {
    if (!temp[temp.length - 1]) {
      temp.push([element]);
    } else if (temp[temp.length - 1].length === size) {
      temp.push([element]);
    } else {
      temp[temp.length - 1].push(element);
    }
  }
  return temp;
}

function chunk(array, size) {
  let temp = [];
  let index = 0;
  for (const iterator of array) {
    if (array.length <= index) break;
    temp.push(array.slice(index, index + size));
    index = index + size;
  }
  return temp;
}

module.exports = chunk;
