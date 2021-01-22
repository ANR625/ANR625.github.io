/*
 * FUNCTIONS
 *
 * 0. More about Functions
 *
 * Functions are collections of actions that are organized to act upon arguments 
 * entered as parameters in order to change something or produce values. They themselves
 * are a unique data type, and work in concert with other variables and functions to 
 * manipulate data and produce an output. 
 *
 * The order of a function is determined by what kinds of arguments they take, or the
 * outputs they produce. First order functions all simple data types, objects, and 
 * arrays as parameters. They produce these kinds of outputs, too. Examples A & B 
 * are both first-order functions.
 *
 * Higher order functions are  capable of complex processing of large datasets because 
 * they are composed of fewer lines of code. They take other functions as arguments or 
 * produce new functions as an amalgamation of processes. Example C is a simple 
 * higher-order function.
 * 
 * 1. Two Phases to Using Functions
 *
 * The two phases to using functions include: function declaration, and function call.
 * The function call is also referred to as 'invoking' the function. The syntax differs
 * for these two steps depending upon whether the function is name or assigned to a
 * variable as a function expression.
 *
 * 2. Parameters vs. Arguments
 *
 * Functions may optionally take inputs, which are denoted by the parameters in the 
 * function declaration. Parameters refer to the placeholder values which are accepted
 * by the function. Arguments are the actual pieces of data that are passed into
 * functions during the function call, and upon which the function acts. 
 *
 * 3. Syntax for Named Functions
 *
 * Named functions require the use of the function keyword, as well as a descriptive
 * function name, followed by parameters if desired, and the function body. This is
 * referred to as the function declaration. Named functions are not assigned to a 
 * variable, and must be called before they are executed, by utilizing the function name,
 * followed by the arguments and closed by a semicolon.
 * 
 * In terms of hoisting, the entire function declaration is hoisted prior 
 * to execution, enabling it to be called before it is defined. It may also be used as 
 * a shell for which to pass in function expressions as arguments to make for more dynamic 
 * code. Functions must be called using the function name before they will be executed; a 
 * function not invoked does not produce output.
 *
 * 4. Function Expressions are Assigned to Variables
 *
 * Functions can be assigned to variables which are hoisted along with other variable
 * declarations prior to code execution in JavaScript, as part of a function expression. 
 * This method enables functions to be referenced as a variable (without a function 
 * name), because utilizing the variable name invokes the function.
 *
 * The syntax for calling a function expression that takes parameters is to refer to the 
 * variable, and followed by parentetical arguments accepted by the function expression.
 *
 * However, the function is still executed in the order in which it appears in the code. 
 * The major benefit to utilizing function expressions is that this allows the function to 
 * be used as an argument in other functions. This is especially useful in closure, when
 * assigning a function to a variable name enhances both readability and function. 
 * 
 * Functions are assigned to variables by declaring a variable, an assigning it a function
 * using the function keyword. The number of parameters for the function must be specified
 * in parantheses, followed by the function body in curly braces describing the actions of
 * the function.
 *
 * 5. Inputs & Outputs
 * 
 * Keeping track of your inputs and outputs is the key to designing effective functions.
 * A helpful way to keep all the pieces of a function straight is to remember I, O, C, E: 
 * Inputs, Outputs, Constraints, and Edge Cases. Inputs are parameters, Output(s) is the 
 * result of the function (what it accomplishes) after closure, Constraints are any 
 * specifications or requirements that have to be met to create the function, and Edge Cases 
 * are anomalies that occur at extremes (min/max).
 *
 * 6. Function Scope
 *
 * Functions contain their own scope when they are created. Variables created inside the 
 * function body are scoped to the function -- that is, they are locally scoped. Elements
 * outside of that function body cannot access the variables. However, especially relevant
 * for nested functions, code within the function body can access variables created in global
 * or outer scopes. Within the local scope, the value of the local variable will override
 * that of global values. But the reverse is NOT true; code outside of the local scope cannot
 * access function-scoped variales.
 *
 * 7. Closure
 *
 * Due to the nature of functions in creating local scopes, we can think of them as enclosing 
 * theirlocal data within their code block. This is referred to as closure -- data is restricted 
 * to the function. Therefore, if that function returns an object that is referenced later in the 
 * code by a variable or as an argument, the closure is still live and data continues to exist in 
 * usable form within the function.
 */
 
 ////// Functions Examples //////
  
 ////// A. Unnamed IIFE //////
 
 //Input: string
 //Output: print string to console
 
 var a = 'Hello! I\'m an anonymous function immediated invoked after function execution!';
  
 (function(parameter) {
     console.log(a);
 }
(a))                                                    // prints => Hello! I'm an 
                                                            //anonymous function, immediately 
                                                            //invoked after function execution!
 
 ////// B. Function Expression - Anonymous Function Assigned to Variable //////
 
 //Inputs: word strings in greeting
 //Outputs: create aussie greeting, print greeting to console
 //Constraints: n/a
 //Edge case: n/a
 
 var funcConcat = function(param1,param2) {
    var aussieGreet = param1 + ',' + ' ' + param2 + '!'
    return aussieGreet;                                 //returns => G'day, Mate!
 }
 funcConcat('G\'day', 'Mate');  

 
 ////// C. Named Function ////// 
 
 var aussie = {};

//Inputs: two word strings describing properties of aussie
//Outputs: give aussie object 2 properties city, favFood
//Constraints: takes 2 parameters
//Edge case: n/a

 function createAussie(string1,string2) {
    aussie.city = string1;
    aussie.favFood = string2;
 }
createAussie('Sydney', 'Shrimp on the barbie');
console.log(aussie);   //prints => { city: 'Sydney', favFood: 'Shrimp on the barbie' }

////// D. Higher-Order Function //////

var interests = ['Going to opera', 'Waving at wombats', 'Long horseback rides'];

//Inputs: object, function, array to modify object
//Outputs: modify aussie object properties to return greeting and list of interests

function newAussie(object, func, array){
    object.greeting = func;
    object.interests = array;
    return aussie;                      
    }

newAussie(aussie, funcConcat('G\'day', 'Mate'), interests);
                             // returns => {
                                   //  city: 'Sydney',
                                   //  favFood: 'Shrimp on the barbie',
                                   //  greeting: "G'day, Mate!",
                                   //  interests: [ 'Going to opera', 'Waving at wombats', 
                                   // 'Long horseback rides' ]
                                   // }