// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");  // This prints the statement when condition is true 
    }
    console.log(element);  // This prints all elements of loop for by default case   
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}
let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

 for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
         break
     }
    console.log(`Value of i is ${index}`); // Use of break keyword stops the execution of loop when condition index == 5 is satisfied
    
 }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue                 // Use of continue keyword maintains the execution of loop even after condition is satisfied 
    }
   console.log(`Value of i is ${index}`);
    
}
