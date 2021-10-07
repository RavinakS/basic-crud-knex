const { default: knex } = require('knex');
const database = require('./database');

knex.schema.hasTable('user_registration').then(function(exists){
    if(!exists){
        return database.schema.createTable('user_registration', function(table){
            table.increaments('user_id'),
            table.string('name'),
            table.string('email'),
            table.string('password')
        })
    }
})

