const name = "shivam";     //String
const repoCount = 50;

console.log("Hello My Name is :- " + name + " & MY repo Count is :- " + repoCount);

// string interpolation(backtick)

console.log(`Hello My Name is :- ${name.toUpperCase()} & MY repo Count is :- ${repoCount}`);

const fullName = new String(' Shivam Sahu');   //Object
// console.log(fullName[1]);                     //S
// console.log(fullName.length);                 //12
// console.log(fullName.__proto__);              //{}
// console.log(fullName.toUpperCase());          //SHIVAM SAHU
// console.log(fullName.charAt(3));              //i
// console.log(fullName.indexOf('S'));           //1
// console.log(fullName.substring(0,5));         //Shiv
// console.log(fullName.slice(-8,9));            //vam S

// console.log(fullName.trim());                 //Shivam Sahu
// console.log(fullName.replace(" ",""));        //Shivam Sahu
// console.log(fullName.replaceAll(" ",""));     //ShivamSahu
// console.log(fullName.includes("Shivam"));     //true
// console.log(fullName.split(" "));                //[ '', 'Shivam', 'Sahu' ]