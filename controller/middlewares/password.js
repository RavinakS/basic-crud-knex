const bcrypt = require('bcrypt');
Password = require('../../model/userRegistration.model');

async function encrypt(req, res, next){
    password = req.body.password;
    salt = await bcrypt.genSalt();

    try{
        hashPWD = await bcrypt.hash(password, salt);
        req.hashPWD = hashPWD;
        next();
    }catch{
        res.send("password is required.");
        next();
    }
    
    
}

async function decrypt(req, res, next){
    dbPassword = await password.userPasswordById(req.body.email);
    passwordIsValid = await bcrypt.compare(req.body.password, dbPassword);
    if(passwordIsValid){
        req.valid = passwordIsValid;
        next();
    }else{
        res.send("Incorrect Password!");
        next()
    }
}

module.exports = {encrypt, decrypt};