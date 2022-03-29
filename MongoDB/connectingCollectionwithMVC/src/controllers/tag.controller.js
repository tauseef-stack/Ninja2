const express = require('express');

const router = express.Router();

const Tag = require('../models/tag.model.js');

const crudController = require('./crud.controller');
router.post('', crudController.post(Tag))
router.get('', crudController.getAll(Tag))
router.get('/:id', crudController.getOne(Tag));
router.patch('/:id', crudController.updateOne(Tag));
router.delete('/:id', crudController.deleteOne(Tag));

module.exports = router;