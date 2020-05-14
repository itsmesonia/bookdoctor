const Appointment = require('../models/appointment')



function create(req, res) {
  req.body.user = req.currentUser
  Appointment.create(req.body)
    .then(appointment => res.status(201).json(appointment))
    .catch(err => res.json(err))
}

function index(req, res) {
  Appointment
    .find()
    .populate('user')
    .then(appointment => res.status(200).json(appointment))
    .catch(err => res.json(err))
}

// function userGetAppointment(req, res) {
//   Appointment
//     .findbyId()
// }





module.exports = {
  create,
  index
}