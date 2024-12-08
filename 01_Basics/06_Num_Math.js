const score = 400 
const balance = new Number(100) 

// console.log(score);                        // 400
// console.log(balance);                      // [Number: 100]
// console.log(typeof balance);               // object

// console.log(balance.toString().length);    // 3
// console.log(balance.toFixed(2));           // 100.00

const otherNumber = 123.8966;                 
// console.log(otherNumber.toPrecision(4));      // 123.9

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000

// ++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);                      // Object [Math] {}
// console.log(Math.abs(-4));              //4
// console.log(Math.round(4.3));           //4
// console.log(Math.ceil(4.3));            //5
// console.log(Math.floor(4.3));           //4
// console.log(Math.max(4,3,2,6,4,8));     //8
// console.log(Math.min(4,3,2,6,4,8));     //2

// console.log(Math.random())                       //random value(0 to 1)
// console.log((Math.random()*10) + 1);             //random value(1 to 10)

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min)
