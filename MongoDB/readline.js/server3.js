const readLine = require("readline");//inbuilcore module.

const readLine1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine1.question("who is you best Friend", (name) => {
    if (name === "tauseef") {
        readLine1.question("What is Your City", (city) => {
            console.log(`${name} belong to ${city}`);
            readLine1.close();
        })
    }
    else {
        readLine1.close();
    }
});

readLine1.on("close", () => {
    console.log("Bye Bye");
});
