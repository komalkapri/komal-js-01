// *****primitive***** 

// 7 types  : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3
const  isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('12456')
const anotherId = Symbol('12456')

console.log(id===anotherId);  //false

const bigNumber = 12345678343456n 


//*****Reference(non primitive)*****

// Arrays, Objects, Functions

const colors = ["baby pink", "baby blue", "red"]  //array
let myObj = {
    name: "koaml",
    age: 20,
}                       //object

const myFunction = function(){
    console.log("hello world");
    
}                        //function



console.log(typeof isLoggedIn );


//***********************memory**********************

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubeName = "waaiwaiidotcom"

let anotherName= myYoutubeName
anotherName= "waaiwaiiidotacdotin"

console.log(myYoutubeName);

console.log(anotherName);

let userOne = {
    email: "komal@gmail.com",
    upi: "kml@hdfc",
}

let usertwo = userOne

usertwo.email = "sk@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);



