const user = {
    username: "Shivam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);   // whole object access
    }

}

// user.welcomeMessage()      // Shivam , welcome to website
// user.username = "sam"
// user.welcomeMessage()      // sam , welcome to website

// console.log(this);         // {}


// welcome()                 
function welcome(){
    let username = "shivam"
    console.log(this.username);   // undefined
}

// welcome2();                    // ReferenceError: Cannot access 'welcome2' before initialization
const welcome2 = function () {
    let username = "shivam"
    console.log(username);
}

//Arrow function:- (ES6)
const fun =  () => {
    let username = "shivam"
    // console.log(this);            // {}
    // console.log(this.username);   // undefined
}
// fun()

// const addTwo = (num1, num2) => {
//     return num1 + num2                         //Explicitly return
// }

// const addTwo = (num1, num2) =>  num1 + num2    //Implicitly return
// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {return {username: "hitesh"}}
const addTwo = (num1, num2) => ({username: "hitesh"});

console.log(addTwo(3, 4))