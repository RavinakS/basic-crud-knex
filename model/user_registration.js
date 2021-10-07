const db = require('../connection/database');

const users_detail = () =>{
    return db.select('*').from('user_registration');
}

const userDetailsByID = (id) =>{
    return db.select('*')
    .from('user_registration')
    .where('user_id', id);
}

module.exports = {users_detail, userDetailsByID};
