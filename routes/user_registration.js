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
        res.send('error' + err)
    })
})

module.exports = router;