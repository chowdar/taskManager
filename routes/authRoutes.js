let express = require('express')
let router = express.Router();

let authController = require('../Controllers/authController')

router.get('/login', authController.login);

router.post('/login', authController.loginPost);

router.get('/logout', authController.logout)


module.exports = router;