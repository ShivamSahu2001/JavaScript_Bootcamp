"use strict";  // treat all JS Code as newer version

//Primitive  === call by value  (Stack Memory)
   // 7 Types : String, Number, Boolean, null, undefined, Symbol, BigInt

// *JavaScript is a dynamically typed language. In dynamically typed languages all type checks are 
//      performed in a runtime, only when your program is executing.
// *C, C++, Java, TypeScript are statically typed language.

// number => 2 to power 53
// bigint 
// String => ""
// boolean => true/falase
// null => standalone value
// undefind =>
// symbol => unique
// object 

let name = "shivam";
let age = 18
let isLoggedIn = false;

const id = Symbol('123');
const anotherId = Symbol('123');
const scoreValue = 100.3;
const bigNumber = 23643543545345434n;

console.log(id === anotherId);     //false
console.log(typeof name);          //String
console.log(typeof age);           //number
console.log(typeof isLoggedIn);    //boolean
console.log(typeof undefined);     //undefined
console.log(typeof null);          //object
console.log(typeof scoreValue);    //Number
console.log(typeof id);            //symbol
console.log(typeof bigNumber);     //bigint


//Non-Primitive === call by reference  (heap memory)
   // Array, Objects, Functions    ==> object

const heros = ["shaktiman","naagraj","doga"]

const myObj = {
   name: "Shivam",
   age: 24,
}

const myFunction = function(){
   console.log("Hello World");
}

console.log(typeof heros);       //object
console.log(typeof myObj);       //object
console.log(typeof myFunction);  //function object