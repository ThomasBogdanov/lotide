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


const letterPositions = function(sentence) {
    const results = {};
    const splitSentence = sentence.split('');
    let count = 0;
    for (letters of splitSentence) {
        if (letters === ' ') {
            count++;
        } else {
            if (results[letters]) {
                results[letters].push(count); 
                count++;
            } else {
                results[letters] = [count];
                count++;
            }
        }
    }
    return results;
  };

const results1 = letterPositions("hello");

module.exports = letterPositions;

// assertEqual(eqArrays(results1['h'],[0]), true); // => should PASS
// assertEqual(eqArrays(results1['e'],[1]), true); // => should PASS
// assertEqual(eqArrays(results1['l'],[2,3]), true); // => should PASS
// assertEqual(eqArrays(results1['o'],[4]), true); // => should PASS

