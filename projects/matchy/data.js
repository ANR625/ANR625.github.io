/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// 2. [ ] Create a variable named `animal` and assign it to an empty object.
var animal = {};
//3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
    animal.species = 'dog';
//4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
    animal['name'] = 'Gucci';
//5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
    animal['noises'] = [];
//6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//1. [ ] Create a variable named `noises` and assign it to an empty array.
var noises = [];
//2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0]= 'howl';
//3. [ ] Using an array function add another noise to the end of `noises`.
noises.push('woof');
//4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
//5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
//6. [ ] Add an element to `noises` using this function.
noises.unshift('bark');
//7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
noises[noises.length-1]='arf';
//8. [ ] `console.log` the length of `noises`
console.log(noises.length);
//9. [ ] `console.log` the last element in `noises` again without hard coding the index.
noises.push('arf');
//10. [ ] `console.log` the whole array.
console.log(noises);
 //11. [ ] Does it look right? 
 
 //Mine has arf twice. Comment out?

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
 animal['noises'] = noises;
 //2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
 animal['noises'].push('whine');
// 3. [ ] `console.log` `animal`.
console.log(animal);
 //4. [ ] Does it look right? yep.


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 
 //Keys: Create new property - object.keyName = 'value';
 //Keys: Create new property - object['keyName'] = 'value';

 //Keys: Print key names: 
 console.log(Object.keys(animal))

 //Values: object.keyName
 console.log(animal.species)
 //Values: Object.values(<objName>)
 console.log(Object.values(animal))
 //Values: object['keyName']
 console.log(animal['name'])
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */
 //Bracket notation: array[0];
 //Print array values with for-loop
 //Using methods like .slice() and .splice() to change values within the array, but all utilizing index
/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

 //1. [ ] Create a variable named `animals` and assign it to an empty array.
 var animals = [];

// 2. [ ] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
animals.push(animal);

//3. [ ] `console.log` `animals`. 
console.log(animals);
/* What does it look like? looks like this: 
[
  {
    species: 'dog',
    name: 'Gucci',
    noises: [ 'bark', 'howl', 'arf', 'arf', 'whine' ]
  }
]
*/

 //4. [ ] Create a variable called `duck` and assign it to the data: `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
 var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
  
// 5. [ ] `push` `duck` to `animals`
animals.push(duck);

 //6. [ ] `console.log` `animals`. 
 console.log(animals);
 /* What does it look like? looks like this:
 [
  {
    species: 'dog',
    name: 'Gucci',
    noises: [ 'bark', 'howl', 'arf', 'arf', 'whine' ]
  },
  {
    species: 'duck',
    name: 'Jerome',
    noises: [ 'quack', 'honk', 'sneeze', 'woosh' ]
  }
]
*/
//7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var animal3 = { species: 'Betta splendens', name: 'Bernouli', noises: ['bubble', 'swish']}
animals.push(animal3);
var animal4 = { species: 'Horse', name: 'Doc', noises: ['neigh', 'snort', 'stomp']}
animals.push(animal4);

//8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. 
console.log(animals);
console.log(animals.length);
    //Is everything looking right? looks good


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//Imagine that our website has a profile page for each animal. On this profile page we can see a list of each animal's friend on the website. Just like how people have a list of friends or followers on facebook or instagram. What would be a good data structure to hold this list of friends?

//1. [ ] Choose a data structure for this **list** of friends.
    //Will use an array

//2. [ ] Write a comment in your code that explains why you chose this data structure.
    //I chose an array because it can store objects which themselves are collections of information describing a common subject, and elements are easily accessed

//3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
//creating a new variable 'friends' which is an array
var friends = [];

//4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
 
 //creating function getRandom that takes array as parameter
 
 /*This code actually returns the object at the array index that is randomly generated: not useful here, but cool anyway
 
 function getRandom(array){
     //creating variable index to access a random indexed element
    var index = array[Math.floor(array.length * Math.random())];
    //returning the indexed element selected by the random number generator
    return index;
 }
 
 var newFriend = getRandom(animals);
//checking out 'newFriend'
console.log(newFriend);
//checking the name property of newFriend
console.log(newFriend.name);
//adding the name of newFriend to friends array
friends.push(newFriend.name);
 
 */
 
//This code returns an index number
function getRandom(array){
    return Math.floor(Math.random() * array.length) + 0;
    };
 //checking out what randomly selected element is
console.log(getRandom(animals));
 
 //6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
 
//adding the name of the randomly selected index to friends array
 friends.push(animals[getRandom(animals)].name);


// 7. [ ] `console.log` `friends`.
console.log(friends);


//8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
animals[2]['friends'] = friends;
 
//9. [ ] `console.log` your work.
console.log(animals);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}