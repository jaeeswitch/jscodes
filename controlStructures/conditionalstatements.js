// control structure in js is essential for controlling the flow of execution in your code. This allow you to dictate how your program should respond based on conditions

// 1. Conditional statement
// conditional statementse execute a block of code if the speciified condition is true or false.

// a. If statement
let temperature = 30;

if( temperature > 25) {
    console.log("It is a hot day")
} else {
    console.log("it is a cold day")
}

const isAdmin = false;
const isSuperUser = true;

if (isAdmin || isSuperUser) {
    console.log("you can have access to the app")
} else {
    console.log("you are not allowed to access this app")
}


const hasPaidSchoolfees = true;
const isHealthy = true;


if (hasPaidSchoolfees && isHealthy) {
    console.log("welcome to the class")
} else {
    console.log("go back home")
}