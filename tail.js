// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😉😉😉Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`😭😭😭Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };


const tail = function(array) {
  return array.slice(1);
};

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(tail(words), ["Lighthouse", "Labs"]); // original array should still have 3 elements!

module.exports = tail;
