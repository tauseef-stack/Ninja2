
const mongoose = require('mongoose');
const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/my-social');
}

module.exports = connect;