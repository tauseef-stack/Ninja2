const express = require('express');
require('dotenv').config(); //only once in aa project==>
const app = express();
const connect = require('./configs/db.js');

app.use(express.json()); //we can read things on body ==>

const { register, login, user } = require("./controllers/auth.controller.js");
const productController = require("./controllers/product.controller.js");
const authentication = require('./middlewares/authentication.middleware.js');
const authorization = require("./middlewares/authorization.middleware.js");

app.post("/register", register);
app.post("/login", login);
app.get("/user", user);
app.use('/product',authentication,authorization(['seller','admin']), productController); //from middleware we are getting user==> then going to controller OK

app.listen(process.env.PORT_KEY, async () => {
    await connect();
    console.log(`listening on port ${process.env.PORT_KEY}`);
});