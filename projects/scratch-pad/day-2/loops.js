// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //START: index 0
  //STOP: last indexed value
  //UPDATE: +1
 for (var i = 0; i<array.length; i++) {
   //console-logging all values inside the array
   console.log(array[i]);
 }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //START: last indexed value
  //STOP: index 0
  //UPDATE: -1
  
 for (var j = array.length-1; j >= 0; j--) {
   //console-logging reversed values inside the array
   console.log(array[j]);
 }
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //

//creating new variable called 'keys' that is an array literal
var keys = [];
//assigning value to keys variable using Object.keys(), referencing object passed through function
  keys = Object.keys(object);
//printing array variable keys to console
return keys;
  
//returns an error but it works in repl.it
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //using for-in loop to iterate through object keys
  for (var keys in object) {
  //printing object key names into developer's console
    console.log(keys);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var array = Object.values(object);
  return array;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //utilizing for-in loop to access key:value pairs in object parameter
   for (var key in object) {
    //printing values to developer console
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //utilizing Object.keys() method to ascertain number of key-value pairs
  return Object.keys(object).length;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
 //is this asking to reverse-order 
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
//accessing keys in object using Object.keys() method  
var values = Object.values(object).reverse(); 
for(var i = 0; i <= values.length-1; i++) {
    console.log(values[i]);
}
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
