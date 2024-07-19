let group : string[] = ["admin", "member1", "member2", "member3", "member4"];

group.forEach(members => {
    if (members == "admin") {
        console.log("Welcome Back Admin.\nWould you like to review participant status?");
    } else {
        console.log("Welcome Back Member.");
    }
});

// Assignment complete