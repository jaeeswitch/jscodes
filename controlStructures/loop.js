// Loops are used to execute a block of code repeatedly until specific conditions are met.

// ++ means that value is increasing by 1
// -- means that the value is decreasing by 1
for (let i = 0; i < 10; i++) {
    console.log("Hello from loop" + i);
};

const colors = ["red", "green", "blue", "yellow",]

for (let i = 0; i < colors.length; i++) {
    console.log("Color:", colors[i] );
}

const fruits = ["mango", "orange", "apple", "lemon", "pear"]

for (let f = 0; f < fruits.length; f++) {
    console.log("Fruit:" , fruits[f]);
}

const students = [
    { name: "Taylor", grade : 85},
    { name: "Smith", grade : 92},
    { name: "James", grade : 100}
]

for (let i = 0; i < students.length; i++) {
    console.log("Student:", students[i].name, "Grade:", students[i].grade)
}

const myProfile = [
    { name: "Iwuanyanwu Raphael", school: "New Horizons", course: "Frontend Development"}
]

for (let o = 0; o < myProfile.length; o++) {
    console.log("Name:", myProfile[o].name, "School:", myProfile[o].school, "Course:", myProfile[o].course)
}

// while loop
let i = 0;
while (i < 5) {
    console.log("count is: " + i)
    i++
}

const colors2 = ["red", "green", "blue", "yellow",]

let c = 0;
while (c < colors2.length) {
    console.log("Fruit: " , colors2[c])
    c++
}