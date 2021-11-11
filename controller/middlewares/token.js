const jwt = require('jsonwebtoken');
const secretKey = process.env.secretKey;
const user_role = require('../../model/userRegistration.model').userDetailsByID;

// function createToken(tokenData){
//     return jwt.sign()
// }