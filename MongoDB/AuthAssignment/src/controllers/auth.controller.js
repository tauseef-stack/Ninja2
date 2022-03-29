const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const newToken = (user) => {
    return jwt.sign({ user } , process.env.JWT_KEY);
}
const register = async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email }).lean().exec();
            
       
        if (user) return res.status(400).send({ staus: "failed", message: "Enter valid email or password(email exist can't say)" });
        
        user = await User.create(req.body);
    
        if (!user) return res.status(500).send({ staus: "failed", message: "not able to create user internally" });
        
        const token = newToken( user )


        res.status(201).json({ user, token });


    }
    catch (err) {
        return res.status(500).send({ staus: "failed", message: "not entering try block" })
    }
  
}

const login = async (req, res) => {

    try {
        let user = await User.findOne({ email: req.body.email }).exec();
                
        if (!user) return res.status(400).send({ staus: "failed", message: "Enter valid email or password(user not exist in our collection)" });
        
        const match = await user.checkPassword(req.body.password);
        console.log(match)
        
        if (!match) return res.status(400).send({ status: "failed", message: "Invalid password(can't say)" })
        
        const token = newToken(user);
    
        res.status(201).json({ user, token });
    } 
    catch (err) {
        return res.status(500).send({ staus: "failed", message: "not entering try block" })
    }
   
}

module.exports = {
    register,
    login,
}