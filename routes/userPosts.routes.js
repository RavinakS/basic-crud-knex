const express = require('express');
const router = express.Router();
const {allPosts, getPostByID, newPost, editPost, deletePost} = require('../controller/userPosts.controller');

router.get('/all-posts', allPosts);

router.get('/post/:id', getPostByID);

router.post('/new-post', newPost);

router.put('/edit-post/:id', editPost)

router.delete('/delete-post/:id', deletePost)

module.exports = router;