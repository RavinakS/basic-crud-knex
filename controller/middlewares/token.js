const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;

function createToken(tokenData){
    return jwt.sign()
}