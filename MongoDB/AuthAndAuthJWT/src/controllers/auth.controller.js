const User = require('../models/user.model.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const newToken = (user) => {//creating token for new user==>
    //console.log(process.env.JWT_KEY)
    return jwt.sign({ user },process.env.JWT_KEY) //key can be anything==> //we are destructuring user bcoz we need to send mongoose object no jason object ==>
}


const register = async (req, res) => {
    let user;
   
    try {
      
          //chack if the email provided by the user is alredy exist in db or not?
      user = await User.findOne({ email: req.body.email }).lean().exec();
     
   
    //if exist then throw an exception of status 400(bad request user alredy exist)
     if (user) return res.status(400).send({ staus: "failed", message: "Enter valid email or password(email exist can't say)" });

     //  console.log(hash)
    //if no then create the user by using information provided by user in the body
    user = await User.create(req.body) //bofore creating user from body data we need to hash(bcryptjs) password otherwise hacker will get passwod also from db ==> this we are doing just after creating schema using pre save hook (like middleware) provided by inbuild mongoose eith the help of bcyptjs ==>
        //console.log(user);


     //hash(not encrypt) the password and save the user in the database. //after hashing(bcrypt)
     //if we are not able to create user from our end(500) something went wrong with server and cod ==>
    if (!user) return res.status(500).send({ staus: "failed", message: "not able to create user internally" });
     


    //if we create user successfully create token for that user.
   //for creating token we use library jsonwebtoken ==> create
    const token = newToken(user); //we gwt the token here ==>

    
    //we will return the response with the user and token.
    
       return res.status(201).json({ user,token });
   }
   catch (err) { //if we are not able to handle pomise return by prev function then we directly come into this block==>
        return res.status(500).send({ staus: "failed", message: "not entering try block" })
    }
  
};


//login ==>

const login = async (req, res) => {
    try {
    //check the user with the mail====>
        let user = await User.findOne({ email: req.body.email }).exec(); //not lean bcoz we need mongoose object for further processing ==>



    //if user not exist send error with status code 400 bcoz it must exist during login process
    if (!user) return res.status(400).send({ staus: "failed", message: "Enter valid email or password(user not exist in our collection)" });



    //if exist then check for password ==>
        const match = await user.checkPassword(req.body.password); //this method will return false and true function is in the model section wwe need to write this function explicitly; we need user as mongoose object so no lean()==>
         // console.log(match)
           
       if(!match) return res.status(400).send({status:"failed",message:"Invalid password(can't say)"})


    //if password match then create a token and send the token ==>
        const token = newToken(user);
          

        return res.status(201).json({ user, token });
    } catch(err) {
        return res.status(500).send({ status: "failed", message: "not entering try block" })
    }
   
};

const user = async (req, res) => {
    try {
        let user = await User.find().lean().exec();

         res.status(200).json({user})
    } catch (err) {
        return res.send({ status: "failed", message: "not able to handle promise" });
    }
}

module.exports = {
    register,
    login,
    user,
}