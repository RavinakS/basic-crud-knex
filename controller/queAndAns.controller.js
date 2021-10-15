const table = require('../model/que_and_ans');

const showAllQuesAns = (req, res)=>{
    table.showAllQuesAns()
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        console.log(err);
    })
}

const askQuestion = (req, res)=>{
    table.askQuestion(req.body)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Submitted the Question."})
    })
    .catch((err)=>{
        res.send(err);
    })
}

const answer = (req, res)=>{
    table.answer(req.params.id, req.body)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Submitted the Answer."})
    })
    .catch((err)=>{
        res.send(err);
    })
}

const deleteQue = (req, res)=>{
    table.deleteQue(req.params.id)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Deleted the Question."})
    })
    .catch((err)=>{
        res.send(err);
    })
}

module.exports = {showAllQuesAns, askQuestion, answer, deleteQue}