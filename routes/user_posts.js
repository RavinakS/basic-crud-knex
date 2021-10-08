const { response } = require('express');
const express = require('express');
const router = express.Router();
const userPostsTable = require('../model/user_posts');

router.get('/all-posts', (req, res)=>{
    userPostsTable.allPosts()
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send(err);
    })
})

router.post('/new-post', (req, res)=>{
    userPostsTable.newPost(req.body)
    .then((result)=>{
        res.send({"status-code": 200, "message": "your post is published successfully!!"})
    })
    .catch((err)=>{
        res.send(err);
    })
})


module.exports = router;