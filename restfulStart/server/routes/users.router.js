const Router = require('koa-router');
const UsersControllers = require('../controllers/users.controller');

const router = new Router();

// GET /user/
router.get('/user',UsersControllers.find);

// POST /user
router.post('/user/', UsersControllers.add);

// GET /user/id
router.get('/user/:id', UsersControllers.findById);

// PUT /user/id
router.put('/user/:id', UsersControllers.update);

// DELETE /user/id
router.delete('/user/:id', UsersControllers.delete);

module.exports = router;