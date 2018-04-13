const User = require('../models/User.js')
const Question = require('../models/Question.js')

module.exports = {

    index: (req, res) => {
        Question.find({}, (err, questions) => {
			res.json(questions)
		})
    },

    create: (req, res) => {
		 Question.create(req.body, (err, question) => {
            res.json({ success: true, message: "question created.", question})

        })
    },

    update: (req, res) => {
		Question.findById(req.params.id, (err, question) => {
			Object.assign(user, req.body)
			user.save((err, updatedQuestion) => {
				res.json({success: true, message: "Question updated.", question})
			})
		})
	},
			
	addAnswer: (req, res) => {
		Question.findById(req.params.id, (err, question) => {
		question.answers.push(req.body)
		question.save((err) => {
			res.json(question)
		})
		})
	},

    show: (req, res) => {
		console.log("Current Question:")
		console.log(req.question)
		Question.findById(req.params.id, (err, question) => {
			res.json(question)
		})
	},
    
	destroy: (req, res) => {
		Question.findByIdAndRemove(req.params.id, (err, question) => {
			res.json({success: true, message: "Question deleted.", })
		})
	}
}