// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    
//finding length of string by using .length property for string variable    
return string.length;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    
//returning 'string' in lower case letters 
return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    
// returning 'string' in uppercase letters
return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    
//creating array variable based on string values, separated at spaces, using .split() method
    var array = string.split(' ');
//creating string variable of array elements joined by hyphens using .join() method
    var hyphen = array.join('-');
//returning hyphenated string value with lower case letters using .toLowerCase() method
    return hyphen.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
//creating st4 variable assigned to 'string' parameter passed into function
    var st4=string;
//evaluating loose equivalence of first character of string value to char parameter passed into function
//lowercase letter criterion
   if (st4.charAt(0)==char.toLowerCase()) {
//returning boolean value true if true
       return true;
   } 
 //uppercase letter criterion
   else if (st4.charAt(0)==char.toUpperCase()) {
 //returning boolean value true if true      
       return true;
   }
//returning boolean value false if neither of the above criteria are true
   else {
       return false;
   }

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    
//creating string variable st5 assigned to string parameter passed into function    
    var st5=string;
//evaluating last indexed string value loosely equivalent to char parameter passed into function
//lowercase letter criterion
   if (st5.charAt(st5.length-1)==char.toLowerCase()) {
//if true, returning boolean value true
       return true;
   } 
//uppercase letter criterion
   else if (st5.charAt(st5.length-1)==char.toUpperCase()) {
//if true, returning boolean value true
       return true;
   }
 //if neither criteria above are true, returning boolean value false  
   else {
       return false;
   }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
//returning concatenation of stringOne & stringTwo parameters passed into function
return stringOne + stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
//existing code which created array variable args
    var args = Array.from(arguments);
//assigning args2 variable the string value derived from string variable created via .join() method
//removing default comma by adding '' in ()
    var args2 = args.join('');
//returning args2 value
    return args2;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    
//evaluating the length property of strings using .length method
//if stringOne is longer than stringTwo, return the longer string variable
if (stringOne.length > stringTwo.length) {
    return stringOne;
//if stringTwo is longer than stringOne, return the longer string variable
} else if (stringOne.length < stringTwo.length) {
    return stringTwo;
//if stringOne is equal to stringTwo, return the message 'These strings are equal in length.'
} else {
    return 'The strings are equal in length.';
}


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

/////////////////////////////////////// ////disregard this codeblock///////////////////////////////////////////////////////     
/* The sortAscending solutions do not pass both the index file 'Preview' test AND the 
os test/os submit tests.


//Version 1 -- PASSES STRINGY SORTASCENDING TESTS IN MOCHA SPEC RUNNER PREVIEW -----> RESOVLED 01.05.2021
//version 1 -- FAILS SORTASCENDING TESTS WITH OS TEST -----> RESOVLED 01.05.2021
////////////////////////////////disregard this codeblock/////////////////////////////////////////////////////// 
//creating variables a/b assigned to stringOne/Two values disregarding capitalization
var a = stringOne.toLowerCase();
var b = stringTwo.toLowerCase();
//evaluating variables b and a
if (a > b) {
//returning -1 when a alphabetically follows b
    return -1;
} else if (a < b) {
//returning +1 if a is alphabetically preceeding b
    return 1;
//returning 0 if a and b are alphabetically the same 
} else if (a==b) {
    return 0; }
}
/*    
Therefore, I have altered it to fit the os test criteria below (line 258, and line 261), leaving the pseudocode

//Version 2 -- FAILS STRINGY SORTASCENDING TESTS IN MOCHA SPEC RUNNER PREVIEW -----> RESOVLED 01.05.2021
//version 2 -- PASSES SORTASCENDING TESTS WITH OS TEST -----> RESOVLED 01.05.2021

*/

////////////////////////////////^^^^disregard above^^^/////////////////////////////////////////////////////// 




//creating variables a/b assigned to stringOne/Two values disregarding capitalization
var a = stringOne.toLowerCase();
var b = stringTwo.toLowerCase();
//evaluating variables b and a
if (a > b) {
//returning 1 when first is alphabetically higher than second
    return 1;
} else if (a < b) {
//returning -1 if second is alphabetically higher than second
    return -1;
//returning 0 if a and b are alphabetically the same 
} else if (a==b) {
    return 0; }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

///////////////////////////////////////////disregard this codeblock///////////////////////////////////////////////////////     
/*A similar issue as above occurs with sortDescending also. -----> RESOVLED 01.05.2021
*/

//Version 1 -- PASSES STRINGY SORTDESCENDING TESTS IN MOCHA SPEC RUNNER PREVIEW -----> RESOVLED 01.05.2021
//version 1 -- FAILS SORTDESCENDING TESTS WITH OS TEST -----> RESOVLED 01.05.2021
/*
//creating variables a/b assigned to stringOne/Two values disregarding capitalization
var a = stringOne.toLowerCase();
var b = stringTwo.toLowerCase();
//evaluating variables b and a
if (a > b) {
//returning 1 if a alphabetically follows b
    return 1;
} else if (a < b) {
//returning -1 if b  alphabetically follows a
    return -1;
//returning 0 if a and b are alphabetically the same 
} else if (a==b) {
    return 0; }
}

 /*   
Again, I have altered the code to to fit the os test criteria below (line 314, & line 317)    

    

//Version 2 -- FAILS STRINGY SORTASCENDING TESTS IN MOCHA SPEC RUNNER PREVIEW -----> RESOVLED 01.05.2021
//version 2 -- PASSES SORTASCENDING TESTS WITH OS TEST -----> RESOVLED 01.05.2021
*/

///////////////////////////////////////////^^^^disregard above^^^^///////////////////////////////////////////////// 

//creating variables a/b assigned to stringOne/Two values disregarding capitalization
var a = stringOne.toLowerCase();
var b = stringTwo.toLowerCase();
//evaluating variables b and a
if (a > b) {
//returning -1 if first is alphabetically higher than second
    return -1;
} else if (a < b) {
//returning 1 if second alphabetically higher than first
    return 1;
//returning 0 if a and b are alphabetically the same 
} else if (a==b) {
    return 0; }


    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
