const
    express = require('express'),
    questionsRouter = new express.Router(),
    questionsCtrl = require('../controllers/questions.js'),
    { verifyToken } = require('../serverAuth.js')


questionsRouter.get('/', questionsCtrl.index)
questionsRouter.post('/', questionsCtrl.create)




questionsRouter.use(verifyToken)


questionsRouter.get('/:id',questionsCtrl.show)
questionsRouter.patch('/:id', questionsCtrl.update)
questionsRouter.delete('/:id', questionsCtrl.destroy)




module.exports = questionsRouter 