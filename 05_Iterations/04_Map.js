// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "IndiaBharat")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// for (const key in map) {    //not given any values  (map is not iterable)
//     console.log(key);
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  //TypeError: myObject is not iterable
//     console.log(key, ':-', value);
// }

const myNumers = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNumers.map( (num) => num+10)

//chaining
const newNums = myNumers.map( (num)=> num*10).map( (num)=> num+1).filter( (num)=> num > 40);
console.log(newNums);

