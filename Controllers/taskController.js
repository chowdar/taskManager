let tasks = require('../Models/taskLists');
let CreateTask = require('../helpers/Task')


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
    res.redirect('/tasks/taskList')
}

exports.addTask = (req,res) => {
    let { title, description, resourceURL} = req.body
    let task = new CreateTask(tasks.length+1, title, description, resourceURL);
    tasks.push(task)
    console.log(tasks);
    res.redirect('/tasks/taskList')
}

exports.addTaskForm = (req, res) => {
    res.render('tasks/addTaskForm',{
        title: 'Task Manager'
    })
}