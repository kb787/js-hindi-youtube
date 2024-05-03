const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// The __proto__ is depreciated from current versions of js

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // Returns the string between index 0 to 4 
console.log(newString);

const anotherString = gameName.slice(-8, 4)  // Does not returns anything since index -8 does not exists
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne); // Prints the string as it is with blank spaces
console.log(newStringOne.trim()); // Trims or removes the blank spaces from string
// The method trim() removes all whitespaces from string

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
// The method split() introduces space in string whereever it observes the value "-"
