const History = require('../models/History')
const User = require('../models/User')

const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)




function create(req, res) {
  // this will put doctor(currenly loged in) as the user of this just created history into the objact
  // and we will push this history object into patient object
  req.body.user = req.currentUser
  History.create(req.body)
    .then(history => {
      // find the patient in db and push their history into their file
      return User.findOneAndUpdate({ username: req.body.patient }, { $push: { history: history } }, { new: true })
    })
    .then(history => {
      return res.status(201).json(history)
    })
    .catch(err => res.json(err))
}



function index(req, res) {
  History
    .find()
    .then(history => {
      return res.status(200).json(history)
    })
    .catch(err => res.json(err))
}


function show(req, res) {
  History
    .findById(req.params.id)
    // the user here is the doctor
    .populate('user')
    .then(history => {
      if (!history) res.status(404).json({ message: 'This history does not exist' })
      else res.status(200).json(history)
    })
    .catch(err =>res.json(err))
}


function patientHistory(req, res) {
  History
    .find({ patient: req.currentUser.username })
    .then(history => {
      return res.status(200).json(history)
    })
}



function remove(req, res) {
  History
    .findById(req.params.id)
    .then(history => {
      if (!history) return res.status(404).json({ message: 'Patient history not found' })
      return history.remove()
    })

  User
    .findOneAndUpdate({ history: req.params.id }, { $pull: { history: req.params.id } }, { new: true }).exec()
    .then(user => {
      return res.status(200).json(user)
    })
    .catch(err => res.json(err))
}



module.exports = {
  create,
  index,
  show,
  remove,
  patientHistory
}