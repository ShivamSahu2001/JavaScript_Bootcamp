const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //ifabove three line code in not then output=> {}

// function welcome(){
//     let username = "hitesh"
//     console.log(this.username);  //undefined
// }

// welcome()

// const welcome2 = function () {
//     let username = "hitesh"
//     console.log(this.username);   // undefined
// }

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