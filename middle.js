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


    