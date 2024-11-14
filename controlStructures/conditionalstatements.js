// control structure in js is essential for controlling the flow of execution in youqr code. This allow you to dictate how your program should respond based on conditions

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
const isHealthy = false;


if (hasPaidSchoolfees && isHealthy) {
    console.log("welcome to the class")
} else {
    console.log("go back home")
}

let age = 30;
if (age > 25){
    console.log("your age is above 25")
} else if(age < 25) {
    console.log("your age is below 25")
} else {
    console.log("your age is 25")
}

let fruit = "coconut";
fruit = "orange";
if (fruit === 'banana') {
    console.log("we have banana in the store")
} else if(fruit ==="orange") {
    console.log("we have orange")
} else if (fruit === "coconut") {
    console.log("coconut is in our store")
} else if(fruit === "apple") {
    console.log("we have apple in our store")
} else {
    console.log("we do not have any fruit in our store")
}


// Switch statements
let fruit1 = "cherry";

switch (fruit1) {
    case "banana":
        console.log("It is banana")
        break;
    case "apple":
        console.log("It is apple") 
        break;
     default:
        console.log("we do not have any fruit")

}


let age1 = 55;

switch (age1) {
    case (age1 > 55):
        console.log("your age is above 55")
        break;
    case(age1 < 55):
         console.log("your age is below 55")
         break;
    default:
        console.log("your age is 55")
}



// This is an array that consists of three strings in a container variable called actions.
const actions = ["start", "stop", "pause"];
// This is another variable with the value of start, which has been pre-selected from other strings in the array.
let userAction = "start";
// A variable with a value of true which has been set to determine if a user is logged in or not.
let isLoggedIn = true;
// This statement checks the value of userAction and isLoggedIn to determine if cases are true or false.
switch(true) {
    // In this case, the operator && checks each variable name above and logs the message "Action permitted: start" since the value "start" is indicated above.
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction)
    break;
    // As with the same with case 1, but slightly different because the user is not logged in although the action is "start", so "please login to perform this action" will be logged in the console.
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please login to perform this action")
        break;
        // This is default case which specifies that if none of the actions in the array is indicated or included, "No valid case found" will be logged in the console.
    default:
        console.log("No valid case found.");
}