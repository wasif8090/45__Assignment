function make_shirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (text === void 0) { text = "I love TypeScript."; }
    console.log("You ordered a custom made shirt.\nThe size you selected is \"".concat(size, "\" and the text that needs to be printed is \"").concat(text, "\""));
}
;
// default
make_shirt();
// medium size with default message
make_shirt("medium");
// small size with new message
make_shirt("small", "A son today is a father tomorrow.");
