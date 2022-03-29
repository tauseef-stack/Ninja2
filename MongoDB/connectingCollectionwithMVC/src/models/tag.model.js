const mongoose = require('mongoose');

//tags ==>[parent of post]
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Tag = mongoose.model('tag', tagSchema)//create tags collection

module.exports = Tag;