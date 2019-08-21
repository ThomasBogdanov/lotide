const findKeyByValue = function(allGenres, value) {
    let keys = Object.keys(allGenres);
    for (let i = 0; i < keys.length; i++) {
        let x = keys[i];
        if (allGenres[x] === value) {
            return keys[i];
        }
    }
}



const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😉😉😉Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`😭😭😭Assertion Failed: [${actual}] !== [${expected}]`);
    }
  
};

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  