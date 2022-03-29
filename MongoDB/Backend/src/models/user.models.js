const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: "",
        required:false,
    },
    coverPicture: {
        type: String,
        default: "",
        required:false,
    },
    followers: {
        type: Array,
        default: [],
        required:false,
    },
    followings: {
        type: Array,
        default: [],
        required:false,
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required:false,
    }
}, {
    versionKey: false,
    timestamps:true,
});

userSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next();
    console.log('message from pre save method');
    this.password = bcrypt.hashSync(this.password, 8);
    next()
})

const User = mongoose.model('user', userSchema); //user collection

module.exports = User;



// {
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     password:{ type: String, required: true},
// }