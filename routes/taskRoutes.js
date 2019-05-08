let express = require('express')
let router = express.Router();
let taskController = require('../Controllers/taskController');

router.get('/tasks/tasklist',  taskController.tasklist)

module.exports = router;