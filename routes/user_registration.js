// const { response } = require('express');
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
    .then((console.error()));
})

module.exports = router;