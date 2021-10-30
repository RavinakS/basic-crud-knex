const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

const users = require('./routes/userRegistration.routes');
app.use('/', users);

const users_posts = require('./routes/userPosts.routes');
app.use('/', users_posts);

const qAndas = require('./routes/queAndAns.routes');
app.use('/', qAndas);

app.listen(3040, function(req, res){
    console.log("server is on----");
})