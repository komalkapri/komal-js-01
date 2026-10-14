
const name = "komal"
const pushUpCount = 100

//***outdated syntax****  console.log(name + " did " + pushUpCount + " pushpups.");
//instead use ---->

console.log(`${name} did ${pushUpCount} pushups.`);

const heyy = new String('komal-kapri')   //another way of declaring a string
console.log(heyy);
console.log(heyy[2]);
console.log(heyy.length);
console.log(heyy.toUpperCase());
console.log(heyy.charAt(7));
console.log(heyy.indexOf('l'));

const newString  = heyy.substring(0,5)
console.log(newString);

const anotherString = heyy.slice(0,5)
console.log(anotherString);

const huhString = heyy.slice(-10,8)
console.log(huhString);

const kmlString = "     sksksksk       "
console.log(kmlString);
console.log(kmlString.trim());    //removes unnecessary spaces

const url="https://komal.com/komal%20kapri"
console.log(url.replace( '%20' , '-' ));  //replaces %20 with -
console.log(url.includes('komal'));   //check if it contains komal or not
console.log(url.includes('sksksk'));













