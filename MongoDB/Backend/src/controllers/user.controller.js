const express = require('express');
const router = express.Router();
const User = require('../models/user.models');


router.post('/register', async (req, res) => {
    try {
        console.log('from try block')
        const user = await User.create(req.body);
       console.log(user)
     return res.status(201).json({ user });
     
    } catch (err) {
        console.log(err)
    }
});

module.exports = router;

// {
//     userName: req.body.userName,
//     email: req.body.email,
//     password: req.body.password,
// }