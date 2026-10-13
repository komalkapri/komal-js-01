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


