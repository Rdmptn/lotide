let eqArrays =  function(arr1, arr2) {
  for (let i =0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};
      
let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('🍀🍀🍀 The arrays are equal! 🍀🍀🍀 ');
  } else {
    console.log('❌❌❌ The arrays are not equal! ❌❌❌');
  }
};

let flatten = function(array) {
  let flattened = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flattened.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        flattened.push(array[i][j]);
      }
    }
  }
  return flattened;
}
  