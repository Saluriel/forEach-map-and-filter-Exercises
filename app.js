function doubleValues(arr) {
    //returns a new array
    const newArr = [];
    //use a for each that takes in the value
    arr.forEach(function (val) {
        //push value times 2 to get doubles in the new array
        newArr.push(val * 2);
    })
    //return the new array
    return newArr;
}

function onlyEvenValues(arr) {
    //returns a new array
    const newArr = [];
    //use a forEach
    arr.forEach(function (val) {
        //if the value has a remainder of 0, it's even
        if (val % 2 === 0) {
            //push those ones to the new array
            newArr.push(val);
        }
    })
    return newArr;
}

function showFirstAndLast(arr) {
    //returns a new array
    const newArr = [];

    arr.forEach(function (val) {
        //push the index of 0 (first letter) and the index of the length -1 (just the length it's undefined) to the new array
        newArr.push(`${val[0]}${val[val.length - 1]}`)
    })
    return newArr;
}

//accepts an array, a key, and a value
function addKeyAndValue(arr, key, value) {
    //for each object in the array, set a key and value
    arr.forEach(function (val) {
        val[key] = value;
    })
    return arr;
}

function vowelCount(str) {
    //create an array out of the string
    const letterArr = str.split('');
    //create a new object to return
    const newObj = {};
    //constant for the vowels
    const vowels = 'aeiou';

    letterArr.forEach(function (letter) {
        //set everything to lowercase so it's case insensitive
        const lowerCase = letter.toLowerCase();
        //if the indexOf doesn't equal -1, it's a vowel
        if (vowels.indexOf(lowerCase) !== -1) {
            //if the letter is already in the object, add 1 to it
            if (newObj[lowerCase]) {
                newObj[lowerCase]++;
            }
            //if the letter isn't already included in the new object, set it to 1
            else {
                newObj[lowerCase] = 1;
            }
        }

    })
    return newObj;
}

//map

function doubleValuesWithMap(arr) {
    //returns a new array
    const newArr = [];
    arr.map(function (val) {
        //push the value times 2 into the new array
        newArr.push(val * 2);
    })
    return newArr;
}

function valTimesIndex(arr) {
    const newArr = [];
    //accepts the value and index
    arr.map(function (val, index) {
        //multiply the value by the index
        newArr.push(val * index);
    })
    return newArr;
}

function extractKey(arr, key) {
    const newArr = [];

    arr.map(function (val) {
        newArr.push(val[key]);

    })
    return newArr;
}

function extractFullName(arr) {
    const newArr = [];

    arr.map(function (val) {
        //figure out what will return the first and last names
        // console.log(val.first);
        // console.log(val.last);
        newArr.push(`${val.first} ${val.last}`)
    })
    return newArr;
}

//filter

function filterByValue(arr, key) {
    return arr.filter(function (val) {
        //only return the values that include that key
        return val[key];
    })
}

function find(arr, val) {
    return arr.filter(function (value) {
        //check if the value in the array equals the val passed in to find
        return val === value;
    })
}

function findInObj(arr, key, searchVal) {
    return arr.filter(function (value) {
        //return when the value of the key equals the search value
        return value[key] === searchVal;
        //only return the first array
    })[0];
}

function removeVowels(str) {
    const vowels = 'aeiou';

    const lowerCaseArray = str.toLowerCase().split("")

    const newArr = lowerCaseArray.filter(function (val) {
        return (vowels.indexOf(val) === -1)
    })
    return newArr.join("")
};

function doubleOddNumbers(arr) {
    return arr.filter(function (val) {
        //returns odd numbers since the remainder will not equal 0
        return val % 2 !== 0;
    }).map(function (val) {
        //multiplies the value of the odd numbers by 2
        return val * 2;
    })
} 