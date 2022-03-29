const mongoose = require('mongoose');

//post Schema==>[user posting comment => user parent ==> tag is also a parent]
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        required: true,
    },
    tag_ids: [ //since it can have  multiple tags therfore array
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'tag',
            required:false, //not neccesarliy added
        }
    ],

}, {
    versionKey: false,
timestamps:true});

const Post = mongoose.model('post',postSchema) //create new collection posts keeping Id from users<==

module.exports = Post;