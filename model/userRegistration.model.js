const db = require('../connection/database');

const usersDetail = () =>{
    return db.select('*').from('user_registration');
}

const userPasswordById = (id) =>{
    return db.select('password').from('user_registration').where('email', id);
}

const userDetailsByID = (email) =>{
    return db.select('email', 'name', 'user_role')
    .from('user_registration')
    .where('email', email);
}

const userRegister = (userDetails) =>{
    return db('user_registration').insert(userDetails);
} 

const updateRecord = (id, data) =>{
    return db('user_registration')
    .where('user_id', id).update(data);
}

const removeUser = (id) =>{
    return db('user_registration')
    .where('email', id).del();
}

module.exports = {usersDetail, userPasswordById, userDetailsByID, userRegister, removeUser, updateRecord};
