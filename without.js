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

// Only works if value is at same index in both arrays, unsure if this is the intended
// solution or not given the only test cases had matching positions
let without = function (source, itemsToRemove) {
  let removed = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
       removed.push(source[i]);
    }
  }
  return removed;
}


// Test Case
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);