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
