// Primitive

// 7 types : String, number, boolean, null , undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNumber = 34341231231231431431431431n



// Reference (Non Primitive)

// Array, Object, Functions

const heros = ["kratos", "batman", "captain america"]
let myObj = {
    name: "fazal",
    age: 17,
}

const Myfunction = function(){
    // console.log("Hello World");
    
}

// console.log(typeof heros );
// console.log(heros);
// console.log(myObj);

//-------------------------------------------------------------------------------


// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "MFH Gaming"

let anotherName = myYoutubename
anotherName = "Lazy Crow"

console.log(myYoutubename);

console.log(anotherName);

let userOne = {
    email:"fazaltaqui@gmail.com"

};

let userTwo = userOne

userTwo.email = "fazal@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

