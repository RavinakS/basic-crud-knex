const knex = require('knex');
const database = require('./database');

knex.schema.hasTable('user_posts').then((exists)=>{
    if(!exists){
        return database.schema.createTable('user_posts', function(t){
            t.increaments('post_id'),
            t.date('date')
        })
    }
})