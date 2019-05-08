let express = require('express')
let router = express.Router();
let taskController = require('../Controllers/taskController');

router.get('/tasks/tasklist',  taskController.tasklist);
router.get('/tasks/:id/details', taskController.details)

module.exports = router;