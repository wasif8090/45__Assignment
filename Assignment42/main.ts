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
  
  let q = make_great(magicians);
  console.log(q);
  
  // This just makes another array "q", I dont know if it is the right way to modify the array "magicians", like it is required in the assignment
  