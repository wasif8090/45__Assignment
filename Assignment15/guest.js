var guestlist = ["osama", "ali", "hamza"];
// print the guest who is not invited for dinner
var unableAttend = guestlist.splice(0, 1)[0];
console.log("".concat(unableAttend, " sorry I can't come to dinner due to some issue."));
guestlist.push("Abdullah");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are invited to dinner "));
});
