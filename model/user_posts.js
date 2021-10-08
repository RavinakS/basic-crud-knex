const db = require('../connection/database');

const allPosts = () =>{
    return db.select('*').from('user_posts');
}

const newPost = (data) =>{
    return db('user_posts').insert(data);
}

const editPost = (id, updatedPost) =>{
    return db('user_posts').where("post_id", id).update(updatedPost)
}

const deletePost = (id) =>{
    return db('user_posts').where("post_id", id).del();
}

module.exports = {allPosts, newPost, editPost, deletePost};

