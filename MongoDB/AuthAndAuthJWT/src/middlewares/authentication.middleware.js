const jwt = require('jsonwebtoken');
 
const verifyToken = (token) => { //it takes token and verify not compare like hash and from token decrypt user like online at jwt.io ==>

    return new Promise((resolve, reject) => {
        jwt.verify(token, process.env.JWT_KEY, function (err, user) {
            if (err) return reject(err);
            
            if(user) return resolve(user);
       });
    })
   
}

const authentication = async (req, res, next) => {
    //we need to ensure token iss send in a request header==> 
    const bearerToken = req?.headers?.authorization; //small ahere and A in Postman will not matter==>
    

    //if token is not send=> send 400 err
    //else check token to be bearer token  ==> Bearer ${token} ==> in header section of postman==> section
      //if not then send 400 err
    if (!bearerToken || !bearerToken.startsWith('Bearer '))
        return res.status(400).send({status:'failed',message:'kindly provide token in header section with Bearer convention'})

 //else we will verify token with jwt package who is also generating this token ==> Bearer ${token} ==>
 
    const token = bearerToken.split(" ")[1]; //pulling out actual token from header==>
            //console.log(token);
    let user;
    try {
      user = await verifyToken(token); //this function we need to write not inbuilt; //it will convert tokeninto user data==>
        //console.log(user)
     //if not send err 400  
    } catch (err) {
        res.status(400).send({status:'failed',message:'token is invalid or wrong'})
    }
      
//else we will add user to the request ==> {v. imp because till we dont know the user is lister or not we cannot pass him to add product in amazon list==>}
    req.user =  user.user;  //coming user:{user:{}} therfore destructuring ==> sending user to next section after middleware ==>



//then we will do next(); sending 
    next();
}

module.exports = authentication;