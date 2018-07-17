const checkAuth = require('../middlewares/check-auth');
const Router = require('koa-router');
const usersControllers = require('../controllers/user.controllers')
const router = new Router();

// login
router.post('/login', usersControllers.login);

// update
router.put('/:userId', checkAuth, usersControllers.update);

// delete
router.delete('/:userId', checkAuth, usersControllers.delete);

module.exports = router;