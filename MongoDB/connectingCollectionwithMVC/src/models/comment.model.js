const mongoose = require('mongoose');

//comment Schema==>[only connect with parent post]
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    post_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post',
        required: true,
    },
    
}, {
    versionKey: false,
    timestamps:true});

const Comment = mongoose.model('comment', commentSchema); //genrate comments collection keeping id from posts


module.exports = Comment;