const Appointment = require('../models/Appointment')
const User = require('../models/User')


function create(req, res) {
  req.body.user = req.currentUser
  Appointment.create(req.body)
    .then(user => {
      return res.status(201).json(user)
    })
    .catch(err => res.json(err))
}

function index(req, res) {
  Appointment
    .find()
    // .populate('user')
    .then(appointment => res.status(200).json(appointment))
    .catch(err => res.json(err))
}

function show(req, res) {
  Appointment
    .findById(req.params.id)
    .populate('user')
    .then(appointment => {
      if (!appointment) res.status(404).json({ message: 'appointment not found' })
      else res.status(200).json(appointment)
    })
    .catch(err => res.json(err))
}






module.exports = {
  create,
  index,
  show
}