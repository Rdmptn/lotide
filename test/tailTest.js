const tail = require('../tail');
const assert = require('chai').assert;

// Test Cases

// assertEqual(tail([5,6,7]), 7);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });
  
   it("returns 7 for [5, 6, 7]", () => {
    assert.strictEqual(tail([5, 6, 7]), 7); 
  });
  
  it('returns "Labs" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]), "Labs");
  });
});