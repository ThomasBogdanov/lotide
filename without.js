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

const without = function(badArray, itemsToRemove) {
    let removedArr = [];
    let i = 0;
    while (i < badArray.length) {
        let matchFound = false;
        for (let z = 0; z < itemsToRemove.length; z++) {
            if (badArray[i] === itemsToRemove[z]){
                matchFound = true;
                break;
            }
        }
        if (matchFound === false) {
            removedArr.push(badArray[i]);
        }
        i++;
    }
    return removedArr;
}

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
