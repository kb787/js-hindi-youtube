// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {    // num Is used for traversing individual element for a collection of elements in arr                                                            
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map); // Displays the output in form of key => value pairs , key = short form , value = full name skipping the repeating objects 

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}
// Map can be a combination of array => traversing through loops + objects => values stored in form of key, value pairs
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

 for (const [key, value] of myObject) {  // Throws an error because myObject is an object and not iterable through loops
    console.log(key, ':-', value);    
}
