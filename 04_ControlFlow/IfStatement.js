//Comparision Operators:-     <, >, <=, >=, ==, !=, ===, !==
//Logical Operators:-         &&, ||, !

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);   //ReferenceError: power is not defined
// console.log("Execute");


// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {  //false
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { //true
    console.log("User logged in");
}