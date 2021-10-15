const express = require('express');
const app = express();
app.use(express.json());

const users = require('./routes/user_registration');
app.use('/', users);

const users_posts = require('./routes/user_posts');
app.use('/', users_posts);

const qAndas = require('./routes/que_and_ans');
app.use('/', qAndas);

app.listen(3040, function(req, res){
    console.log("server is on----");
})