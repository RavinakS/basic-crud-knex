const express = require('express');
const app = express();

app.get('/', function (req, res){
    res.send("Hello world!!");
})

app.get('/ravina', (req, res)=>{
    res.send("Well Come Ravina!")
})

app.listen(3040, (req, res)=>{
    console.log('server is running-----');
})