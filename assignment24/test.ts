// Tests for equality and inequality with strings
let animal = "zebra";
console.log("Is animal a 'zebra'?");
console.log(animal == "zebra");
animal = "elephant";
console.log("Is animal a 'zebra'?");
console.log(animal == "zebra");
console.log("\n");

// Tests using the lower case function
let message = "HELLO!";
console.log("Did he say 'HELLO!'?");
console.log(message == "HELLO!");
message = message.toLowerCase();
console.log("Did he say 'HELLO!'?");
console.log(message == "HELLO!");
console.log("\n");

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let num = 4;
console.log("Is number = 4?");
console.log(num == 4);
num = 5;
console.log("Number is changed.");
console.log("Is number = 4?");
console.log(num == 4);
console.log("Is number greater than 4?");
console.log(num > 4);
console.log("Is number less than 6?");
console.log(num < 6);
num = 11;
console.log("Number is changed again.");
console.log("Is number greater than or equal to 10?");
console.log(num >= 10);
console.log("Is number less than or equal to 10?");
console.log(num <= 10);
console.log("\n");

// Tests using "and" and "or" operators
let x_axis = 3;
let y_axis = 5;
console.log("The required coordinates are (3,5).\nX and Y coordinates are taken.");
if (x_axis == 3 && y_axis == 5) {
    console.log(true);
} else {
    console.log(false);
};

let a = 7;
console.log("The number is either 7 or 11");
console.log(a == 7 || num == 1345); // num = 11
console.log("\n");

// Test whether an item is in the array
let array : string[] = ["Wasif Ali", "Shoukat Ali"];
console.log("Is wasif ali in the array?", array[0] == "Wasif ali"); // I learnt of this way later, array.includes("Abdul Hadi Faisal")
console.log("Is shoukat ali in the array?", array[1] == "Shoukat ali");
console.log("\n");

// Test whether an item is not in the array

console.log("Is hamza in the array?", array.includes("Hamza"));
console.log("Is ali in the array?", array.includes("Ali"));

// Assignment complete