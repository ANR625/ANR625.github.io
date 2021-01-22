/* 
 * DATA TYPES
 * 
 * 0. What are data types?
 * 
 * Values are assigned to variables, but are all values created equal? The answer, of 
 * course, is no. Variables can hold any data type, and can be reassigned to another 
 * value and data type at any time (excluding 'const' declarations). Thus, JavaScript
 * is 'dynamically typed,' in that variables can accept any value type.
 *
 * Data types are classed according to their value properties, including six basic
 * simple data types, and three complex data types.
 *
 * 1. Simple Data Types
 *
 * All simple data types are described with the 'typeof' operator, with one exception. 
 * They are characterized by the following two properties:
 *
 * A. Simple data types are atomic and immutable; they do not accumulate new values
 * and are not changed by actions within the program. They create new values.
 *
 * B. Because of the relatively small space they require in working memory, simple
 * data types are stored directly in their variable 'containers' which means they 
 * COPY BY VALUE.
 *
 * Boolean: Boolean values return true or false, and are like "on/off" binary
 * switches.
 *
 * String: String values are collections of characters that have special properties. 
 * They are zero-indexed and have a 'length' property. They are case-sensitive and 
 * must be surrounded by quotes. String have their own methods, which include: 
 * .length, .indexOf(), .slice(), and concatentate (+).
 *
 * Number: Number values are differentiated from strings when not surrounded by 
 * quotes. These values may be used with arithmetic operators to perform
 * mathematical operations, and are not indexed.
 *          + Positive infinity: This is the maximum possible integer in JavaScript
 *          - Negative infinity: This is the minimum possible integer in Javascript
 *           These values are are initially identified as numbers, and exist as a JS
 *           global variable.
 *
 * Undefined: Undefined is the default data type of 'var' declarations, and is a 
 * type that is returned in the absence of value.
 *
 * NaN: Not a number is returned when the value being acted upon by an arithemetic 
 * function is not numeric, is not a real number, or is indeterminate. NaN will 
 * return 'number' when using the typeof operator, so must use the isNaN() method.
 *
 * Null: Null is the intention omission of a data value by the programmer, in 
 * contrast to undefined. This data type is not properly defined by the 'typeof' 
 * operator (which returns 'object'), and must be hard-coded to evaluate its type.
 *
 * 2. Complex Data Types
 *
 * Complex data types share the following properties:
 * 
 * A. Complex data types are mutable and can accumulate new value(s) as a consequence 
 * of programmed actions. 
 *
 * B. Due to the first property, complex data types may exceed working memory
 * capacity, and so are not stored directly in variables. This mean they COPY BY 
 * REFERENCE.
 *
 * Array: Arrays are ordered lists of related elements which are zero-indexed. Arrays
 * have a length property, and indexed element can be accessed with a variety of 
 * methods that operate on the unique properties of arrays. This data type can only 
 * be identified using the Array.isArray() function. Some common methods include: 
 * .length, .splice(), .slice(), Array.isArray(), .push(), .pop(), .unshift(), 
 * .shift(), .toUpperCase().
 * 
 * Object: Objects store values in key-value pairs, which can be accessed using dot
 * or bracket notation. Objects are not ordered and have no length, but store the
 * characteristics and properties of a common entity. The can be listed as elements
 * in an array, and may have arrays as values in their key-value pairs. They can be
 * identified by the typeof operator, and have their own properies such as:
 * Object.keys(), Object.values()
 *
 * Functions: A function in an executable statement that acts on its parameters to 
 * produce an effect. They can be stored as variables, as in function expressions, 
 * or declared directly (and thus are not assigned to a variable). They can be 
 * identified by the typeof operator.
 */
 

 ////// Examples: Simple Data Types //////
 
////// A. Boolean //////

var boolean = true;
var bool1 = 89;

console.log(typeof boolean);                         // prints => boolean

if(bool1 === true || bool1 === false) {
    console.log(boolean);
} else { 
    console.log('not a boolean data type');    // prints => not a boolean data
}                                                      //type

////// B. String //////

str = 'this is a string';                           // use 'quotes'
console.log(typeof str);                            // prints => string
console.log(str.length);                            // prints => 16
console.log(str[6]);                                // prints => s

////// C. Number //////

console.log(typeof Infinity);                        // prints => number
console.log(typeof -Infinity);                       // prints => number

var num1 = 700;
console.log(typeof num1);                           // prints => number

var num2 = 2;
console.log(num1 * num2);                             // prints => 1400

var notDefined;
console.log(typeof notDefined);                     // prints => undefined

var x;
console.log(x);                                     // returns => undefined

////// D. NaN //////

var notNumber = 'string' / 3;                         
console.log(notNumber);                             // prints => NaN

var naN = Math.sqrt(-1);
console.log(naN);                                   //prints => NaN
console.log(typeof naN);                            //prints => number
console.log(isNaN(naN));                            //prints => true

////// E. Null //////

var nul = null;
console.log(typeof null);                           //prints => object

if(nul === null) {                                     
    console.log('this is a null data type');        //prints => null
}

////// F. Copy by Value  //////

var a = 8;
var b = 4;

function math(num1,num2) {
    var c = a * b;
}
math(a, b);
console.log(a);                                     //prints => 8
console.log(b);                                     //prints => 4

var a = b;
console.log(a, b);                                   //prints => 4 4

 ////// Examples: Complex Data Types //////

////// G. Array  //////

var array = [ 1, 2, 3 ];
console.log(typeof array);                          //prints => object
console.log(Array.isArray(array));                  //prints => true

console.log(array[2]);                              //prints => 3
array.push(4); 
console.log(array);                                 //prints => [ 1, 2, 3, 4 ]

////// H. Object  //////

var object = {};
console.log(typeof object);                         //prints => object

object.key1 = 'value1';
object['key2'] = array;
console.log(Object.keys(object));                   //prints => [ key1, key2 ]
console.log(Object.values(object));      //prints => [ 'value1', [ 1, 2, 3, 4 ] ]

////// I. Function  //////

var func = function(param1, param2, param3){
    console.log(`${param1} ${param2} ${param3}`);   //prints => Alicia Nicole Ray
}

func('Alicia', 'Nicole', 'Ray');

console.log(typeof func);                           //prints => function


 ////// J. Copy by Reference //////
 
 var obj = { key1: 'this is value1 from obj', key2: 'this is value2 from obj' };
 var objCopy = obj;
 
 objCopy.key3 = 'this is value3 from objCopy';
 
 console.log(obj);               /* prints {
                                            key1: 'this is value1 from obj',
                                            key2: 'this is value2 from obj',
                                            key3: 'this is value3 from objCopy'
                                            }
                                */
