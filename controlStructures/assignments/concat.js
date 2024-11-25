// 1.
const array1 = ["Turkey", "Tunisia", "Thailand"];
const array2 = ["Greece", "Germany", "Geneva"];

// Concatenate the two arrays
// The concat method joins too or more arrays together into one single array.
const combinedArray = array1.concat(array2);

// Mapping through the combined array to log each item
combinedArray.map(item => console.log(item));

// 2.
// Sort the combined array in ascending order
// The sort method sorts the array elements
const sortedArray = combinedArray.sort((a, b) => a - b);

// Reverse the sorted array
// The reverse method (as the name suggets) reverses the order of elements in the array. This basically means the last element in the array becomes the first all the way down to the first element which eventually becomes the last element.
const reversedArray = sortedArray.reverse();

console.log(reversedArray);

// 3.
const users = [
    { id: 1, name: 'Obinna', age: 27 },
    { id: 2, name: 'Adaeze', age: 20 },
    { id: 3, name: 'Chiamaka', age: 23 },
  ];
  
  // Map through the array and log each user
  users.map(user => {
    console.log(`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}`);
  });
  