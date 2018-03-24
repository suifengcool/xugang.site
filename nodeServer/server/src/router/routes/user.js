const UserController = require('../../controller/user')

module.exports = router => {
    router.post('/user/register', UserController.register)
    router.post('/user/check_account', UserController.registerCheckAccount)
    router.post('/user/check_email', UserController.registerCheckEmail)
    router.post('/user/login', UserController.login)
}