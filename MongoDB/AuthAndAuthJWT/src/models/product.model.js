const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    lister:{type:mongoose.Schema.Types.ObjectId ,ref:"myuser"} //we will get liser id also
}, {
    versionKey: false,
    timestamps:true,
})

const Product = mongoose.model('product', productSchema) //product collections==>


module.exports = Product;