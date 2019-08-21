const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`😉😉😉Assertion Passed: [${actual}] === [${expected}]`);
    } else {
      console.log(`😭😭😭Assertion Failed: [${actual}] !== [${expected}]`);
    }
  
  };

const countLetters = function(string) {
    let splitString = string.split('');
    const results = {};
    for (const letter of splitString){
        if (letter !== ' '){
            if (results[letter]) {
                results[letter] += 1;
            } else {
                results[letter] = 1;
            }
        }
    }   
    return results;
};

const results1 = countLetters("Hello world");
assertEqual(results1["l"], 3);



