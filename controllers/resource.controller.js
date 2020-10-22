//Управление данными о ТМЦ
module.exports.getAll = function (req, res) {
    res.status(200).json({
        getAll: 'GetAll from controller resource'
    })
}

module.exports.getById = function (req, res) {
    res.status(200).json({
        login: 'GetById from controller'
    })
}

module.exports.create = function (req, res) {
    res.status(200).json({
        login: 'create from controller'
    })
}

module.exports.update = function (req, res) {
    res.status(200).json({
        login: 'update from controller'
    })
}

module.exports.remove = function (req, res) {
    res.status(200).json({
        login: 'remove from controller'
    })
}