let tasks = require('../Models/taskLists')

exports.tasklist = (req, res) => {
    res.render('tasks/taskList',{
        title: 'Task Manager',
        projectName: 'TaskManager'
    })
} 