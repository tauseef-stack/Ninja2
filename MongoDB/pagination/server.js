const express = require('express');

const connect = require('./configs/db');

const app = express();
app.use(express.json());
 
const userController = require('./controllers/user.controller');

app.use('/users', userController);

app.listen(1144, async () => {
    await connect();
    console.log('listening to port 1144')
})