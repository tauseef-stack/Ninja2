  const mongoose = require('mongoose');

//for user collection
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: false },
    age:{type:Number,required:true}
}, {
    versionKey: false,
    timestamps:true})

const User = mongoose.model("student", userSchema);

module.exports = User;