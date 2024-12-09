
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){    //parameter
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)   //argument

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())                       // sam just logged in
// console.log(loginUserMessage("Shivam"))               // Shivam just logged in


function calculateCartPrice(val1, val2, ...num1){ //Rest Operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))   //[ 500, 2000 ]

const user = {
    username: "Shivam",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)                              // Username is Shivam and price is 199
handleObject({username: "sam",price: 399})      // Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));                 // 400
// console.log(returnSecondValue([200, 400, 500, 1000]));   // 400