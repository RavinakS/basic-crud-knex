const express = require('express');
const router = express.Router();
const userRegTable = require('../model/user_registration');

router.get('/users', (req, res)=>{
    userRegTable.usersDetail()
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send(err);
    })
})

router.get('/user/:id', (req, res)=>{
    userRegTable.userDetailsByID(req.params.id)
    .then((userData)=>{
        res.send(userData);
    })
    .catch((err)=>{
        res.send(err);
    })
})

router.post('/user-register', (req, res)=>{
    data = {
        user_id: req.body.user_id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    };

    userRegTable.userRegister(data)
    .then((ststus)=>{
        res.send("user is successfully registered!!");
    })
    .catch((console.error()));
})

router.put('/update/:id', (req, res)=>{
    userRegTable.updateRecord(req.params.id, req.body)
    .then((response)=>{
        res.send(response);
        // res.send("Updated the record of id " + req.params.id)
    })
    .catch((err)=>{
        // console.log("Hello");
        // let status = err.status || 500;
        // res.sendStatus(status);
        res.send(err);
    });
})

router.delete('/remove-user/:id', (req, res)=>{
    userRegTable.removeUser(req.params.id)
    .then((result)=>{
        res.send("user is successfully deleted!!");
    })
    .catch(console.error());
})

module.exports = router;