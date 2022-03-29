const express = require('express');
const User = require('../models/user.model');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = await User.create(req.body);

    res.status(200).json({user})
})

module.exports = router;
