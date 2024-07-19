function make_shirt(size : string = "large", text : string = "I love TypeScript."){
    console.log(`You ordered a custom made shirt.\nThe size you selected is "${size}" and the text that needs to be printed is "${text}"`);
};

// default
make_shirt();

// medium size with default message
make_shirt("medium");

// small size with new message
make_shirt("small", "A son today is a father tomorrow.");
