const userPostsTable = require('../model/userPosts.model');

const allPosts = (req, res)=>{
    userPostsTable.allPosts()
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send(err);
    })
}

const getPostByID = (req, res)=>{
    userPostsTable.postByID(req.params.id)
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        res.send(err);
    })
}

const newPost = (req, res)=>{
    userPostsTable.newPost(req.body)
    .then((result)=>{
        res.send({"status-code": 200, "message": "your post is published successfully!!"})
    })
    .catch((err)=>{
        res.send(err);
    })
}

const editPost = (req, res)=>{
    userPostsTable.editPost(req.params.id, req.body)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Changes are saved."})
    })
    .catch((err)=>{
        res.send(err)
    })
}

const deletePost = (req, res)=>{
    userPostsTable.deletePost(req.params.id)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Your post is successfully deleted."})
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports = {allPosts, getPostByID, newPost, editPost, deletePost}