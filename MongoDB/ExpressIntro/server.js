const express = require("express");

//console.log(express); //Its inbuilt function for node js frame work express==>

const app = express();
//console.log(app);

app.use(express.json());//midleeware required for post request not for get request.

app.get("/", function (req, res) { //get request doesnt require any middleware

    res.send("Get request hello"); //msg that we are getting something from somewhere.

});

app.post("/user", (req,res) => {//neceesarly required middle ware..==> for posting details.
    const body = req.body;//sending data to server or data base.

    res.send(body); // bcoz of this we are able to see this msg on window.
})

app.get("/user", (req, res) => { //for query params

    const name = req.query.name;
    const age = req.query.age;
    const prof = req.query.prof;
    const a = "apple";

    res.send({ a, name, age, prof }); //sending object as a key//sending sequence will be visible==>
});

app.get("/user/:id/:age", (req, res) => { //for id params
    console.log(req.params)
    const id = req.params.id;
    const age = req.params.age;

    res.send({ id, age } );
})

app.listen(2345, () => { //this must be at last and must be visible in the terminal also otherwise we are not able to see response.
    console.log("listening on port 2345");
})