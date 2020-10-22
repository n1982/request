//страница заявки (для каждого цеха)
const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/request.controller')
//создание экзмпляра роутера
const router = express.Router()

// Список всех заявок
// localhost:5000/api/request
router.get('/', controller.getAll)

//Получение данных об одной заявке
router.get('/:id', controller.getById)

//Создание новой заявки
router.post('/', controller.create)

//Изменение заявки
router.patch('/:id', controller.update)

//Удаление заявки
router.delete('/:id', controller.remove)


module.exports = router