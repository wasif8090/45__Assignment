// let transport=["Bike","Car","plane"]
//                // 0     1     2
// console.log(`I like ridding ${transport[0]}`);
// console.log(`I like to travel in ${transport[1]} because this is comfortable`);
// console.log(`${transport[2]} is a best transport to move somewhere in less time`);
var transport = ["bicycles", "cars", "buses"];
console.log("I like riding ".concat(transport[0], "."));
console.log("I like ".concat(transport[1], " because they are a lot safer in heavy traffic."));
console.log("".concat(transport[2].charAt(0).toUpperCase() + transport[2].slice(1, 5), " are more time consuming but they are cheap and good for long travels."));
// Done.
