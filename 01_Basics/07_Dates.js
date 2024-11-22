let myDate = new Date();

// console.log(myDate.toString());               //Fri Nov 22 2024 10:29:27 GMT+0000
// console.log(myDate.toDateString());           //Fri Nov 22 2024
// console.log(myDate.toLocaleDateString());     //11/22/2024
// console.log(myDate.toLocaleString());         //11/22/2024
// console.log(myDate.toJSON());                 //2024-11-22T10:29:27.878Z
// console.log(myDate.toISOString());            //2024-11-22T10:29:27.878Z

let myCreatedDate = new Date(2024,0,23);
// console.log(myCreatedDate.toString());           //Tue Jan 23 2024 00:00:00 GMT+0000

let myCreatedDate2 = new Date(2024,0,23,5,3);
// console.log(myCreatedDate2.toLocaleString());    //1/23/2024, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate3 = new Date("12-10-2024");
// console.log(myCreatedDate3.toLocaleString());       //12/10/2024, 12:00:00 AM (month,day,year)

let myTimeStamp = Date.now()

console.log(myTimeStamp);                             //1732272244175      -->     ms
console.log(myCreatedDate.getTime());                 //1705968000000      -->     ms
console.log(Math.floor(Date.now()/1000));             //1732272244         -->     s

let newDate = new Date();
console.log(newDate);                                 //2024-11-22T10:44:4
console.log(newDate.getMonth() + 1);                  //11    ---> Starts from 0
console.log(newDate.getDay());                        //5     ---> Friday

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})

