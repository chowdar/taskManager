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
    let valid = true;
    let errors = {};

    if( title === ''){
        valid = false;
        errors.title = `title can't be blank`;
    }if( description === ''){
        valid = false;
        errors.description = `description can't be blank`;
    }
    if(valid){
        req.session.errors = {}
        let task = new CreateTask(tasks.length+1, title, description, resourceURL);
        tasks.push(task)
        res.redirect('/tasks/taskList')
    }else{
        req.session.errors = errors
        console.log(req.session.errors)
        res.redirect('/tasks/addTaskForm')
    }
    
}

exports.addTaskForm = (req, res) => {
    let errors = req.session.errors ? req.session.errors : {};
    console.log(errors)
    res.render('tasks/addTaskForm',{
        title: 'Task Manager',
        errors
    })
}