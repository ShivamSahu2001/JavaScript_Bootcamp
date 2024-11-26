// Immediately Invoked Function Expressions (IIFE) => 
    //To create private scope & avoiding global scope problems

(function chai(){
    // named IIFE(ie.chai)
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')