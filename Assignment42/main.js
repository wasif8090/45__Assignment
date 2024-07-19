var magicians = [
    "Harry Houdini",
    "David Copperfield",
    "Harry Anderson",
];
function show_magicians(a) {
    a.forEach(function (magi) { return console.log(magi); });
}
;
function make_great(b) {
    return b.map(function (magi) { return "The Great ".concat(magi); });
}
;
var q = make_great(magicians);
console.log(q);
// This just makes another array "q", I dont know if it is the right way to modify the array "magicians", like it is required in the assignment
