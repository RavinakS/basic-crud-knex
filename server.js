const express = require('express');
const app = express();
app.use(express.json());

const users = require('./routes/user_registration');
app.use('./', users);

app.listen(3040, function(req, res){
    console.log("server is on----");
})