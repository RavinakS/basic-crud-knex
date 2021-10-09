const db = require('../connection/database');

const showAllQuesAns = () =>{
    return db('q_and_as').select('*');
}

const askQuestion = (question) =>{
    return db('q_and_as').insert(question);
}

const answer = (id, ans) =>{
    return db('q_and_as').where('question_id', id).update(ans);
}

const deleteQue = (id) =>{
    return db('q_and_as').where('question_id', id).del();
}

module.exports = {showAllQuesAns, askQuestion, answer, deleteQue};