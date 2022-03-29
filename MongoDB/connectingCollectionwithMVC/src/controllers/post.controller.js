const express = require('express');

const router = express.Router();

const Post = require('../models/post.model.js');
const Comment = require('../models/comment.model.js');

const crudController = require('./crud.controller');
router.post('', crudController.post(Post))
router.get('', crudController.getAll(Post))
router.get('/:id', crudController.getOne(Post));
router.patch('/:id', crudController.updateOne(Post));
router.delete('/:id', crudController.deleteOne(Post));

//some Advanced operations Mixed ===>
//get all comments ralated to single post ==>
router.get('/:id/comments', async (req, res) => {
    const comments = await Post.find({ post_id: req.params.id }).lean().exec();
    const post = await Post.findById(req.params.id).populate('user_id').populate('tag_ids').lean().exec();

    res.status(200).json({comments,post})
})
//end of CRUD post

module.exports = router;