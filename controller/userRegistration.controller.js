const userRegTable = require('../model/userRegistration.model');

const userRegister = async (req, res)=>{
    userData = {
        "name": req.body.name,
        "email": req.body.email,
        "password": req.hashPWD,
        "user_role": req.body.user_role
    }
    try{
        user = await userRegTable.userRegister(userData);
        res.send("user is successfully registered!!");
    }
    catch(err){
        res.send(err.sqlMessage);
        // res.send(err.details[0].message);
    }
}

const login = (req, res) =>{
    if(req.valid){

    }
    

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
    userRegTable.removeUser(req.body.email)
    .then((result)=>{
        res.send("user is successfully deleted!!");
    })
    .catch((err)=>{
        console.log(err);
        res.send(err.sqlMessage);
    });
}

module.exports = {usersDetail, userDetailsByID, userRegister, updateRecord, removeUser, login}