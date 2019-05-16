let express = require('express');
let bodyParser = require('body-parser');

let tasksRoutes = require('./routes/taskRoutes')

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');




app.get('/', (req,res) => {
    res.redirect('/tasks/taskList')
})

app.use('/', tasksRoutes)

module.exports = app;