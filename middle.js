const eqArrays = require('./eqArrays');
const assertArraysEqual =  require('./assertArraysEqual');

let middle = function(array) {
  let half = array.length / 2;
  if (array.length === 1 || array.length === 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[half - 1], array[half]]
  } else {
    return [array[Math.floor(half)]];
  }
}

module.exports = middle;
    