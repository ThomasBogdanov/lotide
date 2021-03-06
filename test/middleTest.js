// const middle = require('../middle');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const index = require('../index');

describe('#middle', () => {
    it("should return [9,10], for [7,8,9,10,11,12]", () => {
        assert.deepEqual(index.middle([7,8,9,10,11,12]), [9,10]);
    });
    it("should return [2], for [1,2,3]", () => {
        assert.deepEqual(index.middle([1,2,3]), [2]);
    });
});

// console.log(middle([7,8,9,10,11,12]));