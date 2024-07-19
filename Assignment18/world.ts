let world : string[] = ["Canada", "Uk", "Germany", "Northern Areas of Pakistan", "Italy"];

// original order
console.log("Original Order", world);

// alphabetic order without being stored
console.log("Alphabetic Order without being Stored", [...world].sort());

// original order
console.log("Original Order", world);

// reverse alphabetic order without being stored
console.log("Reverse Alphabetic Order without being Stored", [...world].sort().reverse());

// original order
console.log("Original Order", world);

// reverse order
console.log("Reverse Order", world.reverse());

// original order from reverse order
console.log("Original Order from Reversed Order", world.reverse());

// stored in alphabetic order
console.log("Alphabetic Order", world.sort());

// stored in reverse alphabetic  order
console.log("Reverse Alphabetic Order", world.sort().reverse());

// Assignment complete