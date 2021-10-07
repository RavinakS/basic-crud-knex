const db = require('../connection/database');

const usersDetail = () =>{
    return db.select('*').from('user_registration');
}

const userDetailsByID = (id) =>{
    return db.select('*')
    .from('user_registration')
    .where('user_id', id);
}

const userRegister = (userDetails) =>{
    return db('user_registration').insert(userDetails);
} 

module.exports = {usersDetail, userDetailsByID, userRegister};
