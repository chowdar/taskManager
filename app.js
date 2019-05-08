let express = require('express');
let tasksRoutes = require('./routes/taskRoutes')

let app = express();
app.set('view engine', 'ejs')



app.get('/', (req,res) => {
    res.redirect('/tasks/taskList')
})

app.use('/', tasksRoutes)

module.exports = app;