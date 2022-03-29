const readLine = require("readline");//inbuilt core module no need to import.

const readLine1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readLine1.question("what is your name \n", (name) => {
    readLine1.question("waht is your country \n", (country) => {
        console.log(`${name} belongs to  ${country}`)
        readLine1.close();
    })
})

readLine1.on("close", () => {
    console.log("Bye Bye")
});