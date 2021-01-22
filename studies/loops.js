/*
* LOOPS
*
* 0. Loops enable us to iterate through elements or properties in a collection, such as characters in 
* strings, elements in arrays, or key-value pairs in objects without the need for without the need for 
* rewriting the same lines of code multiple times. Within the code block, actions can be specified to
* execute when conditions are met. It is generally helpful to define START, STOP, and UPDATE criteria
* when planning to utilized loops, and to include them in pseudocode.
* 
* 1. For Loop
*
* For loops take advantage of data types with length properties, such as strings and arrays. They cannot
* be used on data without indexed values. They use the keyword 'for' followed by expressions which 
* designate a starting location, a stopping point, and an iterative update value. This tells the program
* how many times to loop through a given set of data, performing the same action over and over until the
* stopping criterion is reached. This helps code to say D.R.Y. -- Don't Repeat Yourself, and so reduces 
* working memory capacity. The conventional iterator variable is 'i', which is declared using var or let,
* and assigned a value in the same step. The syntax for(variable = start; variable = stop; update ) is
* followed by the code block.
*
* After delineating these criteria, the code block can be filled with executable statements to perform 
* for each loop. This can be helpful in selecting values which match a specification to be gathered or
* used to create new values in some way. 
*
* 2. While...Loop
*
* An alternative to using the For loop is a while...loop. This also loops through indexed data types,
* and is analogous to using repeated 'if' statements. The while...loop executes a given command WHILE
* the criterion is true (in the boolean sense), until a designated cut-off point. The while...loop 
* evalues the truthiness of the conditions for each value prior to executing the code block (in 
* contrast to other loops, such as do...while). It is useful for repetitive coding steps when the 
* code will need to be run an unknown number of times (as compared to a for-loop with a known starting 
* point). Only STOP and UPDATE criteria are required for while...loops. The syntax while (condition) is
* followed by the code block.
*
* 3. For...in Loop
* 
* It is often desirable to loop through object properties, but since these are not indexed values, 
* neither for loops nor while...loops can be used. A special kind of loop is used for this purpose,
* because it does not rely on the properties of indexed values. The syntax for(variable in object)
* is followed by the code block.
* 4. loop up to some limit
* 5. loop over array forward/backwards
* 6. loop over object
*/

////// A.1. Example: For Loop String //////

var string1 = '12345678910';
for (var i = 0; i<=string1.length - 1; i++) {
        console.log(string1[i]);
}                                       // prints => 1 2 3 4 5 6 7 8 9 1 0 individually

////// A.2. Example: For Loop Array //////

var array1 = [ 1, 2, 3, 4, 5 ];

var finalArray = [];

for(var i = 0; i<=array1.length - 1; i++) {
     finalArray.push(array1[i]);
}
  
console.log(finalArray);                //prints => [ 1, 2, 3, 4, 5 ]


////// B. Example: While...Loop //////

var array2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
var reverseArray2 = [];

var j = array2[array2.length - 1];

while (j >= array2[0]) {
     reverseArray2.push(j);
     j--;
 } 
    console.log(reverseArray2);            // prints => [ 9, 8, 7, 6, 5, 4, 3, 2, 1, ]
    
////// C. Example: For...in Loop //////

var object = {key1: 'value1', key2: 'value2', key3: 'value3'};

for (var key in object) {
    console.log(key);                   // prints => [ key1, key2, key3 ]
}