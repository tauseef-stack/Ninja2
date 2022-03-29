const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role:[{ type: String, required: true}],
    
}, {
    versionKey: false,
    timestamps: true,
});

//before saving user data into db we are passing it through middleware(next) so that its password can be hash using bcrypt==>

userSchema.pre('save',  function(next)  { //since we are using this key word therfore we need to use syncchronus function not arrow function otherwise this wil point to global object not parent object ==>
    if (!this.isModified('password')) return next(); //it also come into picture when we modify something so if we are not modifying password then it will do nothing this(userSchema) else=>
    this.password =  bcrypt.hashSync(this.password,8)
    next();
})


//login password check ==>
userSchema.methods.checkPassword = function (password) {
    const passwordHash = this.password;
           console.log(passwordHash,password)
    return   bcrypt.compareSync(password, passwordHash) //return in match true or false
}

//instead of async await we can directly use Sync key word with compre and hash in both the Middle ware


const User = mongoose.model('myuser', userSchema); //create userauth DataBase.

module.exports = User;

