// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value) { 
        return value > base; 
        
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value) {
        return value < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 //Input: startsWith character -- string
 //Output: boolean
 //Constraints: return a function
 //Edge Case: ignore casing
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //need to create the first class function that returns a function which accepts one string parameter
   return function(string) {
       //want to return TRUE if the string starts with the startsWith character, ignoring casing
       if (startsWith.toLowerCase() === string[0].toLowerCase()) {
           return true;
       }
       //if it doesn't meet the criteria, return false
     return false;
   }; //<--freaking semicolon
}
/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //need to return a function like above
   return function(string) {
       //needs end character [index length-1] to match endsWith, ignoring casing
       if (endsWith.toLowerCase() === string[string.length-1].toLowerCase()) {
           //return true if so
           return true;
       }
       //return false if not
     return false;
   }; //<--don't forget this semicolon.
   
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
  
    // modify parameter in the function above is actually a function
    //pass each string into the modify function
    //making a for-loop to iterate through strings
    for (var i = 0; i <=strings.length-1; i++) {
        //pass strings through modify function
        strings[i]=modify(strings[i]);
    }
    //returning strings that have been modified by the function
        return strings;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //using for loop to loop through strings
for (var i = 0; i <= strings.length-1; i++) {
  //assigning strings[i] to resolved value of test function
    strings[i] = test(strings[i]); 
    //printing strings, which returns boolean values in array
      console.log(strings);
      //looking for falsies, because that stops the loop
         if (strings[i] === false) {
        //return false if any test values are false
         return false;
         } //<--returning false stops the loop
      }
      //looking at what's come of it all
      console.log(strings);
        //if nothing is false, will return true
      return true;
    

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
