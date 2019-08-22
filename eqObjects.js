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
};




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







const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] }; 
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/* const eqObjects = function(object1, object2) {
    let object1Keys = Object.keys(object1);
    let object2Keys = Object.keys(object2);
    let object1Length = object1Keys.length;
    let object2Length = object2Keys.length;
    let containCheckCounter = 0;
    if (object1Length !== object2Length) {
        return false;
    } else {
        for (let i = 0; i < object1Length; i++) {
            let object1Value = object1Keys[i];
            for (let z = 0; z < object1Length; z++) {
                let object2Value = object2Keys[z];
                    if (eqArrays(object1[object1Value], object2[object2Value]) === true) {
                        containCheckCounter++;
                        continue;
                } else { 
                if (object1[object1Value] === object2[object2Value]) {
                containCheckCounter++;
                continue;
                }
            }
        }
        if (containCheckCounter === object1Length) {
            return true;
        } else {
            return false;
        }
    }
}
*/

/* const eqObjects = function(object1, object2) {
    let object1Keys = Object.keys(object1);
    let object2Keys = Object.keys(object2);
    let object1Length = object1Keys.length;
    let object2Length = object2Keys.length;
    var object1Prop = Object.getOwnPropertyNames(object1);
    var object2Prop = Object.getOwnPropertyNames(object2);
    console.log(object1Prop);

    if (object1Length !== object2Length) {
        return false;
    } else {
        for (let i = 0; i < object1Length; i++) {
            let propertyName = object1Prop[i];
            console.log(object1[propertyName], object2[propertyName]);
            if (object1[propertyName] === object2[propertyName] || eqArrays(object1[propertyName],object2[propertyName])) {
                return true;
            }

        }
        return false;

        }
} */