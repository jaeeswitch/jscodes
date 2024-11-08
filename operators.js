// operators in js are special symbols that perform operations on one or more 
// files in our js file system

// 1. Arithmetic operators
// addition
let sum = 5 + 3;
console.log(sum);

// subtraction
let difference = 10 - sum;
console.log(difference);

// multiplication
let product = sum * difference;
console.log(product);

// division
let quotient = product / 4;
console.log(quotient);

// modulus
let remainder = quotient % 3;
console.log(remainder);

// 2. Assignment operators
// These operators assign values to variables

// assignment
let x = 5;
console.log(x);

// addition assignment
let y = 5;
y += 1;
console.log(y);

// subtraction assignment
let z = 10;
z -= y;
console.log(z);

//  3. Comparison operators
// These operators compare values and return a boolean value

// Equal
console.log(-5+5 == "0");

// strict Equal
console.log(5 === "5");

// not Equal
console.log(5 != "5");

let u = 3;
let v = 2;
console.log(u != "v")


// strict not Equal
console.log(5 !== "5");
let n = "raph";
let g = 10;
console.log(n !== g);

// Greater than
console.log(10 > 5);
let h = 12;
let k = 10;
let s = h + k;
console.log(k > h);

// less than
console.log(3 < 2);
let l = 12;
let i = 10;
let w = l - i;
console.log(s < w);

// greater than and equal to
console.log(4 >= 5);
let q = 6
let r = 6
let b = q * 2
console.log(q >= r);

let o = v - 3
console.log(b >= o);

// using logical operators declare four variables that logs boolean variable on console
// using comments on the vs code editor explain the meaning and how it functions.

// 4. Logical operators
// logical AND [&&]
const hasDriverLicense = true;
const hasInsurance = true;

const carDrive = hasDriverLicense && hasInsurance;
console.log(carDrive);

const isAdult = true;
const isHungry = false;

const canEnter = isAdult && isHungry;
console.log(canEnter);

// logical OR [||]
const knowsHTML = false;
const knowsCSS = true;
const canDesignWebsite = knowsHTML || knowsCSS;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;

const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage);