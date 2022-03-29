const express = require('express');
const app = express();
app.use(express.json());
const connect = require('./configs/db')
const userController = require('./controllers/user.controller')

app.use('/user', userController);

app.listen(1111,async () => {
    await connect();
    console.log('listening to port 1111')
})
