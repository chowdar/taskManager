let express = require('express');

let tasks = require('./Models/taskLists')
let app = express();

app.get('/', (req,res) => {
    console.log(tasks)
    res.send("homepage")
})

app.get('/tasks', (req,res) => {
    
    res.json(tasks)
})


module.exports = app;