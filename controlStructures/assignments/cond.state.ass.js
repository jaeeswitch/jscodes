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