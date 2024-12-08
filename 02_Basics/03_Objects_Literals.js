// Object.create       //object created by constructor     --> create singleton

// object literals    ---> not created singleton

const mySym = Symbol("key1")

const JsUser = {
    name: "Shivam",
    "full name": "Shivam Sahu",
    [mySym]: "mykey1",          //[] is not compulsory, if then console also
    age: 18,
    location: "Jaipur",
    email: "shivam@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)           // shivam@google.com
// console.log(JsUser["email"])        // shivam@google.com
// console.log(JsUser["full name"])    // Shivam Sahu
// console.log(JsUser[mySym])          // mykey1

// JsUser.email = "shivam@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "shivam@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());       // Hello JS user
console.log(JsUser.greetingTwo());    // Hello JS user, Shivam