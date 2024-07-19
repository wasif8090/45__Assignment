let animals : string[] = ["cats", "goats", "sheep"];

for (let pet of animals) {
    console.log(pet);
};

for (let pet of animals) {
    if (pet === "cats") {
        console.log(`${pet} are adorable.`);
    } else if (pet === "goats") {
        console.log(`${pet} are great climbers.`);
    } else if (pet === "sheep") {
        console.log(`${pet} have really soft fur.`);
    }
};
console.log("All three of these animals are fun to keep around.");

// Assignment complete