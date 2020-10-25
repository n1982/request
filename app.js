//подключение библиотек
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')

//подключение маршрутов
const authRoutes = require('./routes/auth.router')
const workshopRoutes = require('./routes/workshop.router')
const groupResource = require('./routes/group_resource.router')
const resource = require('./routes/resource.router')
const facility = require('./routes/facility.router')
const typeOfWork = require('./routes/type_of_work.router')
const request = require('./routes/request.router')
const consolidatedRequest = require('./routes/consolidated_request.router')

const app = express()

app.use(morgan('dev'))

//body-parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
//подключение cors (сразу в строке app.use)
app.use(require('cors')())

//маршруты
//маршрут авторизации
app.use('/api/auth', authRoutes)
//маршрут -> цех
app.use('/api/workshop', workshopRoutes)
//маршрут -> группа товаров
app.use('/api/groupResource', groupResource)
//маршрут -> товар (карточка товара)
app.use('/api/resource', resource)
//маршрут -> объект
app.use('/api/facility', facility)
//маршрут -> вид работ
app.use('/api/typeOfWork', typeOfWork)
//маршрут -> заявка
app.use('/api/request', request)
//маршрут -> сводная заявка
app.use('/api/consolidated', consolidatedRequest)




module.exports = app