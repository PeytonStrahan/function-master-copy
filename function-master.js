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
    // create a capitalized name string by calling the capitalizeWord function with the inputted object's name property
    var capName = capitalizeWord(object.name);
    // create a capitalized species string by calling the capitalizeWord function with the inputted object's species property
    var capSpecies = capitalizeWord(object.species);

    // return a message string concatenated with the capitalized name and species strings
    return capName + " is a " + capSpecies;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // determine if the input object is empty
    if (Object.keys(object).length === 0) {
        // return "there are no noises" if so
        return "there are no noises";
    }
    // otherwise, determine if the object's noises array is empty
    else if (object.noises.length === 0) {
        // return "there are no noises" if so
        return "there are no noises";
    }

    // otherwise, create a new empty noises string
    var noisesString = "";

    // loop through input object's noises array
    for (let i = 0; i < object.noises.length; i++) {
        // concatenate the current string from the array and a space string onto the noises string
        noisesString += object.noises[i] + " ";
    }

    // remove the last space from the noises string
    noisesString = noisesString.slice(0, noisesString.length - 1);

    // return the noises string
    return noisesString;
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // create a strings array variable and assign to it the array made from using .split on the input string to separate all strings in this new array by spaces
    var stringsArr = string.split(/(\s)/);

    // loop through the strings array
    for (let i = 0; i < stringsArr.length; i++) {
        // determine if the current string is equal to the inputted word string
        if (stringsArr[i] === word) {
            // return true is so
            return true;
        }
    }

    // return false if no matching string is found
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    // push the input name onto the input object's friends array
    object.friends.push(name);
    // return the input object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // determine if the input object is empty
    if (Object.keys(object).length === 0) {
        // return false if so
        return false;
    }

    // otherwise, loop through input object's friends array
    for (let i = 0; i < object.friends.length; i++) {
        // determine if the current friend string from the array is equal to the input name string
        if (object.friends[i] === name){
            // return true if so
            return true;
        }
    }

    // otherwise, return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    // create a new empty nonFriendsArray array
    var nonFriendsArray = [];
    // initialize a friendsArray variable
    var friendsArray;

    // loop through the input array
    for (let i = 0; i < array.length; i++) {
        // determine if the current object's name is equal to the input name
        if (array[i].name === name) {
            // assign the friends list array from the current object to the friendsArray variable
            friendsArray = array[i].friends;
        }
    }

    // loop through the input array again
    for (let i = 0; i < array.length; i++) {
        // determine if the current object's name is NOT equal to the input name
        if (array[i].name !== name) {
            // if so, then determine if the current object's name is NOT included in the friendsArray array
            if (!friendsArray.includes(array[i].name)) {
                // push the object's name onto the nonFriendsArray array if so
                nonFriendsArray.push(array[i].name)
            }
        }
    }

    // return the nonFriendsArray array
    return nonFriendsArray;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // use bracket notation and an assignment operator to automatically change or add a key/value pair to the input object depending on whether or not it exists
    object[key] = value;
    // return the input object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // loop through the input object
    for (let key in object) {
        // determine if the current key in included in the input array
        if (array.includes(key)) {
            // delete the current object property if so
            delete object[key];
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    // create a new empty reference array
    var referenceArray = [];

    // loop through the input array
    for (let i = 0; i < array.length; i++) {
        // determine if the current value in the input array is NOT included in the reference array
        if (!referenceArray.includes(array[i])) {
            // push the current value onto the reference array if so
            referenceArray.push(array[i]);
        }
    }

    // return the reference array
    return referenceArray;
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