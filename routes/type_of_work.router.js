const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/type_of_work.controller')
//создание экзмпляра роутера
const router = express.Router()

// Список уже имеющихся видов работ
// localhost:5000/api/workshop
router.get('/', controller.getAll)
// Информация об одном виде работ
router.get('/:id', controller.getById)

//Создание нового вида работ
router.post('/', controller.create)

//Изменение данных о виде работ
router.patch('/:id', controller.update)

//Удаление данных о виде работ
router.delete('/:id', controller.remove)


module.exports = router