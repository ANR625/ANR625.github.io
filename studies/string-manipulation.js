/*
 * STRING MANIPULATIONS
 *
 * 0. Strings Have Their Own Methods
 * 
 * Strings are sequences of characters which have their own methods and properties in
 * JavaScript. They can be assigned to variables, passed through functions, and 
 * manipulated with string methods which exploit the characteristics of the string data
 * type.
 *
 * 1. Finding String Characters 
 * 
 * Strings have a length property which can be accessed with the .length method. This
 * returns a number that describes how many characters are present in the string. Strings
 * are zero-indexed, which means the first character index will return a '0.' This is 
 * important because to access every character, we will need to keep in mind the index
 * value is equal to (character location - 1). Thus, to access the last character in the 
 * string, we can utilize the length property to return the last value. 
 *
 * To access specific characters, we can use the .charAt() method. Any index value can 
 * accessed if you know the index value of its location.
 *
 * Similarly, .test() can be utilized to scan through a text string and return true or false if
 * the value exists. 
 *
 * To find the first instance of a character or word string in a text string, we can use
 *  .indexOf() to return its index value. Similarly, we could search backwards through the
 * string for the last occurrence using .lastIndexOf(). Just keep in mind that JavaScript 
 * recognizes different cases as different values, so 'c' and 'C' are not equivalent!
 *
 *
 * 2. Casing Matters
 *
 * As we just noted, all casing is not created equal in JavaScript. In order to 'code around'
 * any challenges this might present (although far more are prevented by case-sensitivity!),
 * we can use methods such as .toLowerCase() or .toUpperCase() to convert an entire string 
 * lower- or upper-case letters. This can allow us to evaluate input with conditional 
 * statements without having to account for casing in returned values.
 *
 * 3. More String Methods
 *
 * We will talk about some other common string methods, although this list is not exhaustive.
 * Using .slice(), we can chop up a string at a given index (first agrument), and specify its end 
 * point (non-inclusive) with a second argument, or return the remainder by inputing no second 
 * argument. Endpoints will accept either positive or negative values, and using them depends on 
 * how many characters a programmer wants to include to the right (positive) or left (negative) 
 * of the starting index.
 * 
 * .replace() will scan through a text string to find a specified value (i.e., a 'regular 
 * expression') and replace it with a new expression. This method takes two arguments, 
 * respecively. Regular expresions can be specified as global (/value/g) and/or global, case-
 * insensitive (/value/gi). 
 *
 * Another useful method is .split(), which splits a string at a specificed character (denoted
 * in the parantheses), and returns the string fragments as elements in an array, separated by 
 * commas. Then, array methods can be used to manipulate or reorder them as needed.
 *
 * Finally, strings can be concatenated using the + operator. This joins together string values,
 * but remember to add spaces and punction as needed!
 */
 
 ////// String Manipulation Examples //////
 
 ////// Example A. Length Property & Character Index //////
 
 var string1 = 'the smell of damp earth filled her nostrils as alia awoke.';
 console.log(string1.length);                           // prints => 58
 
 var lastChar = string1.length - 1;
 console.log(lastChar);                                 // prints => 57
 
 console.log(string1.charAt(string1[0]));               // prints => t
 


var resultCap = /Alia/.test(string1);                   
console.log(resultCap);                                 // prints => false
var resultLow = /alia/.test(string1);
console.log(resultLow);                                 // prints => true


console.log(string1.indexOf('alia'));                   // prints => 47
console.log(string1.lastIndexOf('alia'));               // prints => 47

var firstLetterCap = string1.charAt(string1[0]).toUpperCase();
console.log(firstLetterCap);                            // prints => T

var replaced = string1.replace('alia','Alia');  // prints => the smell of damp earth 
console.log(replaced);                              // filled her nostrils as Alia awoke.

var fullSentence = firstLetterCap + replaced.slice(1,58);
console.log(fullSentence);                      // prints => The smell of damp earth 
                                                    // filled her nostrils as Alia awoke.
var theEnd = 'End ! The';

var endArray = theEnd.split(' ');
console.log(endArray);                                  // prints => [ 'End', '!', 'The' ]

var endReorder = endArray[2] + ' ' + endArray[0] + endArray[1] + '!';

console.log(endReorder);                                // prints => The End!!
