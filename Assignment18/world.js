var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var world = ["Turkey", "Japan", "Germany", "Northern Areas of Pakistan", "Palestine"];
// original order
console.log("Original Order", world);
// alphabetic order without being stored
console.log("Alphabetic Order without being Stored", __spreadArray([], world, true).sort());
// original order
console.log("Original Order", world);
// reverse alphabetic order without being stored
console.log("Reverse Alphabetic Order without being Stored", __spreadArray([], world, true).sort().reverse());
// original order
console.log("Original Order", world);
// reverse order
console.log("Reverse Order", world.reverse());
// original order from reverse order
console.log("Original Order from Reversed Order", world.reverse());
// stored in alphabetic order
console.log("Alphabetic Order", world.sort());
// stored in reverse alphabetic  order
console.log("Reverse Alphabetic Order", world.sort().reverse());
//  Done.
