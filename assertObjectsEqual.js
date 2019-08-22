const eqObjects = function(object1, object2) {
    let object1Keys = Object.keys(object1);
    let object2Keys = Object.keys(object2);
    if (object1Keys.length !== object2Keys.length) {
        return false;
    }
    for (properties of object1Keys) {
        if (Array.isArray(object1[properties]) && Array.isArray(object2[properties])) {
            if (eqArrays(object1[properties], object2[properties]) === true) {
                continue;
            } else {
                return false;
            }
        }
        if (object1[properties] !== object2[properties]) {
            return false;
        }
    }
    return true;

};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    if (eqObjects(object1, object2)) {
        console.log("The objects match");
    } else {
        console.log("The objects dont match");
    }
};

console.log(`Example label: ${inspect(actual)}`);

