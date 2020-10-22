const express = require(`express`)
// подключение контроллера
const controller = require('../controllers/consolidated_request.controller')
//создание экзмпляра роутера
const router = express.Router()

// Получение сводной заявки
// localhost:5000/api/consolidated
router.get('/', controller.getAll)
//Получение заявки за квартал
router.get('/:id', controller.getById)


module.exports = router