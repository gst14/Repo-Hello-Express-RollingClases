const jwt = require('jsonwebtoken')
require('dotenv').config()

const jwtValidation = (req, res, next) => {
    const token = req.headers['access-token'];
    const SECRET_KEY = process.env.SECRET_KEY;
    if(token){
        jwt.verify(token, SECRET_KEY, (err) => {
            if(err){
                res.status(401).send({ mensaje: "Token es invalido" })
            }else{
                next();
            }
          });
    }else{
        res.status(401).send({ mensaje: "Token es requerido" })
    }
}

module.exports = {
    jwtValidation
}
