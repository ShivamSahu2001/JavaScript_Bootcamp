let score = "null"

// console.log(typeof score);  //String
// console.log(typeof(score));  //String

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);  //number
// console.log(valueInNumber);         //NaN

// TypeCast in number ->

    // "33"        =>   33
    // "123abc"    =>   NaN
    // null        =>   0
    // true        =>   1
    // false       =>   0
    // undefined   =>   NaN


let isLoggedIn = "shivam";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);      //true

//TypeCasting in boolean-->

    // 1 , " " , "shivam"  => true;  
    // 0 ,  ""             => false

let someNumber = 33
let stringNumber = String(someNumber)

// console.log(stringNumber);         //33
// console.log(typeof stringNumber);  //string


//  ************************* Operations *********************************

// console.log(2+2);   // 4
// console.log(2-2);   // 0
// console.log(2*2);   // 4
// console.log(2**3);  // 8
// console.log(2/3);   // 0.6666666666666666
// console.log(2%3);   // 2

let str1 = "hello"
let str2 = " shivam"
let str3 = str1 + str2

// console.log(str3);                 // hello shivam
// console.log("1" + 2);              // 12
// console.log(1 + "2");              // 12
// console.log(1 + 2 + "2");          // 32
// console.log(1 + 3 + "2" + 5 + 3);  // 4253

// console.log(+true);                //  1
// console.log(-true);                // -1
// console.log(+"");                  //  0
// console.log(-"");                  // -0


let num1, num2, num3;
num1 = num2 = num3  = 2+2  

let gameCounter = 100
gameCounter++;
// console.log(gameCounter);   // 101

