const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Code
assertEqual(eqArrays([1,2,3],[1,2,3]), true);
assertEqual(eqArrays([5,9,12,4,3],[5,9,12,4,3]), true);