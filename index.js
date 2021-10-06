const express = require('express');
const app = express();
const things = require('./routes/test_things')

app.use(demoMiddleware);

app.get('/', function (req, res){
    res.send("Hello world!!");
})

app.all('/users', authorizeUserAccess, (req, res)=>{
    res.send("Well Come to users page!")
})

app.get('/:user/:id', (req, res)=>{
    id = req.params.id;
    user = req.params.user;
    res.send('Hey this is ' + user + " " + id)
})

function demoMiddleware(req, res, next){
    console.log(`${new Date().toISOString()}: ${req.originalUrl}`);
    next();
}

function authorizeUserAccess(req, res, next){
    console.log("Authorize User Access Middleware.");
    next();
}

app.listen(3040, (req, res)=>{
    console.log('server is running-----');
})