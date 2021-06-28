# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @rdmptn/lotide`

**Require it:**

`const _ = require('@rdmptn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(arr1, arr2)`: Tests array equality 
* `assertEqual(actual, expected)`: Tests statement equality
* `assertObjectsEqual(actual, expected)`: Tests object equality
* `countLetters(string)`: Returns number of occurences of each letter in a string
* `countOnly(allItems, itemsToCount)`: Counts the number of itemsToCount in the object allItems
* `eqArrays(arr1, arr2)`: Compares array equality
* `eqObjects(object1, object2)`: Compares object equality
* `findKey(object, callback)`: Returns the key with value that meets the callback function criteria
* `findKeyByValue(obj, value)`: Returns the key with the specified value
* `flatten(array)`: Returns nested arrays as one single array
* `head(arr)`: Returns first element in an array
* `letterPositions(sentence)`: Returns an object containing arrays of the positions of each letter in a sentence
* `map(array, callback)`: Returns an array containg elements of the original array that are filtered for some criteria in the callback
* `middle(arr)`: Returns the middle element(s) in an array
* `takeUntil(array, callback)`: Returns an array of all elements from the original array until the specified criteria is met
* `tail(arr)`: Returns all but the first element in an array
* `without(source, itemsToRemove)`: Returns an array of all the items that don't match the criteria in itemsToRemove