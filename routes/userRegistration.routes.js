const express = require('express');
const router = express.Router();
const {login, usersDetail, userDetailsByID, userRegister, updateRecord, removeUser} = require('../controller/userRegistration.controller');
const {encrypt, decrypt} = require('../controller/middlewares/password');
const {createToken, verifyToken} = require('../controller/middlewares/token');

router.post('/user-register', encrypt, userRegister, createToken);

router.get('/login', decrypt, login, createToken);

router.get('/users', verifyToken, usersDetail);

router.get('/user/:id', verifyToken, userDetailsByID);

router.put('/update/:id', verifyToken, updateRecord)

router.delete('/remove-user', verifyToken, removeUser)

module.exports = router;