const jwt = require('jsonwebtoken');

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_KEY, function (err, user) {
            if (err) return reject(err);
            
            if(user) return resolve(user);
        })
    })
}

const authentication = async (req, res, next) => {

    const bearerToken = req?.headers?.authorization;

    if (!bearerToken || !bearerToken.startsWith('Bearer ')) return res.status(400).send({ status: 'failed', message: 'kindly provide token in header section with Bearer convention' })
    
    const token = bearerToken.split(" ")[1];

    let user;
    try {
        user = await verifyToken(token);  
    }
    catch (err) {
        res.status(400).send({status:'failed',message:'token is invalid or wrong'})
    }

    req.user = user.user;

    next();
}

module.exports = authentication;