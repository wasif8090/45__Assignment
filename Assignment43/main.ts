let magicians: string[] = [
    "Harry Houdini",
    "David Copperfield",
    "Harry Anderson",
];

function show_magicians(a: string[]) {
    a.forEach((magi) => console.log(magi));
};

function make_great(b: string[]) {
    return b.map((magi) => `The Great ${magi}`)
};

let new_array = make_great(magicians);

// original array
show_magicians(magicians);
// new array
show_magicians(new_array);

// Assignment complete