//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    return Object.keys(object).join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var valArr = [];
    for(var key in object) { 
        if(typeof object[key] === 'string') {
            valArr.push(object[key]);
        } 
    } return valArr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)=== true){ 
        return 'array';
    } else if (typeof collection === 'object') { 
        return typeof collection; }
} 

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    var str = string.charAt(0).toUpperCase() + string.slice(1);
    return str;
} 

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
        var strArr = string.split(' ');
        var newStrArr = [];
    for(var i=0; i<strArr.length; i++){
        var strCap = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1)
        newStrArr.push(strCap);
    }
     return newStrArr.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  var string = object.name;
  var strCap = string.charAt(0).toUpperCase() + string.slice(1);
  return 'Welcome ' + strCap + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  var nameStr = object.name;
  var nameCap = nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
  var speciesStr = object.species;
  var speciesCap = speciesStr.charAt(0).toUpperCase() + speciesStr.slice(1);
  return nameCap + ' is a ' + speciesCap;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  var noisesArray = object.noises;
  if (noisesArray === undefined) {
      return 'there are no noises';
    } else if (noisesArray.length===0){ 
        return 'there are no noises' 
      } else if (object.hasOwnProperty('noises')) {
          return noisesArray.join(' ');
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    var str = string;
    var wrd = word;
    var included = str.includes(wrd);
        if(included === true) {
            return true
        } else {
            return false;
            
        }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    var friends = object.friends;
        friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(object.friends === undefined) {
        return false;
    } else {
        for(var i = 0; i<object.friends.length; i++){
            if(object.friends[i] === name) {
                return true;
            } 
        } if(object.friends[i] !== name || object.friends.length === 0) {
                return false;
            } 
    }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
var notFriends = [];
    for(var i =0; i<array.length; i++) {
        if(array[i].name!== name && !array[i].friends.includes(name)) {
             notFriends.push(array[i].name);
        }
    } return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for(var i=0; i<array.length; i++) {
        for(var key in object) {
            if(array[i]===key) {
                delete object[key];
            } else if(array[i]==object[key]){
                delete object[key];
            }
        }
    } return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    for(var i = 0; i<array.length; i++){
        var deduped = array.filter(function(c, index) {
            return array.indexOf(c) === index;
        });
    } return deduped;
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