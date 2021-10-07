const { response } = require('express');
const express = require('express');
const router = express.Router();
router.use(express.json());
const user_reg_table = require('../model/user_registration');

router.get('/users', (req, res)=>{
    const data = user_reg_table.users_detail();
    data.then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send('error' + err)
    })
})

module.exports = router;