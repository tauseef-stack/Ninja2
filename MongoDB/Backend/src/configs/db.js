const mongoose = require('mongoose');
require('dotenv').config();
const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/gyauth')
};

module.exports = connect;

//'mongodb+srv://tauseef:tauseef@cluster0.8f5hl.mongodb.net/social-media?retryWrites=true&w=majority'