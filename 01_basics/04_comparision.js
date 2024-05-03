// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);
// On inspection the javascript converts the string to a number and displays result

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
// Returns true for the last case , since null possibility can be greater or equal also but not exactly grater or equal

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// Returns false for all case since no comparison is possible for undefined

// === 

console.log("2" === 2);
// Returns false since the datatype is not same according to === operator 
