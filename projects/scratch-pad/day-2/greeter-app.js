// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

function greeter(hour) {
    // YOUR CODE BELOW HERE //
    //using if statement to delineate conditions for morning message
    //part a. threshold becomes afternoon after hour 11 (non-inclusive)
    if (hour <= 11) {
        //part c. print to console case sensitive 'Good Morning!'
        console.log('Good Morning!');
    //using else-if statements to delineate conditions for afternoon & evening messages
    //threshold becomes evening after hour 16 (non-inclusive)
    } else if (hour >= 12 && hour <= 16) {
        //part c. print to console case sensitive 'Good Afternoon!'
        console.log('Good Afternoon!');
    //threshold becomes night after hour 21 (non-inclusive)
    } else if (hour >= 17 && hour <= 21) {
        //part c. print to console case sensitive 'Good Evening!'
        console.log('Good Evening!');
    //using else statement to delineate leftover conditions for night message 
    //part b. else-if not needed because hours 22 & 23 are all that would be returned (need only 'else' statement)
    } else {
        //part c. print to console case sensitive 'Good Night!'
        console.log('Good Night!');
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}