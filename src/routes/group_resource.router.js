const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/group_resource.controller')
//создание экзмпляра роутера
const router = express.Router()

// Список уже созданных групп товаров
// localhost:5000/api/groupResource
router.get('/', controller.getAll)
// Сведения об одной группе товара
router.get('/:id', controller.getById)

//Создание новой группы товара
router.post('/', controller.create)

//Изменение данных о группе товара
router.patch('/:id', controller.update)

//Удаление данных о группе товара
router.delete('/:id', controller.remove)


module.exports = router
