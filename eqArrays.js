const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😉😉😉Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`😭😭😭Assertion Failed: [${actual}] !== [${expected}]`);
    }
  
};

const eqArrays = function(arr, arr2) {
    let i = 0;
    if (arr.length !== arr2.length) {
        return false;
    } else {
        while (i < arr.length) {
            if (arr[i] === arr2[i]) {
                i++;
            } else {
                return false;
            }
        }
    }
    return true;
} 

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
