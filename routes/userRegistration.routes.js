const express = require('express');
const router = express.Router();
const {login, usersDetail, userDetailsByID, userRegister, updateRecord, removeUser} = require('../controller/userRegistration.controller');
const {encrypt, decrypt} = require('../controller/middlewares/password');
const {createToken, verifyToken} = require('../controller/middlewares/token');

router.post('/user-register', encrypt, userRegister, createToken);

router.get('/login', decrypt, login, createToken);

router.get('/users', usersDetail);

router.get('/user/:id', userDetailsByID);

router.put('/update/:id', updateRecord)

router.delete('/remove-user/:id', removeUser)

module.exports = router;