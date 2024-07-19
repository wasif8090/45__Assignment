let current_users: string[] = [
    "wasif",
    "zafar",
    "faisal",
    "liaqat",
    "farhan"
  ];
  let new_users: string[] = [
    "kamran",
    "ali",
    "abdullah",
    "tehmoor",
   "ibrahim",
    "ahsan",
    "fahad"
  ];
  
  new_users.forEach((user) => {
    if (
      user.toLowerCase() === current_users[0] ||
      user.toLowerCase() === current_users[1] ||
      user.toLowerCase() === current_users[2] ||
      user.toLowerCase() === current_users[3] ||
      user.toLowerCase() === current_users[4]
    ) {
      console.log("Username entered,", user + ".");
      console.log("This username is not available. Please try a different one.\n");
    } else {
      console.log("Username entered,", user + ".");
      console.log("This username is available.\n");
    }
  });
  