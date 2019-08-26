
// const assertArraysEqual = function(arr, arr2) {
//     if (eqArrays(arr, arr2)) {
//         console.log("The arrays match");
//     } else {
//         console.log("The arrays dont match");
//     }
// };

const middle = function(array) {
let midArr = (array.length / 2);
midArr = Math.floor(midArr);
let answer = [];
    if ((array.length) === 1 || array.length === 2) {
        return answer;
    } else if ((array.length % 2) !== 0) {
        answer.push(array[midArr]);
        return answer;
    } else {
        answer.push(array[midArr-1]);
        answer.push(array[midArr]);
        return answer;
    }
}

module.exports = middle;
// console.log(middle([7,8,9,10,11,12]));

