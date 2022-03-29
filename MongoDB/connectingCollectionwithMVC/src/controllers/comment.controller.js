const express = require('express');

const router = express.Router();

const Comment = require('../models/comment.model.js');

const crudController = require('./crud.controller');
router.post('', crudController.post(Comment))
router.get('', crudController.getAll(Comment))
router.get('/:id', crudController.getOne(Comment));
router.patch('/:id', crudController.updateOne(Comment));
router.delete('/:id', crudController.deleteOne(Comment));


module.exports = router;