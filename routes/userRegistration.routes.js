const express = require('express');
const router = express.Router();
const {login, usersDetail, userDetailsByID, userRegister, updateRecord, removeUser} = require('../controller/userRegistration.controller');

router.get('/login', login);

router.get('/users', usersDetail);

router.get('/user/:id', userDetailsByID);

router.post('/user-register', userRegister)

router.put('/update/:id', updateRecord)

router.delete('/remove-user/:id', removeUser)

module.exports = router;