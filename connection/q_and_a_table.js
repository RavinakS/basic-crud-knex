const db = require('./database');

db.schema.hasTable('q_and_as').then((exists)=>{
    if(!exists){
        return db.schema.createTable('q_and_as', function(t){
            t.increments('question_id'),
            t.string('questions'),
            t.string('answers')
        });
    }
})
