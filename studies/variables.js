/*
 * VARIABLES:
 *
 * 0. What is a variable?
 *
 * Variables are like 'containers' in which information about values is stored 
 * so that these values can be accessed by the program as needed. Variables store or point
 * to values of various data types, and can be reassigned to new values and datatypes once
 * they are created.
 *  
 *
 * 1. Variable Creation
 *
 * Creating a variable requires two steps, each utilizing specific keywords and 
 * nomeclature. In the first step of variable creation, the variable is DECLARED using a 
 * keyword (like 'var' or 'let'), followed by the alias or identifier which can be used to call
 * the variable. Variable names follow camelCase naming conventions, which utilizes a 
 * lowercase descriptor that may be followed by a capitalized descriptor (see Declaration 
 * Example A).
 *
 * Secondly, the variable must be initialized -- that is, assigned a value. This is what 
 * is accessed when a variable is used by the program.
 *
 * 2. var vs. let
 *
 * The keywords 'var' & 'let' are both utilized as variable declarations. However, they differ
 * in terms of scope.
 *
 * Scope refers to 'where' in the program the variable can be accessed. More on this later, 
 * but for now it is important to understand that 'var' creates global variables that can 
 * be accessed outside of a code block. Variables using 'var' can be essentially trapped 
 * inside functions, but are accessible outside of the code block. Variables using the 
 * keyword are hoisted and assigned an initial data type of undefined until the code is 
 * executed.
 *
 * The keyword 'let' is similarly utilized, but creates block-scoped variables. This  
 * means they are 'trapped' inside of the code block in which they are created. Though  
 * these variables can be reassigned, they cannot be redeclared, nor are they hoisted but  
 * are read in the order of the code as they appear.
 * 
 * 4. A Special Case
 *
 * The keyword 'const' also creates a container in which values are stored. However, 
 * unlike 'var' and 'let', 'const' declarations cannot be be reassigned.
 *
 * 5. Hoisting
 *
 * Hoisting is the process by which JavaScript maps declarations to the top of the 
 * scope immediately prior to executing it. Variable declarations are moved to the top 
 * of the list, along with function declarations and function expressions. This is when 
 * variables declared using the keyword 'var' become initialized; var results in the 
 * variable name (but not its value) being loaded up at the top of the scope (global, in 
 * that case). It is assigned memory 'space' but its initialization value is not assigned 
 * yet.
 *
 * Variables which are functions are called "function expressions", and are hoisted.
 * However, the 'function of the function' (its' action) will not be hoisted, but 
 * instead executed in the order they appear.
 *
 * Neither 'let' nor 'const' are initialized when they are hoisted, and experience 
 * 'Temporal Dead Space,' in which they cannot be accessed. They are then initialized in
 * in order and scope that they appear in the code.
 */

////// Example: Declaration Using 'var' ////// 

    var dailyGreeting;              //global scoped variable in camelCase

    if (dailyGreeting === undefined) {
        console.log('data type undefined');
    }                              // prints => data type undefined
                                   // initialized and assigned undefined data type before 
                                      //value assignment

////// Example A: Initialization Using 'var' //////

    var dailyGreeting = 'Hello!';
    console.log(dailyGreeting);    // prints => Hello! 
                                   // let works similarly

////// Example B: Reassignment Using 'var' //////

    var dailyGreeting = 'Aloha'; // reassigning the value of dailyGreeting
    console.log(dailyGreeting);  // prints => Aloha

    if (dailyGreeting === 'Aloha') {
      var partingMessage = dailyGreeting; // values can be set to other variables
    }

  console.log(partingMessage);  // prints => 'Aloha'
                                // var keyword creates global variables accessible
                                    //outside of code block

////// Example C: Declaration Using 'let' //////

    let greeting;               // variable remains uninitialized
    if(greeting === undefined) {
        let newGreeting='Hola!'
        };                      // testing this prints nothing
        
    //console.log(newGreeting);   // ReferenceError; variable cannot be accessed 
                                   //outside of the code block

//////  Example D: Redeclaration Using 'let' //////

    //let greeting = 'Hola';      // SyntaxError: greeting has already been declared

////// Example E: Special Case for 'const' ////// 

    //const greet;                // const value not initialized
    //if(greet === undefined) {
        //console.log(true);
    //}   
  
    const greetAgain = 'Bonjour!';
    console.log(greetAgain);    // prints => Bonjour!
    
    //const greet = 'Guten Tag!'  // SyntaxError: greet has already been declared; cannot be 
                                   //reassigned
   
    if(greetAgain === 'Bonjour!') {
        const meaning = 'This is hello in French';
    }
    
    //console.log(meaning);       // ReferenceError: variable is block-scoped
    
    const meaning = 'hello in french';
    console.log(meaning);       //prints => hello in french
    
////// Example F: Hoisting //////
    
    var hoist1;
    console.log(hoist1);        //prints => undefined
    var hoist1 = 'first';
    
    
    var hoist2;
    console.log(hoist2);        //prints => undefined
    if(hoist1==='first') {
        var hoist2 = 'second';
    }
    
    var hoist3;
    console.log(hoist3);        //prints => undefined
    var hoist3 = function() {
        console.log('hoisted third then executed');
    }
    
    
    console.log(hoist4);        //prints => [Function: hoist4]
    function hoist4() {
        console.log('fourth');
    }
    hoist4();
  
    //console.log(notHoisted1);   //ReferenceError, not initialized
    //let notHoisted1 = 'not hoisted';
    
    //console.log(codeBlocked)    //ReferenceError, codeBlocked not defined
    //if(notHoisted1 === 'not hoisted') {
        //let codeBlocked = 'the let variable is code blocked';
    //}

    //console.log(notHoisted2);   //ReferenceError, not initialized
    //const notHoisted2 = 'not hoisted';
    
////// Example G: Execution //////
    
    var hoist1;
    var hoist1 = 'first';
    console.log(hoist1);        //prints => first
    
    var hoist2;
    if(hoist1 === 'first') {
        var hoist2 = 'second'
    };
    console.log(hoist2);        //prints => second
    
    var hoist3;
    var hoist3 = function(){
        console.log('hoisted third then executed');
    }
    console.log(hoist3);        //prints => [Function: hoist3]
    
    function hoist4() {
        console.log('fourth')
    }
    hoist4();                   //prints => fourth
    console.log(hoist4);        //prints => [Function: hoist4]
    

    let notHoisted1 = 'not hoisted';
    console.log(notHoisted1);   //prints => 'not hoisted'
    

    if(notHoisted1 === 'not hoisted') {
        let codeBlocked = 'the let variable is code blocked';
        console.log(codeBlocked);  //prints => the let variable is code
                                       //blocked
    }
      //console.log(codeBlocked)  //ReferenceError, codeBlocked not defined
    

    const notHoisted2 = 'not hoisted';
    console.log(notHoisted2);   //prints => not hoisted