const userController = require('../controller/user');
module.exports = function (app, router) {
    router.post('/', userController.addUser);
    router.get('/:id', userController.getUser);
    router.put('/:id', userController.editUser);
    router.delete('/:id', userController.deleteUser);
    router.post('/all', userController.getAllUsers);

    app.use('/users', router);
}