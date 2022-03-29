const express = require('express');

const app = express();
app.use(express.json());
//app.use(sayHello);

app.get("/users/:id", (req, res) => {
    console.log("from get req");
    const name = req.params.id;
    res.send(name);
});

app.post("/users", onlyPost, onlyPost, onlyPost, (req, res) => {
    console.log("from post req");
    const body = req.body;
    res.send(body);
});

app.post("/tauseef", authentication({ user: "valid" }), authorization({ role: "user" }), (req, res) => {
    res.send("welcome to the system");
});

app.get("/tauseef", step1verification({ name: "tauseef" }), step2verification({ age: 27 }), (req, res) => {
    res.send("welcome to yours LMS tauseef")
})

function authentication(userObj) {
    return function (req, res, next) {
        const user = userObj.user;

        if (user !== "valid") {
            return res.send("you are not allowed to system")
        }
        return next();
    }
};

function authorization(roleObj) {
    return function (req, res, next) {
        let role = roleObj.role;
        if (role !== "admin") {
            return res.send("you are not allowed as admin user");
        }
        return next();//untill this function not called it won't go again to the route request 
    }
}


function sayHello(req,res,next) {
    console.log("before req")
    next();
    console.log("After req")
};

function onlyPost(req, res, next) {
    console.log("before post req");
    next();//will not return anything==>remember.
    console.log("After post req");
}

function step1verification(nameObj) {
    return function (req, res, next) {
        const name = nameObj.name;
        if (name !== "tauseef") {
          return  res.send("Wrong user name Please try again");
        }
        return next();
    }
}

function step2verification(ageObj) {
    return function (req, res, next) {
        const age = ageObj.age;
        if (age !== 27) {
            return res.send("You entered wrong password please try again")
        }
        return next();
    }
}

app.listen(1234, () => {
    console.log("listening to port 1234");
});