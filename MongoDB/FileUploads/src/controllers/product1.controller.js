const express = require('express');


const router = express.Router();

const upload = require('../middlewares/file.upload');

const Product1 = require('../models/product1.model');

router.post('/single',upload.single('productImages'), async (req,res) => {
    const product1 = await Product1.create({
        name: req.body.name,
        price: req.body.price,
        image_url: req.file.path,
    })

    return res.status(201).send(product1);
})

router.post('/multiple',upload.any('productImages') ,async (req, res) => {

    const filePaths = req.files.map(file => file.path);

    const productMulti =  Product1.create({
        name: req.name,
        name: req.price,
        image_url: filePaths,
    })

    return res.status(201).send(productMulti);
});

module.exports = router;