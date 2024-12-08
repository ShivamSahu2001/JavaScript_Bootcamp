let myDate = new Date();

// console.log(myDate.toString());               // Fri Nov 22 2024 10:29:27 GMT+0000
// console.log(myDate.toDateString());           // Fri Nov 22 2024
// console.log(myDate.toLocaleDateString());     // 11/22/2024
// console.log(myDate.toLocaleString());         // 11/22/2024
// console.log(myDate.toJSON());                 // 2024-11-22T10:29:27.878Z
// console.log(myDate.toISOString());            // 2024-11-22T10:29:27.878Z

var myCreatedDate = new Date(2024,11,8);
console.log(myCreatedDate.toString());           // Sun Dec 08 2024 00:00:00 GMT+0000 (Coordinated Universal Time)
var myCreatedDate = new Date("2024,12,8");
console.log(myCreatedDate.toString());           // Sun Dec 08 2024 00:00:00 GMT+0000 (Coordinated Universal Time)

let myCreatedDate2 = new Date(2024,0,23,5,3);
// console.log(myCreatedDate2.toLocaleString());    // 1/23/2024, 5:03:00 AM (month,day,year)

let myTimeStamp = Date.now()
console.log(myTimeStamp);                             // 1733641052844      -->     ms
console.log(myCreatedDate.getTime());                 // 1733616000000      -->     ms
console.log(Math.floor(Date.now()/1000));             // 1733641052         -->     s

let newDate = new Date();
console.log(newDate);                                 // 2024-12-08T06:57:32.845Z
console.log(newDate.getMonth() + 1);                  // 12    ---> Starts from 0
console.log(newDate.getDay());                        // 0     ---> Sunday

const newDate1 = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(newDate1);                                // Sunday

