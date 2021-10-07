const knex = require('knex')({
    client: 'mysql2',
    connection:{
        host: 'localhost',
        user: 'root',
        password: 'ravina@123',
        database: 'user_details',
    }
})

module.exports = knex;