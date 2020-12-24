//Вход
module.exports.login = function (req, res) {
    res.status(200).json({
        login: {
            email: req.body.email,
            password: req.body.password
        }
    })
}


// Регистрация
module.exports.register = function (req, res) {
    res.status(200).json({
        login: 'register from controller'
    })
}