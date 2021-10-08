const db = require('../connection/database');

const allPosts = () =>{
    return db.select('*').from('user_posts');
}

const newPost = (data) =>{
    return db('user_posts').insert(data);
}

module.exports = {allPosts, newPost};

