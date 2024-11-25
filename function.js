// function
// function is a block of code that performs an action and is reusable.

// types of function
// function declaration 
// function expression

// 1. function declaration.
// a and b below are known as parameters
function add(a, b){    
    return(a+b)
}
const sum = add(2, 4);
console.log(sum)

function multiply(j, k){
    return(j*k)
}
const product = multiply(16, 20);
console.log(product)

function greet(name){
    console.log(`Hello ${name} Welcome to our app`)
}
greet("raph")
greet("drey")

const name = "zeus"
console.log(`hello ${name}`)

function details(name, course){
    console.log(`I'm ${name} currently studying ${course} in New Horizons`)
}
details("raph", "frontend development")

// function expression

const add2 = function (a, b) {
    return a + b
}
const sum2 = add (1, 2)
console.log(sum2)

const greet2 = function(name){
    console.log(`hello ${name} what's good?!`)
}
greet2("taylor")

const info = function(name, course, school){
    console.log(`hi, I'm ${name} currently studying ${course} in ${school}`)
}
info("steve", "backend dev", "New Horizons")

//Assignment: Research on arrow functions with two examples

// arrow function
const logIn = name =>console.log(`${name} is logged in`);
logIn("zeus");