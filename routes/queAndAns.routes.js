const express = require('express');
const router = express.Router();
const {showAllQuesAns, askQuestion, answer, deleteQue} = require('../controller/queAndAns.controller');

router.get('/all-qs-as', showAllQuesAns);

router.post('/ask-question', askQuestion);

router.put('/answer/:id', answer)

router.delete('/delete-question/:id', deleteQue)

module.exports = router;