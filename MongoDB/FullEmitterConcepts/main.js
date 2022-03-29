const EventEmitter = require("events");//thied party module;

const eventEmitter = new EventEmitter();

const sendNotification = require("./notification.js");
const postWall = require("./postWall.js");
const getMoney = require("./money.js");


function checkBirthday() {
    const person = ["Tauseef", "Yusuf", "Maryam"];

    eventEmitter.on("birthday", sendNotification);
    eventEmitter.on("birthday", postWall);
    eventEmitter.on("gpay", getMoney);

    person.map(item => {
        eventEmitter.emit("birthday", item);
        eventEmitter.emit("gpay", item);
    })
}

checkBirthday();