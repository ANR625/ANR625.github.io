// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //Array.isArray(the name of the value to check) test whether it is an array
    //using an if statement to return true, when the input value parameter is an array
    if (Array.isArray(value)===true) {
        return true;
    //if it is something else, return false
    } else { return false;
        
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
//want to know if value is an object (true) or not (false)
//checking whether value is array using Array.isArray(value)
    if (Array.isArray(value)===true) {
        //returning false if value is an array
        return false;
        //need to include other datatypes as well (view spec file): null, Date, object, others
        //null is actually an object, so have to write it out and evaluate before object
    } else if (value === null) {
        return false;
    } else if (value instanceof Date) {
        return false;
    } else if (typeof value === 'object') {
        return true;
    } else { return false;}

    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //Remember: JavaScript reads RIGHT-TO-LEFT, TOP-TO-BOTTOM
    //want to know if value is either an array or an object
    //need to check if value is null first, so it doesn't get evaluated as an object
    if (value === null) { return false;
       } else if (value instanceof Date) {
    //returning false if value is other data type: date, string, number, boolean, undefined, function
            return false;
        } else if (typeof value === 'string') {
            return false;
        } else if (typeof value === 'number') {
            return false;
        } else if (typeof value === 'boolean') {
            return false;
        } else if (typeof value === 'undefined') { 
            return false;
        } else if (typeof value === 'function') {
            return false;
    //using Array.isArray(value) to check whether value is an array
    //using OR to also check if value is an object, using typeof operator
        } else if (Array.isArray(value)===true || typeof value === 'object') {
    //returning true if either of these conditions are met
            return true; //<--look for false first, return true afterwards
        } else { return false;} //<--order is important! else statement must be last

    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
  switch (typeof value) {
             case 'string':
             case 'undefined': 
             case 'number': 
             case 'boolean': 
             case 'function': 
                 {return typeof value;}
               break;
            } 
  if (value === null) {
      return 'null';
        } else if (Array.isArray(value)===true) {
            return 'array';
        } else if (value instanceof Date) {
            return 'date';
        } else {return 'object';}
    
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
