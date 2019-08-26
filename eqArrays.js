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

module.exports = eqArrays;

