const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.send("Get route on things.")
});

router.post('/', function(req, res){
    res.send("Post route on things.")
});

// rxport this router to use in our index.js file.
module.exports = router;

