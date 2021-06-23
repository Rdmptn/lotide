const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🍀🍀🍀 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

let countLetters = function(string) {
  let counts = {}
  for (let letter of string.toLowerCase()) {
    if (counts[letter]) {
      counts[letter] += 1;
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
}
    