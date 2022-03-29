const readLine = require("readline");

const readLine1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine1.question("what is your name \n", (name) => {
    readLine1.question("What is your country \n", (country) => {
        readLine1.question("what is your city \n", (city) => {
            console.log(`${name} belongs to ${city} in ${country}`)
            readLine1.close();
        })
    })
})

readLine1.on("close", () => {
    console.log(`Bye Bye Mr`);
})