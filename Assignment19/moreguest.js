// copied from assignment 16
var guests = ["Muhammad Ali", "Hamza", "Hadi Raza"];
var invitation = ", you are invited to dinner at my house at 8 pm. Please arrive on time.";
// old invites
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation, "\n");
console.log("'Hadi Raza' can not make it to the dinner.\n");
guests.pop();
guests.push("Abdullah");
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation + "\n");
console.log("I am very glad to inform you that I have found a bigger dinning table. To use this to our advantage, I will be inviting more guests to dine with us.\n");
// new guest in the begining of the array
guests.unshift("Tehmoor");
// new guest in the middle of the array
guests.splice(2, 0, "Usman");
// new guest in the end of the array
guests.push("Irfan");
// new invites
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation);
console.log(guests[3] + invitation);
console.log(guests[4] + invitation);
console.log(guests[5] + invitation + "\n");
// Exercise 19
// To print a message indicating the number of people who are invited to dinner
console.log("I have invited ".concat(guests.length, " people to dinner."));
// Assignment complete
