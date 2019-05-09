let tasks = require('../Models/taskLists')

exports.tasklist = (req, res) => {
    res.render('tasks/taskList',{
        title: 'Task Manager',
        tasks
    })
} 

exports.details = (req,res) => {
    let id = Number(req.params.id);
    let taskDet;
    tasks.map( task =>{
        if(task.id === id){
            taskDet = task
        }
    })
    res.render('tasks/taskDetails',{
        title: 'Task Manager',
        taskDet
    })
}

exports.delete = (req, res) =>{
    let id = Number(req.params.id);
    tasks.map( (task, i) => {
        if(task.id === id ){
            tasks.splice(i, 1);
        }
    })
    console.log(id)
    console.log(tasks)
    res.redirect('/tasks/taskList')
}