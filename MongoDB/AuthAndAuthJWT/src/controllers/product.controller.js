const express = require('express');
const Product = require('../models/product.model');
const router = express.Router();


router.post('/', async (req, res) => {
    const user = req.user; //coming from middleware 
   // console.log(user);
    const product = await Product.create({
        name:req.body.name,
        price: req.body.price,
        lister:user._id,
    });
        
    res.status(201).json({ product });
});

module.exports = router;