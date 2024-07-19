function sandwitch() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Order: Sandwhich.\nThe following items are requested.\n");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var i = items_1[_a];
        console.log(i);
    }
    console.log("\n");
    console.log("Thank you for ordering. Please wait while the sandwhich is being prepared.\n\n");
}
;
sandwitch("Chicken", "Ketchup");
sandwitch("Meatballs", "Eggs", "Mayonese", "Mint leaf");
sandwitch("Meatballs", "Eggs", "Mayonese", "Mint leaf", "Pepper", "Cheese");
//Assignment complete
