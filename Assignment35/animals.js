var animals = ["cats", "goats", "sheep"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var pet = animals_1[_i];
    console.log(pet);
}
;
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var pet = animals_2[_a];
    if (pet === "cats") {
        console.log("".concat(pet, " are adorable."));
    }
    else if (pet === "goats") {
        console.log("".concat(pet, " are great climbers."));
    }
    else if (pet === "sheep") {
        console.log("".concat(pet, " have really soft fur."));
    }
}
;
console.log("All three of these animals are fun to keep around.");
// Assignment complete
