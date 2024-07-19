let guestlist :string[]=["osama","ali","hamza"];

// print the guest who is not invited for dinner
let unableAttend: string = guestlist.splice(0,1)[0];
console.log(`${unableAttend} sorry I can't come to dinner due to some issue.`);

guestlist.push("Abdullah");

guestlist.forEach( guest =>{
    console.log(`Dear ${guest}, you are invited to dinner `);
    
})

// Assignment complete 