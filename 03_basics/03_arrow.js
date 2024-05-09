const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this.username returns the username parameter of object user
        console.log(this);   // this can be used to directly reference the entire current user object without calling its name
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // Now username is replaced from hitesh -> sam and entire object is returned 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); This can take objects but not variables and returns undefined if applied for variables
// }

// chai() // Returns blank object for the function chai because the function is not inside object 

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
