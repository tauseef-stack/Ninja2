const EventEmitter = require("events"); //Third party module.

const eventEmitter = new EventEmitter();//constructor..==>

eventEmitter.on("Anniversary", () => { //makes an array and keep pushing thinks which are second arguments in the array.
    console.log("Going to restaurent");
});

eventEmitter.on("Anniversary", () => {
    console.log("Going to Shopping");
});

eventEmitter.on("Anniversary", () => {
    console.log("going to Holiday");
});

eventEmitter.emit("Anniversary");

//taking Arguments==>

eventEmitter.on("Anni", (name) => {
    console.log(`${name} is going for shopping `)
})

eventEmitter.on("Anni", (name) => {
    console.log(`${name} is going to retaurent`)
});

eventEmitter.on("Anni", (name) => {
    console.log(`${name} is going for holiday`)
});

let person = ["tauseef", "maryam", "zeenat"];

person.forEach(item => {
    eventEmitter.emit("Anni", item);
});