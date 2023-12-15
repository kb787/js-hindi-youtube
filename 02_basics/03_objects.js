// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)   // This can access the value of JsUser object's email element but cannot access if it is stored in the string form like this "email"
// console.log(JsUser["email"])  // This can access the value of JsUser object's email element in both string form "email" and variable form email
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])  // This is the only way to access the value of key with type of Symbol in an object

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)  // Once the freeze method is applied the variable value cannot be changed further it is in freezed state 
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting()); // This will print the statement of function greeting but console.log(JsUser.greeting) returns undefined
console.log(JsUser.greetingTwo());
