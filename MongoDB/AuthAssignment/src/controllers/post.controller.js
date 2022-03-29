const Post = require('../models/post.model');
const express = require('express');

const router = express.Router();

router.post('/', async (req, res) => {

    const user = req.user;
    console.log(user)
    const post = await Post.create({
        title: req.body.title,
        body: req.body.body,
        poster: user._id,
    })

    res.status(201).json({post})
});

router.get('/',async (req, res) => {
    const post = await Post.find().lean().exec();

    res.status(200).json({ post });
})

module.exports = router;