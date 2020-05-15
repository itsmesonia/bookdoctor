const Appointment = require('../models/Appointment')
const User = require('../models/User')


// function create(req, res) {
//   req.body.user = req.currentUser
//   Appointment.create(req.body)
//     .then(user => {
//       return res.status(201).json(user)
//     })
//     .catch(err => res.json(err))
// }

function create(req, res) {
  Appointment.create(req.body)
    // If a appointment was created successfully, find one User with an `_id` equal to current user id. Update the User to be associated with the new appointment
    // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
    .then(appointment => {
      return User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { appointment: appointment._id } }, { new: true })
    })
    .then(appointment => {
      return res.status(201).json(appointment)
    })
    .catch(err => res.json(err))
}


function index(req, res) {
  Appointment
    .find()
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


function doctorAppointment(req, res) {
  Appointment
    .find({ doctor: req.currentUser.username })
    .then(appointment => {
      return res.status(200).json(appointment)
    })
}







module.exports = {
  create,
  index,
  show,
  doctorAppointment
}