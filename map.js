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
};

const assertArraysEqual = function(arr, arr2) {
    if (eqArrays(arr, arr2)) {
        console.log("The arrays match");
    } else {
        console.log("The arrays dont match");
    }
};


const words = ["ground", "control", "to", "major", "tom"];



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[word.length-1])


assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results1, ['g', 'c', 't', 'm']);
assertArraysEqual(results2, ['d', 'l', 'o', 'r', 'm']);

