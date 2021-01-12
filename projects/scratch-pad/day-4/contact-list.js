// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the contacts separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//Part a. make function makeContact with id, nameFirst, nameLast parameters

function makeContact(id, nameFirst, nameLast) {
//creating object variable called contactList with above properties    
    var contactList = {
         id: id,
         nameFirst: nameFirst,
         nameLast: nameLast
        };
//return the variable
    return contactList;
} 

//Part b. create factory function called makeContactList
    //make function makeContactList() that returns an object that manages contacts
function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
//creating an array to hold objects
    var contacts = [];
    
//the return object is designed to interact with the contacts array

    return {
        // we implemented the length api for you //
        length: function() {
            
//1. Return length of array with number of contacts

            return contacts.length;
        },
        
//2. Add contact object to the contacts array
//when called, it adds an object to the contacts array
        addContact: function(contact) {
            contacts.push(contact);
        },
//3. Return the object for contact object in the array when full-name is entered; if no match, return undefined
//when called, it loops through the contacts array to find matching values 
       findContact: function(fullName) {
        //looping through contacts to pick out their names
        for (var i = 0; i<contacts.length; i++) { 
        //creating new string variable called name that is a concatenation of those listed as values in objects within array in order to match with fullName
             var name = `${contacts[i]['nameFirst']} ${contacts[i]['nameLast']}`; 
             if (name === fullName) {
                return contacts[i];
            }
        } //if the contact is not in the array, return undefined
        return undefined;
},
//4. Remove a contact object from the array
    //create function removeContact
        removeContact: function(contact) {
        //creating variable related to removal function
            var remove;
            //looping through contacts array
            for (var i=0; i < contacts.length; i++) {
                //finding contact by first name
                if (contact.nameFirst === contacts[i]) {
                    remove = i;
                }
            }
           contacts.splice(remove, 1); 
        },
//5. Create printAllContactNames that returns new-line separated string of all contact full names
        printAllContactNames: function() {
            var nameFull = '';
            for (var i =0; i<contacts.length; i++) { 
                if (i===contacts.length-1) {
                    nameFull += `${contacts[i].nameFirst} ${contacts[i].nameLast}`
                } else {
                    nameFull += `${contacts[i].nameFirst} ${contacts[i].nameLast}` + '\n';}
            }
            return nameFull;    
        } 
    }
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
