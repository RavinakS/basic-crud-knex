const { response } = require('express');
const express = require('express');
const router = express.Router();
const table = require('../model/que_and_ans');

router.get('/all-qs-as', (req, res)=>{
    table.showAllQuesAns()
    .then((response)=>{
        res.send(response);
    })
    .catch((err)=>{
        console.log(err);
    })
})

router.post('/ask-question', (req, res)=>{
    table.askQuestion(req.body)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Submitted the Question."})
    })
    .catch((err)=>{
        res.send(err);
    })
})

router.put('/answer/:id', (req, res)=>{
    table.answer(req.params.id, req.body)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Submitted the Answer."})
    })
    .catch((err)=>{
        res.send(err);
    })
})

router.delete('/delete-question/:id', (req, res)=>{
    table.deleteQue(req.params.id)
    .then((response)=>{
        res.send({"status-code": 200, "message": "Deleted the Question."})
    })
    .catch((err)=>{
        res.send(err);
    })
})

module.exports = router;