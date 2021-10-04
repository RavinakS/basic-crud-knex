const express = require('express');
const app = express();
const things = require('./routes/test_things')


app.use('/things', things);
// app.get('/', function (req, res){
//     res.send("Hello world!!");
// })

// app.all('/ravina', (req, res)=>{
//     res.send("Well Come Ravina!")
// })

// app.get('/:user/:id', (req, res)=>{
//     id = req.params.id;
//     user = req.params.user;
//     res.send('Hey this is ' + user + " " + id)
// })

app.listen(3040, (req, res)=>{
    console.log('server is running-----');
})