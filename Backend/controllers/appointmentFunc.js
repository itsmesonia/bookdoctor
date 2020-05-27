const Appointment = require('../models/Appointment')
const User = require('../models/User')

const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)



function create(req, res) {
  req.body.user = req.currentUser
  const appoint = Appointment.findOne({ date: req.body.date, doctor: req.body.doctor }).exec()
  appoint
    .then(function(appointmentItem) {
      if (!appointmentItem) {
        console.log('Appointment available')
        Appointment
          .create(req.body)
          .then(async function(appointment) {
            try {
              const promise1 = User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { appointment: appointment } }, { new: true })
              const promise2 = User.findOneAndUpdate({ username: req.body.doctor }, { $push: { appointment: appointment } }, { new: true })
              const result = await Promise.all([promise1, promise2])
              return res.status(200).json(appointment)
            } catch (err) {
              console.log(err)
            }
          })
          // That particular error occurs whenever you try to send more than one response to the same request and is usually caused by improper asynchronous code.
          // .then(appointment => {
          //   return res.status(200).json(appointment)
          // })
          .catch(err => res.json(err))
      } else {
        console.log('Time not available')
        return res.status(406).json({ message: 'This time is not available' })
      }
    })
}



function index(req, res) {
  Appointment
  // this will restrict user to only see their own appointments
    .find({ user: { _id: req.currentUser._id } })
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
    .find({ doctor: req.params.name })
    .then(appointment => {
      return res.status(200).json(appointment)
    })
}


// function remove(req, res) {
//   Appointment
//     .findById(req.params.id)
//     .then(appointment => {
//       if (!appointment) return res.status(404).json({ message: 'appointment not found' })
//       return appointment.remove()
//     })
//     .then(() => res.status(200).json({ message: 'appointment removed' }))
//     .catch(err => res.json(err))
// }


function remove(req, res) {
  Appointment
    .findById(req.params.id)
    .then(appointment => {
      if (!appointment) return res.status(404).json({ message: 'appointment not found' })
      return appointment.remove()
    })

  const allUser = User.find({ appointment: req.params.id }).exec()
  allUser
    .then(async user => {
      if (!user) return res.status(404).json({ message: 'Appointment does not exist, cannot be deleted' })
      try {
        const promise1 = User.findOneAndUpdate({ appointment: req.params.id, role: 'doctor' }, { $pull: { appointment: req.params.id } }, { new: true })
        const promise2 = User.findOneAndUpdate({ appointment: req.params.id, role: 'patient' }, { $pull: { appointment: req.params.id } }, { new: true })
        const result = await Promise.all([promise1, promise2])
        return res.status(200).json({ message: 'Appointment deleted!' })
      } catch (err) {
        console.log(err)
      }
    })

}





module.exports = {
  create,
  index,
  show,
  doctorAppointment,
  remove
}