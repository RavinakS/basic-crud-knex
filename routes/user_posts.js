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

router.put('/edit-post/:id', (req, res)=>{
    userPostsTable.editPost(req.params.id, req.body)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Changes are saved."})
    })
    .catch((err)=>{
        res.send(err)
    })
})

router.delete('/delete-post/:id', (req, res)=>{
    userPostsTable.deletePost(req.params.id)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Your post is successfully deleted."})
    })
    .catch((err)=>{
        console.log(err);
    })
})

module.exports = router;