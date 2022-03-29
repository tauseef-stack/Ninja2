const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
}, {
    versionKey: false,
    timestamps:true,
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();

    this.password = bcrypt.hashSync(this.password,8);
    next();
})


userSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password;
           
    return   bcrypt.compareSync(password, passwordHash)
}


const User = mongoose.model('user', userSchema);

module.exports = User;