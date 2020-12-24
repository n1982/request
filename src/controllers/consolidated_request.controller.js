//получение сводной заявки
module.exports.getAll = function (req, res) {
    res.status(200).json({
        getAll: 'GetAll from controller consolidated'
    })
}
module.exports.getById = function (req, res) {
    res.status(200).json({
        getAll: 'GetAll from controller'
    })
}
