// const knex = require('knex');
const database = require('./database');

database.schema.hasTable('user_posts').then((exists)=>{
    if(!exists){
        return database.schema.createTable('user_posts', function(t){
            t.increments('post_id'),
            t.date('date'),
            t.string('img_url'),
            t.string('caption_for_img')
        })
    }
});
