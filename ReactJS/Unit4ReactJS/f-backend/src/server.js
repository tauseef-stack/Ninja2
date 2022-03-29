const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
const connect = require('./configs/db');
app.use(cors());
app.use(express.json());

// mongoose.connect(`mongodb+srv://tauseef:tauseef@1234@cluster0.ctt7d.mongodb.net/twitter-clone-database?retryWrites=true&w=majority`, {
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//    useNewUrlParser:true,
// }).then(() => {
//     console.log('connection successfull')
// }).catch((err) => {
//     console.log('database connection failed')
// });

const userController = require('./controllers/user.controller');


app.use('/user', userController);
     
app.listen(8000, async () => {
    await connect();
    console.log("listening to port 8000")
});

