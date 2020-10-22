const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/resource.controller')
//создание экзмпляра роутера
const router = express.Router()

// Список уже имеющихся ТМЦ
// localhost:5000/api/resource
router.get('/', controller.getAll)
// Информация об одной ТМЦ
router.get('/:id', controller.getById)

//Создание новой единицы ТМЦ
router.post('/', controller.create)

//Изменение данных о ТМЦ
router.patch('/:id', controller.update)

//Удаление данных о ТМЦ
router.delete('/:id', controller.remove)


module.exports = router