const assertEqual = require('./assertEqual');

let eqArrays =  function(arr1, arr2) {
  let longest =  arr1.length;
  if (arr1.length < arr2.length) {
    longest = arr2.length;
  } 
  for (let i = 0; i < longest; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
} 

module.exports = eqArrays;