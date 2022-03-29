const express = require('express');
const mongoose = require('mongoose');

const connect = () => { //connect  mongodb to express==>{comes from mongoose package}
    return mongoose.connect("mongodb://127.0.0.1:27017/users", { //name of database.
        useCreateIndex : true,
        useFindAndModify : false,
        useNewUrlParser: true,
        useUnifiedTopology : true
    })
}

const app = express();
app.use(express.json()); //must be there for post called middleware.. //must be below app.

//first creating bluPrint{Schema} only for entry not for reading==>//instead of this blue print if we are providing some extra pair then mongo will ignore it..
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: false, default: "Male" },//default is totally optional.
    email: { type: String, required: true },
    age:{ type:Number, required: true}
})

//second step create model
const User = mongoose.model("student", userSchema); //make plural students. //name of colllection //Capital U convention bcoz we are getting it from Constructor..


//get all users matching querry==> 
app.get('/users', async (req, res) => {
    try {
        const users = await User.find({age:{$gt:99}}).lean().exec();
   
    res.send(users) 
    }
    catch (err) { console.log(err) }
   
}) //lean()==> use to convert mongoose object into json exec===> finally done (operation with data) now ready to return promise. //all get req required .lean().exec() at the end essentially.

//post Create newUser==> must be according to blue print and must have middleware declared.
app.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body)

        res.status(201).json({ user })
    }
    catch (err) { console.log(err) }
   
});

//updating document //only way of doing everything is by Id only==>
app.patch('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
        res.status(200).json({user})
    }
    catch (err) { console.log(err) }
    
}) //if we dont write third argument as {new:true} it willl updte db but won't show updated one==>


//get single user from db==>//only way by using Id
app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean().exec();
        res.status(200).json({ user });
    }
    catch (err) { console.log(err) }
   
})//.json({user}) ==> prevent crashing server if not found gives empty object.

//deletingOneObjectFromDb
app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        res.status(200).json({ user });
    }
    catch (err) {
        console.log(err)
    }
   
})

app.listen(2222, async () => {
    await connect(); //after connecting to db it should say listening therfore async function.
    console.log('listenging to port 2222') // visible means connection is successfull
});


//in order to prevent crashing server we should use try catch block 