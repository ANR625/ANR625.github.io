/*
 * CONTROL FLOW
 *
 * 0. Control Flow is a Decision Process
 *
 * Control flow refers to the order in which lines of code are read. JavaScript reads
 * code from top to bottom, but sometimes statements are included which cause the order 
 * to change. This is because JavaScript allows commands to be bundled into blocks that
 * return different actions and outputs depending upon the qualities of the input values.
 * As such, this can create code branches that enable dynamic programming.
 * 
 * 1. Control Flow Statements
 *
 * Block Statement: Delimited with curly braces, this is a bundle of code that begins 
 * with a conditional statement, and contains actions to perform based on the true or
 * false qualities of the input data. It is important to watch out for contradictions
 * or logical short-circuits.
 *
 * A. Truthy and Falsy
 *
 * Boolean values return true or false, and can be utilized to direct the actions of 
 * the code based on conditions. However, a variety of other data types evaluate as the
 * loose equivalent of true and false. These are the properties which direct control flow.
 * 
 * A 'true' value can either return 'true' as a boolean value, but also includes values
 * that are not 0. For numbers, this may be self-evident. In the case of strings and arrays,
 * a true value is the presence of a string with a length greater than zero. 
 * 
 * False values may include 0, but also include data types undefined, NaN, null, empty
 * strings, and of course the boolean false. Statements evaluating to false will not run
 * the code block unless an exception is created in the code.
 *
 * B. if....else
 *
 * One example of a control flow statement is an 'if' statement. This evaluates a given
 * expression and then runs certain code if the conditions are met. Subsequent criteria
 * can be evaluated using 'else if' and 'else' statements if desired. This is an example
 * that can change the order of code execution based on whether the input satisfies 
 * specific criteria.
 *
 * C. Switch Statement
 *
 * Switch statements are especially useful in a couple of situations. If a large number
 * of conditions are to be evaluated, switch statements are easily readable and can 
 * accommodate this need. They can be written to evaluate each condition with a unique 
 * action or output if the condition is satisfied utilizing 'break' statements. 
 * Alternatively, switch statements are useful if several conditions need to be met in 
 * order to return the same output. Switch statements generally evalue a single expression.
 *
 * D. Loops
 * 
 * Loops are used for completing repetitive tasks without the need for rewriting code
 * multiple times. Loops iterate through collections such as the characters in strings,
 * elements in arrays, or key-value pairs in objects, and will perform the action(s) 
 * specified in the code block as the conditions for their actions are satisfied. There
 * are different loops for different data types, including: for-loops, for-in loops,
 * for-of loops, while loops, and do...while loops. The can be used in conjuction with
 * functions, other loops, and other control flow statements.
 *
 */
 
 ////// Control Flow Examples //////
 
 ////// A. False Statements //////
 var x = '';                                    
 var y = 45;                                    
    
 if (x === 0) {
     console.log('this is a falsy value');      // prints => this is a falsy value
 }
 
 if (y !== 0) {
     console.log(y);                            // prints => 45
 }
 
 ////// B. Logical Short-Circuit ///////
 
var isTrue = false;
 if (isTrue === false || isTrue === true) {
     console.log('this is a short circuit');    // prints => this is a short circuit
 }
 
 ////// C. if...else: Control Flow //////
 
 if (typeof x === 'object') {
        console.log('x is an object');
    } else if (typeof x === 'number') {
        console.log('x is a number');
    } else {
        console.log('x is neither an object nor a number'); // prints => x is neither an 
                                                            //object nor a number
 }

////// D. Switch Statement: Control Flow //////

var z = {key1: 'value1'};

  switch (typeof z) {
             case 'string':
             case 'undefined': 
             case 'number': 
             case 'boolean': 
             case 'function': 
                 {console.log(typeof value);}
               break;
            } 
  if (z === null) {
      console.log('null');
        } else if (Array.isArray(z) === true) {
            console.log('array');
        } else if (z instanceof Date) {
            console.log(z instanceof Date);
        } else {
          console.log(typeof z);
          }                                              // prints => object

////// E. For-Loops: Control Flow //////
 
var array1 = [ 1, 2, 3, 4, 5, 6, 7, 8 ];
var array2 = [ 16, 15, 14, 13, 12, 11, 10, 9 ];
var array3 = [ 'yes', 'or', 'no', 'maybe', 'so' ];

function reverseArray(array) {
  var finalArray = [];
  if(array[0] > array[array.length - 1]) {
          for(var i = array.length - 1; i >= 0; i--) {
                  finalArray.push(array[i]);
          }   
  } else if(array[0] < array[array.length - 1]) {
          for(var i = array.length - 1; i >= 0; i--) {
                  finalArray.push(array[i]);
          }
  } console.log(finalArray);
}
console.log(reverseArray(array1));           // prints => [ 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(reverseArray(array2));           // prints => [ 9, 10, 11, 12, 13, 14, 15, 16 ]
console.log(reverseArray(array3));           // prints => [ 'so', 'maybe', 'no', 'or', 'yes' ]