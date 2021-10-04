const { default: knex } = require('knex');
const database = require('./database');

knex.schema.hasTable('registration').then(function(exists){
    if(!exists){
        return database.schema.createTable('registration', function(table){
            table.increaments('user_id');
            table.string('name'),
            table.string('email'),
            table.string('password')
        })
    }
})

module.exports = database;
