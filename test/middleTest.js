const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual(eqArrays(middle([7,8,9,10,11,12]), [9,10]), true);

// console.log(middle([7,8,9,10,11,12]));