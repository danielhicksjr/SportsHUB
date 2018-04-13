const
	express = require('express'),
	usersRouter = new express.Router(),
	usersCtrl = require('../controllers/users.js'),
	verifyToken = require('../serverAuth.js').verifyToken


usersRouter.route('/')
	.get(usersCtrl.index)
	.post(usersCtrl.create)

usersRouter.post('/authenticate', usersCtrl.authenticate)


usersRouter.use(verifyToken)

usersRouter.patch('/me', usersCtrl.update)
usersRouter.delete('/me', usersCtrl.destroy)

usersRouter.route('/:id')
	.get(usersCtrl.show)
	

module.exports = usersRouter