const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
     
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let key in object1) {
      console.log(`Object 2 key: ${key}, value: ${object2[key]}`)
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) !== true) {
          return false;
        }
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }) // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false

module.exports = eqObjects;