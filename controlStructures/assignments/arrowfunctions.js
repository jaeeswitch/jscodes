// 1.) An arrow function is a modern way to write functions in javascript. It provides a shorter syntax compared to traditional function expressions. In summary, an arrow function is a brief and concise way of writing functions making it easily readable and accessed.

// 2.) An arrow function that welcomes someone to an application
const welcomeUser = (name) => `Welcome to the application, ${name}!`;
console.log(welcomeUser("drey"));

// 3.) An arrow function that returns the sum of three numbers
const sum = (a, b, c) => a + b + c;
console.log(sum(5, 25, 34)); // Output will be 64
console.log(sum(980, 762, 453));   // Output will be 2195

//  4.) An arrow function that returns the modulus of two numbers
const modulus = (a, b) => a % b;
console.log(modulus(8, 7)); // Output will be 1 
console.log(modulus(16, 9)); // Output will be 7 