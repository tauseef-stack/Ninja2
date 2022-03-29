//importing frame work for backend express==> from package==>
const express = require("express");


//power of everything==>
const app = express();


//Middleware required for post request
app.use(express.json());

app.get("/", (req, res) => {

    res.send("welcome to Home Page")
});

//list of users==>
var users = [
    { name: "tauseef",id:"1" },
    { name: "shariq",id:"2" },
    {name:"maryam",id:"3"}   
];

app.get("/users", (req, res) => {
   
    res.send(users);
})

app.post("/users", (req, res) => {
    const body = req.body;
    users = [...users, body];

    res.send(users);
});

app.delete("/user/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
   users = users.filter(item => item.id !== id);
    
    res.send(users);
});

app.patch("/user/:id", (req, res) => {
    const id = req.params.id;
    users = users.filter(item => item.id === id)
    
    res.send(users);
})

//must be at the end
app.listen(2222, () => {
    console.log("listening to localhost 2222")
});