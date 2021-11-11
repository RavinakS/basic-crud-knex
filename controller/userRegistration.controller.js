const userRegTable = require('../model/userRegistration.model');
const password = require('./middlewares/password');

const login = (req, res) =>{
    let password = req.body.password;
    let user_role = userRegTable.userDetailsByID(email)
    

}

const usersDetail = (req, res)=>{
    userRegTable.usersDetail()
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send(err);
    })
}

const userDetailsByID = (req, res)=>{
    userRegTable.userDetailsByID(req.params.id)
    .then((userData)=>{
        res.send(userData);
    })
    .catch((err)=>{
        res.send(err);
    })
}

const userRegister = async (req, res)=>{
    hashPassword = await password.encrypt(req.body.password);
    userData = {
        "name": req.body.name,
        "email": req.body.email,
        "password": hashPassword
    }
    userRegTable.userRegister(userData)
    .then((ststus)=>{
        res.send("user is successfully registered!!");
    })
    .catch((console.error()));
}

const updateRecord = (req, res)=>{
    userRegTable.updateRecord(req.params.id, req.body)
    .then((response)=>{
        res.send("Updated the record of id " + req.params.id)
    })
    .catch((err)=>{
        // let status = err.status || 500;
        // res.sendStatus(status);
        res.send(err);
    });
}

const removeUser = (req, res)=>{
    userRegTable.removeUser(req.params.id)
    .then((result)=>{
        res.send("user is successfully deleted!!");
    })
    .catch(console.error());
}

module.exports = {usersDetail, userDetailsByID, userRegister, updateRecord, removeUser, login}