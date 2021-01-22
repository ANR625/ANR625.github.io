/*
 * Operators
 *
 * 0.  Operators Act on Operands
 * 
 * Operators are classed by the number of operands they require, and what values are 
 * returned.
 *
 * 1. Assignment Operators
 *
 * Assignment operators assign value to variables. All accept two operands, and thus 
 * are binary operators.
 *
 * Value assignment operator (=) : used to assign a value with a variable 
 * Addition assignment operator (+=) : adds the value of an expression to the 
 *                                  variable value, and assigns the sum to the variable
 * 
 * Subtraction assignment operator (-=) : subtracts the value of an expression from the 
 *                           variable value, and assigns the difference to the variable
 * 
 * Multiplication assignment operator (*=) : multiplies the value of an expression by the 
 *                              variable value, and assignes the product to the variable
 * 
 * Division assignment operator (/=) : divides the value of the variable by the value of 
 *                               an expression. and assigns the quotient to the variable
 * 
 * Remainder assignment operator (%=) : divides the value of the variable by the value of  
 *                                   an expression, and assigns remainder to the variable
 * 
 * Exponential assignment operator (**=) : exponentiates the value of the variable by the 
 *                         value of an expression, and assigns the result to the variable
 * 
 * 2. Arithmetic Operators
 *
 * Arithmetic operators perform mathematical actions on number type operands. Only the 
 * addition operator operates on other data types.
 * 
 * Addition Operator (+) : adds number values together, or concatenates strings
 * Subtraction Operator (-) : subtracts number values
 * Multiplication Operator (*) : multiplies number values
 * Division Operator (/) : divides number values
 * Remainder Operator (%) : returns the remainder of number value dividends
 * Exponent Operator (**) : exponentiates number values
 *
 * 3. Comparison Operators
 *
 * Comparison operators test equivalence between two values, and accept multiple data   
 * types as operands. They evaluate two values or expressions and return true or false.
 * 
 * Greater than (>), Greater than or equal (>=) Operator 
 * Less than (<), Less than or equal (<=) Operator 
 * Strict Equivalence (===) : evaluates both value and data type
 * Loose Equivalence (==) : evaluates only value and not data type (use rarely)
 * Strict Not Equal (!==) : evaluates both value and data type
 * Loose Not Equal (!=) : evaluates only value and not data type (use rarely)
 * 
 * 4. Logical Operators
 *
 * Logical operators are boolean operators that return true and false values. They accept  
 * multiple data types, due to the properties of truthy and falsy values.
 *
 * And (&&) : evaluates two values or expressions to true or false, where both operands  
 *            meet the condition
 * Or (||) : evaluates two values or expressions to true or false, where one operand must 
              meet the condition
 * Not (!) : acts on one operand, transforms the value to falsy -- also a UNARY operator
 *
 * 5. Unary
 *
 * Unary operators act upon one operand to produce their action. 
 *
 * Type-of operator (typeof) : returns type for data types except null, array, NaN
 * Not (!) : see entry in Logical Operators
 * Concatenation or Addition Operator (+) : concatenates strings, or adds numbers 
 * Subtraction Operator (-) : subtracts numbers 
 * Increment by one (++) : as prefix, ++ acts on one operand by adding 1 and     
                  returning the value; as postfix, ++ returns the value then adds 1 
 * Decrement by one (--) : as prefix, -- acts on one operand to subtract 1 and  
                  return the value; as postfix, -- returns the value the subtacts 1
 * delete : acts on one operand to delete an element from array, or object property 
 * void : disregards and removes the returned value of an expression
 * 
 * 6. Ternary
 *
 * Ternary operators are so-named because they accept three operands. This is the  
 * only ternary operator in Javascript. The first operand is the condition being   
 * evaluated, the second operand is the return value if true, and the third operand is 
 * the return value if false. This operator accepts all data types, and evaluates to 
 * true and false.
 *
 * (condition) ? (value if true) : (value if false)
 */
 
 ////// Examples of Operators //////
 
//Assignment// 
var b = 40;
console.log(b);                                                           //prints => 40

//Addition assignment//
console.log(b += 1);                                                        //prints => 41

//Subtraction assignment//
console.log(b -= 3);                                                        //prints => 38

//Multiplication assignment//
console.log(b *= 4);                                                        //prints => 152

//Division assignment//
console.log(b /= 2);                                                        //prints => 76

//Remainder assignment//
console.log(b %= 7);                                                        //prints => 6

//Exponent assignment//
console.log(b **= 9);                                                       //prints => 10077696

//Concatentation (+) operator//
var string1 = 'hi, ';             
var string2 = 'how are you';
var string3 = '?';
console.log (string1 + string2 + string3); // prints => hi, how are you?

//Addition operator//
var c = 17;
console.log(c + 2);                                                           //prints => 19

//Subtraction operator//
console.log(c - 12);                                                          //prints => 5

//Multiplication operator//
console.log(c * 5);                                                           // prints => 85

//Division operator//
console.log(c / 2);                                                           //prints => 8.5

//Remainder operator//
console.log(c % 3);                                                           //prints => 2

//Exponent operator//
console.log(c ** 2);                                                          //prints => 289

//Greater Than operators//
console.log(b > c);                                                         //prints => true

console.log(b >= 10);                                                       //prints => true

//Less Than operators//
console.log(b < c);                                                          //prints => false

console.log(b <= 10);                                                         //prints => false

//Strict equivalence//
console.log(b === 10077696);                                                  //prints => true
console.log(b === '10077696');                                                //prints => false

//Loose equivalence//
console.log(b == 10077696);                                                   //prints => true
console.log(b == '10077696');                                                 //prints => true

//Not equivalence (Bang)//
var d = 13;
console.log(d !== 13);                                                        //prints => false
console.log(d != 'string');                                                   //prints => true

//AND Logical operator//
if(d === 13 && b === 10077696) {console.log(true);} else {console.log(false);}  //prints => true
if(d === 13 && b === 'string') {console.log(true);} else {console.log(false)};  //prints => false

//OR Logical operator//
if(d===13 || b==='string') {
    console.log(true);
} else {
    console.log(false);
}                                                                              //prints => true

//NOT Unary operator (Bang)//
if(!d === 13){
    console.log(true);
} else {
    console.log(false);
}                                                                              // prints => false

//typeof Unary operator//
console.log(typeof d);                                                        //prints => number

//Increment Unary operator//
var e = 3;
var f = 3;
//as postfix//
console.log(e++);                                                           //prints => 3
//as prefix//
console.log(++e);                                                           //prints => 5
//as prefix//
console.log(++f);                                                           //prints => 4

//Decrement Unary operator//
var g = 5;
var h = 5;
//as postfix//
console.log(g--);                                                           //prints => 5
//as prefix//
console.log(--g);                                                           //prints => 3
//as prefix//
console.log(--h);                                                           //prints => 4

//delete Unary operator//
var array = [ 1, 2, 3, 4 ];
delete array[1];
console.log(array);                                      //prints => [ 1, <1 empty item>, 3, 4 ]

var object = { key1: 'value1', key2: 'value2', key3: 'value3'};
delete object.key1;
console.log(object);                               //prints => { key2: 'value2', key3: 'value3' }

//void Unary operator//
var result = ((((b / c) * d) + e + f - g) / h)
console.log(result);                                               //prints => 1926619.8529411764
console.log(void result);                                                   //prints => undefined

//Ternary operator//
(d === 13) ? (console.log('it is true!')) : (console.log('it is false!'));   //prints => it is true!

(b === 13) ? (console.log('it is true!')) : (console.log('it is false!'));  //prints => it is false!