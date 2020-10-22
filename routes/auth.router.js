const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/auth.controller')
//создание экзмпляра роутера
const router = express.Router()


// localhost:5000/api/auth/login
router.post('/login', controller.login)
// localhost:5000/api/auth/register
router.post('/register', controller.register)


module.exports = router