const readLine = require("readline");//nbuiltcore module;

const readLine1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

EventEmitter = require("events"); //Constructor for emitter==>
const eventEmitter = new EventEmitter();

eventEmitter.on("ShowBooks", () => {
    bookList.map(item => console.log(item));
    readLineRepeat(); //Repeating menu again and again.
});

eventEmitter.on("AddBooks", (bookName) => {
    bookList = [...bookList, bookName];
    console.log("book Added sucessfully");
    readLineRepeat();
});

eventEmitter.on("quit", (user) => {
    if (user === "y") {
        readLine1.close();
    }
    else if (user === "n") {
        readLineRepeat();
    }
    else {
        console.log("You entered wrong option");
        readLineRepeat();
    }
})

//Array of book list==>
bookList = ["Allama Iqbal", "Meertaqi meer", "Mirza Galib", "Dag Dehelvi"];


//readLine interface==>

function readLineRepeat() {
    
    readLine1.question("Welcome User \n press 1 to see All Available Books \n press 2 to Enter new Book \n press 3 to quit \n", (num) => {
        if (num === "1") {
            eventEmitter.emit("ShowBooks")
            //  readLine1.resume();
        }
        else if (num === "2") {
            readLine1.question("Enter book Name \n", (bookName) => {
                eventEmitter.emit("AddBooks", bookName)
            })
        }
        else if (num === "3") {
            readLine1.question("Are you sure you want quit press y to yes and n to no \n", (user) => {
                eventEmitter.emit("quit",user)
            })
        }
        else {
            console.log("You entered invalid option Chosse something from below Option");
            readLineRepeat();
        }
    });

}


readLine1.on("close", () => {
    console.log("Thanks for using Book App")
});

readLineRepeat();

// readLine1.on("resume", () => {
//     console.log("Agin Select Any option");
// });