const EventEmitter = require("events");//requires npm init;//Third party module therfore package.json required

const eventEmitter = new EventEmitter();//constructor

eventEmitter.on("tauseef birthday", () => {
    console.log("all Friends getting notification");
}) //pushing into object's array.

eventEmitter.on("tauseef birthday", () => {
    console.log("a new item posted on wall");
})

//eventEmitter.emit("tauseef birthday");//executing...

eventEmitter.on("tauseef gpay", ({ name }) => {
    console.log(`adding 5 rupees to ${name} gpay`);
});

eventEmitter.emit("tauseef gpay",{name:"shariq"})