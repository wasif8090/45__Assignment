function sandwitch (...items: string[]) {
    console.log(`Order: Sandwhich.\nThe following items are requested.\n`);
    for(let i of items) {
      console.log(i);
    } 
    console.log("\n")
    console.log("Thank you for ordering. Please wait while the sandwhich is being prepared.\n\n");
  };
  
  
  sandwitch("Chicken", "Ketchup");
  sandwitch("Meatballs", "Eggs", "Mayonese", "Mint leaf");
  sandwitch("Meatballs", "Eggs", "Mayonese", "Mint leaf", "Pepper", "Cheese");

  //Assignment complete