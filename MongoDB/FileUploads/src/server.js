const express = require('express');

const app = express();
app.use(express.json());

const connect = require('./configs/db.js');
const product1controller = require('./controllers/product1.controller.js');

app.use('/students', product1controller);

app.use('/students', product1controller);


app.listen(5555, async () => {
    await connect();
    console.log('listening to port 5555')
});