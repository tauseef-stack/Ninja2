const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect(`mongodb+srv://tauseef:ansaritauseef@cluster0.zbp8a.mongodb.net/tweet?retryWrites=true&w=majority`).then(() => {
        console.log('connection successfull')
    }).catch((err) => {
        console.log('database connection failed')
    });
}

module.exports = connect;



//`'mongodb://localhost:27017/frontend'`