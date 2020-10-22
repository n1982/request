const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/workshop.controller')
//создание экзмпляра роутера
const router = express.Router()

// Список уже созданных цехов
// localhost:5000/api/workshop
router.get('/', controller.getAll)

router.get('/:id', controller.getById)

//Создание нового цеха
router.post('/', controller.create)

//Изменение данных о цехе
router.patch('/:id', controller.update)

//Удаление данных о цехе
router.delete('/:id', controller.remove)


module.exports = router