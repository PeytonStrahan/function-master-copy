//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // code

    // create new empty array
    var newArr = [];

    // loop through input object
    for (let key in object) {
        // push each current object property into the new array
        newArr.push(object[key]);
    }

    // return the new array
    return newArr;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // create new empty string
    var newString = "";

    // loop through input object
    for (let key in object) {
        // concatenate each current object key and a space string onto the new string
        newString += key + " ";
    }

    // remove the last space from the new string
    newString = newString.slice(0, newString.length - 1);

    // return the new string
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    // create new empty string
    var newString = "";

    // loop through input object
    for (let key in object) {
        // determine if the current object property is a string
        if (typeof object[key] === "string") {
            // concatenate the current object property and a space string onto the new string if so
            newString += object[key] + " ";
        }
    }

    // remove the last space from the new string
    newString = newString.slice(0, newString.length - 1);

    // return the new string
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    // determine if the current collection is an array
    if (Array.isArray(collection)) {
        // return "array" if so
        return "array";
    }
    // otherwise, determine if the current collection is an object
    else if (typeof collection === "object") {
        // return "object" if so
        return "object";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // return the result of concatenating the capitalized first character of the word to the front of another version of that same word that had its first character excluded via a slice method
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    // create new empty string
    var newString = "";

    // create a strings array variable and assign to it the array made from using .split on the input string to separate all strings in this new array by spaces
    var stringsArr = string.split(/(\s)/);

    // loop through the strings array
    for (let i = 0; i < stringsArr.length; i++) {
        console.log(stringsArr)
        console.log(newString)
        // determine if the current string is not a space
        if (stringsArr[i] !== " ") {
            // concatenate the new string with the result of concatenating the capitalized first character of the current word to the front of another version of that same word that had its first character excluded via a slice method
            newString += stringsArr[i].charAt(0).toUpperCase() + stringsArr[i].slice(1);
        } else {
            // otherwise, concatenate the space onto the new string
            newString += stringsArr[i];
        }
    }

    // return the new string
    return newString;
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    // create a capitalized name string by calling the capitalizeWord function with the inputted object's name property
    var capName = capitalizeWord(object.name);

    // return a welcome message string concatenated with the capitalized name string
    return "Welcome " + capName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}