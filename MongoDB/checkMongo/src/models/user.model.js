const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true}
}, {
    versionKey: false,
    timestamps:true,
})

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    
    this.password = bcrypt.hashSync(this.password, 8);

    next();
})

const User = mongoose.model('user', userSchema);

module.exports = User;