const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;
const {userDetailsByID} = require('../../model/userRegistration.model');

const createToken = async (req, res, next) =>{
    userDetail = await userDetailsByID(req.body.email);
    try{
        token =  await jwt.sign(userDetail, secretKey);
        req.token = token;
        next();
    }catch(err){
        res.send(err);
        next();
    }
}

const verifyToken = async (req, res, next) =>{
    try{
        decoded = await jwt.verify(req.token, secretKey);
        req.user = decoded;
        next()
    }catch(err){
        res.send(err);
        next()
    }
}

module.exports = {createToken, verifyToken};