# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @username/lotide`

**Require it:**

`const _ = require('@thomasbogdanov/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

Implimented with index
----------------------
* `tail(array)`: returns the tail of an array
* `head(array)`: returns the head of an array
* `middle(array)`: returns the middle element of an array 
* `assertArraysEqual(array)`: compares two arrays
* `assertEqual(a, b)`: compares two values
* `assertObjectsEqual({a}, {b})`: compares two objects
* `countLetters(string)`: counts all the letters in a string
* `countOnly({a})`: counts specific elements in an object
* `eqArrays(arr1, arr2)`: compares two arrays and returns true or false
* `eqObjects({a},{b})`: compares two objects and returns true or false
* `findKey(object, callback)`: searches for a specific key in an object
* `findKeyByValue(keys, values)`: searches for keys with value inputs
* `flatten(arr)`: takes an array and removes any nested arrays to return a single array
* `letterPositions(string)`: finds all the positions of a letter in a sentence/word
* `map(array, callback)`: Does a bunch of stuff (google map function)
* `takeUntil(array, callback)`: Reads through an array until a certain value is found / condition is met
* `without(array, itemsToRemove)`: Removes items out of an array that you dont want.
