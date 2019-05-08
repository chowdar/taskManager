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
    console.log(taskDet.resourceURL)
    res.render('tasks/taskDetails',{
        title: 'Task Manager',
        taskDet
    })
}