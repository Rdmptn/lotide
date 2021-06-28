const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
      
let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('🍀🍀🍀 The arrays are equal! 🍀🍀🍀 ');
  } else {
    console.log('❌❌❌ The arrays are not equal! ❌❌❌');
  }
};

module.exports = assertArraysEqual;