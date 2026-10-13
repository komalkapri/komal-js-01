let score = true

console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber );
console.log(valueInNumber);

/*
incase of 16abc....
string
string
number
NaN

incase of null....
object
object
number
0

incase of undefined....
undefined
undefined
number
NaN

incase of true....
boolean
boolean
number
1

*/

let isLoggedIn=1
let booleanISloggedIn=Boolean(isLoggedIn)

console.log(booleanISloggedIn);

//  *************** Operations ***************

let value=3
let negValue=-value
console.log(negValue);

let str1= "helllooo"
let str2= "  komall"
let str3=str1 + str2
console.log(str3);

console.log("1" + 2);   //output is 12
console.log(1 + "2");   //output is 12
console.log("1" + 2 + 2);  //output is 122
console.log(1 + 2 + "2");  //output is 32  

let gameCounter=100
++gameCounter;
console.log(gameCounter);


