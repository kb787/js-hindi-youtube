"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

// Interconversion of different data types 

 String to Number 
 let name = "Karan" 
 let nameNum = new Number(name) ;
 console.log(typeof(nameNum)) ;
 console.log(nameNum)
// On inspection the datatype when convert the string to number returns NaN datatype and value is object ;

// String to Boolean 
 let user = "Hitesh"  
 let isLoggedIn = new Boolean(user) ;
 console.log(`${typeof(isLoggedIn)} + ${isLoggedIn}`) ;
// On inspection the datatype when convert the string to boolean returns NaN datatype and value is object ;

// For Boolean to number conversion the number value for true is 1 and 0 for false

//Adding strings(in value of number) with number 
 let a = 12 , b = "22" ;
console.log(a+b) ;
// On inspection the javascript converts the 12 as a string and simply concatinates ans shows 1222

//Adding name string with number 
 let c = "Rahul",d = 25 ;
 console.log(c+d) ;
// On inspection the javascript converts both in a string format and concatinates 

//Unexpected comparisons of string with number 
console.log("2">1) ;
// On inspection the javascript converts the string to a number and displays result

console.log(null > 1) ;
// On inspection it shows false because of no proper value in null for comparison 
