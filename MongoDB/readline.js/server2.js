const readLine = require("readline");

const readLine1 = readLine.createInterface({
    input: process.stdin,
    output:process.stdout,
})

readLine1.question("Enter Your mail \n", (mail) => {
    readLine1.question("enter your password \n", (pass) => {
        if (mail === "tauseef" && pass === "1234") {
            readLine1.close();
        }
        else {
            console.log("Please enter correct details")
            readLine1.close();
        }
    })
});

readLine1.on("close", () => {
    console.log("Sign In Successfully");
})
