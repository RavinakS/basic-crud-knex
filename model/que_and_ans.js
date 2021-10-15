const db = require('../connection/database');

const showAllQuesAns = () =>{
    return db('qua_and_ans').select('*');
}

const askQuestion = (question) =>{
    return db('qua_and_ans').insert(question);
}

const answer = (id, ans) =>{
    return db('qua_and_ans').where('question_id', id).update(ans);
}

const deleteQue = (id) =>{
    return db('qua_and_ans').where('question_id', id).del();
}

module.exports = {showAllQuesAns, askQuestion, answer, deleteQue};