const express = require('express');
require('dotenv').config();
const { register, login } = require('./controllers/auth.controller');
const app = express();
app.use(express.json());
const connect = require('./configs/db');
const authentication = require('./middlewares/authentication.middle');
const getauth = require('./middlewares/getauth.middle');
const postController = require('./controllers/post.controller');


app.post('/register', register);
app.post('/login', login);
app.use('/post', authentication, postController);
app.use('/get', getauth, postController);


app.listen(process.env.PORT_KEY, async () => {
    await connect();
    console.log(`listening to port ${process.env.PORT_KEY}`);
})