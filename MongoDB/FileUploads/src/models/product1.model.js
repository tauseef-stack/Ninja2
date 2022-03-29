const mongoose = require('mongoose');

const product1Schema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image_url: [{ type: String, required: true }],
}, {
    versionKey: false,
    timestamps:true,
})

const Product1 = mongoose.model('product', product1Schema)

module.exports = Product1;