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
var new_array = make_great(magicians);
// original array
show_magicians(magicians);
// new array
show_magicians(new_array);
// Assignment complete
