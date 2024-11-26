//var c = 300    // Avoid to use var
let a = 300
const b = 30
if (true) {
    let a = 10
    // b = 20      //TypeError: Assignment to constant variable.
    const b = 40   // But This is fine
    // console.log("INNER: ", a);
    // console.log(b)
    
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "shivam"

    function two(){
        const website = "coding.com"
        // console.log(username);  //shivam
    }
    //console.log(website);   //ReferenceError: website is not defined
     two()

}

// one()

if (true) {
    const username = "shivam"
    if (username === "shivam") {
        const website = " coding.com"
        // console.log(username + website);
    }
    //console.log(website);   //ReferenceError: website is not defined
}

//console.log(username);      //ReferenceError: username is not defined  


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))   //6

function addone(num){
    return num + 1
}



// addTwo(5)   //ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num){
    return num + 2
}