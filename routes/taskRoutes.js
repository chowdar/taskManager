let express = require('express')
let router = express.Router();
let taskController = require('../Controllers/taskController');

router.get('/tasks/tasklist',  taskController.tasklist);
router.get('/tasks/:id/details', taskController.details);
router.get('/tasks/:id/delete', taskController.delete);
router.get('/tasks/addTaskForm', taskController.addTaskForm);

router.post('/tasks/addTask', taskController.addTask);


module.exports = router; 