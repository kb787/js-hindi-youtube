// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9) adds 9 to the beginning of an array and returns the new length
myArr.shift() // removes the first element from an array and returns it

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // Does the modification by creating the copy of array

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // Does the modification in original array
console.log("C ", myArr);
console.log(myn2);
