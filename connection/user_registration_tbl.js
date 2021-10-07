const database = require('./database');

database.schema.hasTable('user_registration').then(function(exists){
    if(!exists){
        return database.schema.createTable('user_registration', function(table){
            table.increments('user_id'),
            table.string('name'),
            table.string('email'),
            table.string('password')
        })
    }
})

