const host = process.env.host;
const user = process.env.dbUser;
const password = process.env.dbPassword;

const knex = require('knex')({
    client: 'mysql2',
    connection:{
        host: host,
        user: user,
        password: password,
        database: 'user_details',
    }
})

module.exports = knex;