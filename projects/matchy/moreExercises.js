var data = { results: [ 
  { animal: 'fox', 
    numberOfLegs: 4, 
    says: '??', 
    matches: 
      [ 'dog', 'cat', 'pig']
  },
  { animal: 'frog', 
    numberOfLegs: 4, 
    says: 'ribbit', 
    matches: 
      [ 'whale', 'cat', 'pig', 'rabbit']
  },
  { animal: 'dog', 
    numberOfLegs: 4, 
    says: 'woof', 
    matches: 
      [ 'dog', 'fish', 'pig']
  },
  { animal: 'human', 
    numberOfLegs: 2, 
    says: 'hello', 
    matches: 
      [ 'frog', 'duck', 'pig']
  },
  { animal: 'fish', 
    numberOfLegs: 0, 
    says: 'blub', 
    matches: 
      [ 'dog', 'rabbit', 'frog', 'human']
  },
  { animal: 'whale', 
    numberOfLegs: 0, 
    says: 'aaarrrhhh', 
    matches: 
      [ 'duck', 'fish', 'pig']
  },
  { animal: 'duck', 
    numberOfLegs: 2, 
    says: 'quack', 
    matches: 
      [ 'fish', 'human', 'chicken', 'whale']
  }
  ]};

  // Use the .length property to console.log the length of the results
  // array.
  
  console.log(data.results.length);

  // Imagine you want are making a search results page,
  // (console.log) all of the animal names in order.
  
    console.log(data.results);

  // Next, Capitalize the first letter of each name and put a label
  // Your end result should look like this:
  // Name: Fox
  // Name: Dog
  // Name: Frog
  // Name: Human
  // Name: Fish
  // etc.

for (var i=0; i<=data.results.length-1; i++) {
  data.results.name = data.results[i].animal;
  var nameLabel = 'Name: ' + data.results.name[0].toUpperCase() + data.results.name.slice(1);
  console.log(nameLabel);
  
}

  // Next, console.log the number of legs next to their name.
  // Your end result should look like this:
  // Name: Fox, Legs: 4
  // Name: Dog, Legs: 4
  // Name: Frog, Legs: 4
  // Name: Human, Legs: 2
  // Name: Fish, Legs: 0
  
  for (var i=0; i<=data.results.length-1; i++) {
  var legsLabel = 'Legs: ' + data.results[i].numberOfLegs;
  var nameLegsLabel = `${nameLabel}, ${legsLabel}`;
  console.log(nameLegsLabel);
}

  // Now, redo the steps in the previous one and 
  // take this data and add it to an array with nested objects. 
  
var results = [];

for (var i=0; i<=data.results.length-1; i++) {
  data.results.name = data.results[i].animal;
  var nameCap = data.results.name[0].toUpperCase() + data.results.name.slice(1);
  var legs = data.results[i].numberOfLegs;
  var obj = {}
    obj.Name = nameCap;
    obj.Legs = legs;
  results.push(obj);
}  

console.log(results);
  
  // Your result should look like this:
  var results = [
  {Name: 'Fox', Legs: 4},
  {Name: 'Dog', Legs: 4},
  {Name: 'Frog', Legs: 4},
  {Name: 'Human', Legs: 2},
  {Name: 'Fish', Legs: 0}
  ];

  // For another search result, console.log the animals whose matches are 'fish'
for (var i=0; i<=data.results.length-1; i++) {
  if (data.results[i].matches.includes('fish')) {
    console.log(results[i].Name);
  }
}
  // Next, add it to an array called 'FishMatches'. 
var FishMatches = [];

for (var i=0; i<=data.results.length-1; i++) {
  if (data.results[i].matches.includes('fish')) {
    FishMatches.push(results[i].Name);
  }
}

console.log(FishMatches);

  // Make each match an object with two properties 'name'....
var matchesFish =[];  
var fishMatches = [];

 function matches(array1,array2) {
   for(var j=0; j<array1.length; j++) {
     var name = array1[j].toLowerCase();
     console.log(name);
      for (var i=0; i<array2.results.length; i++) {
        var str = array2.results[i].animal;
        if (str === name) {
          console.log('it is working');
          matchesFish.push(str);
         }
      }
 }
 }
 matches(FishMatches,data);
console.log(matchesFish);

for (var k = 0; k<matchesFish.length; k++) {
  var obj3 = {};
  obj3.name = matchesFish[k];
  fishMatches.push(obj3);
}

// ...and 'index'
//need to find index values in results only for values in fishMatches but cannot figure it out!

console.log(fishMatches);
  
  // Your end result should look like this:
  var fishMatches = [{name: 'dog', index: 2}, {name: 'whale', index:5}];
