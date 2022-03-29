const authorization = (permittedrole)=>  (req, res, next) => {
    const user = req.user; //full user which was available at req.user during authentication
    const roles = user.role; //array of roles =>
    console.log(user, roles)
    
   const is_permitted = permittedrole.filter(role=> roles.includes(role))
      
    if (is_permitted.length > 0) {
        
        next();
    }
    else {
        res.status(403).send({status: '403 Forbidden',message: 'Permission denied(you are not authorize lister)'});
    }
}

module.exports = authorization;