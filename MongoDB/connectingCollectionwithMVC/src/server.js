const express = require('express')

const app = express();
app.use(express.json());

const connect = require('./configs/db'); //mongoose handles data basess connnecting properties to express

const commentController = require('./controllers/comment.controller.js');
const userController = require('./controllers/user.controller.js');
const tagController = require('./controllers/tag.controller.js');
const postController = require('./controllers/post.controller.js');

app.use('/users', userController);
app.use('/comment', commentController);
app.use('/tags', tagController);
app.use('/posts',postController);










//end of creating all collections<==

//wrinting all CRUD operations for all collectins==> always write CRUD operation first for Independet collection(parents)==> [1)users , 2)tags]












app.listen(1111, async () => {
    await connect();
    console.log('listening to port 1111')
})