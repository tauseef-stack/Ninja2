const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());
const connect = require('./configs/db');
const userController = require('./controllers/user.controller');


app.use('/api/auth', userController);

app.listen(process.env.PORT_KEY, async () => {
    await connect();
    console.log(`listening to port ${process.env.PORT_KEY}`);
})