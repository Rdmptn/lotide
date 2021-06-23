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
  
const letterPositions = function(sentence) {
  const results = {};
  let i = -1;
  for (let letter of sentence) {
    i++;
    if (letter === ' ') {
      continue;
    } else {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i]
      }
    }
  }
  return results;
};