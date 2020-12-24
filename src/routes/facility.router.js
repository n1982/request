const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/facility.controller')
//создание экзмпляра роутера
const router = express.Router()

// Список уже созданных объектов
// localhost:5000/api/facility
router.get('/', controller.getAll)
// Получение данных об одном объекте
router.get('/:id', controller.getById)

//Создание нового объекта
router.post('/', controller.create)

//Изменение данных об объекте
router.patch('/:id', controller.update)

//Удаление данных об объекте
router.delete('/:id', controller.remove)


module.exports = router