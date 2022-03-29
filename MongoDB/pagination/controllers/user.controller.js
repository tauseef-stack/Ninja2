const express = require('express');

const router = express.Router();

const User = require('../models/user.model');

const transporter = require('../configs/mail')

router.get('/', async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 10; //+is coverting string into number
     
    const offset = (page - 1) * size //for page1 =0, page2 = 1.
    
    const query = {age:{$lt:40}} || null; //since query has 2 placess ==>

    const users = await User.find(query).sort({ "age": 1 }).skip(offset).limit(size).lean().exec();

    const totalDoc = await User.find(query).countDocuments();

    const totalPages = Math.ceil(totalDoc / size);

   //mail paste documents ==>
    try {
        await transporter.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com", // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello Tauseef from text", // plain text body
            html: "<b>Hello Tauseef from HTML</b>", // html body
          });
     } catch (err) {
        console.log(err)
    }
  

    res.status(200).json({users,totalPages})
})



module.exports = router;