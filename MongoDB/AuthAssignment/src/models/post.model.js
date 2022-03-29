const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    poster: { type:mongoose.Schema.Types.ObjectId,ref:"user" },
}, {
    versionKey: false,
    timestamps:true,
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;