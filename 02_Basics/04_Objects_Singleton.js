// const tinderUser = new Object()   // singleton object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);            // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);   // hitesh

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = { obj1, obj2 }
// console.log(obj4)                 // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj5 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj5)                // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1, ...obj2}
// console.log(obj3);               // { '5': 'a', '6': 'b' }


const users = [
    {
        id: 1,
        email: "shivam@gmail.com"
    },
    {
        id: 1,
        email: "saurabh@gmail.com"
    },
    {
        id: 1,
        email: "vinayak@gmail.com"
    },
]

// console.log(users[1].email)           // saurabh@gmail.com
// console.log(tinderUser);                 // { id: '123abc', name: 'Sammy', isLoggedIn: false }

// console.log(Object.keys(tinderUser));    // [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  // [ '123abc', 'Sammy', false ]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));    //true


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "shivam"
}

// console.log(course.courseInstructor);             // shivam

// Object Destructuring 

const {courseInstructor: instructor} = course
const {price} = course

// console.log(courseInstructor);                   // courseInstructor is not defined
// console.log(instructor);                         // shivam  
// console.log(price)                               // 999

// Api --- JSON Format

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]