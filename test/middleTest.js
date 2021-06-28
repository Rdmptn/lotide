const middle = require('../middle');
const assert = require('chai').assert;

// Test Code

// assertArraysEqual(middle([1,2,3]), [2])
// assertArraysEqual(middle([1,2,3,4]), [2,3])

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  
   it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
  });
});