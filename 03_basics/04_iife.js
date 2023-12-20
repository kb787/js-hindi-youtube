// Immediately Invoked Function Expressions (IIFE)

// For running multiple functions simultaneously they should be seperated by ; indicating the end of IIFE function
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh') ;

