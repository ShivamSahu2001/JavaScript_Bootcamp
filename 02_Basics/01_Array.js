// array

const myArr = [0,"shaktiman", 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);               // shaktiman                

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()                       // remove at last index

// myArr.unshift(9)                  // insert at 0 index
// myArr.shift()                     // remove at 0 index

// console.log(myArr.includes(9));   // false
// console.log(myArr.indexOf(3));    // 4    

const newArr = myArr.join()

// console.log(myArr);                  // [ 0, 'shaktiman', 1, 2, 3, 4, 5 ]
// console.log(newArr);                 // 0,shaktiman,1,2,3,4,5             -->String


// slice, splice

console.log("A ", myArr);            // A  [ 0, 'shaktiman', 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)
console.log(myn1);                   // [ 'shaktiman', 1 ]
console.log("B ", myArr);            // B  [ 0, 'shaktiman', 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)     
console.log(myn2);                   // [ 'shaktiman', 1, 2 ] 
console.log("C ", myArr);            // C  [ 0, 3, 4, 5 ]