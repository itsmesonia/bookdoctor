const Appointment = require('../models/Appointment')
const User = require('../models/User')

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
              let promise1 = User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { appointment: appointment } }, { new: true })
              let promise2 = User.findOneAndUpdate({ username: req.body.doctor }, { $push: { appointment: appointment } }, { new: true })
              let result = await Promise.all([promise1, promise2])
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


function remove(req, res) {
  Appointment
    .findById(req.params.id)
    .then(appointment => {
      if (!appointment) return res.status(404).json({ message: 'appointment not found' })
      User
        .then(async appointment => {
          try {
            let promise1 = User.findById({ appointment: req.params._id })
            return res.status(200).json(appointment)
          } catch (err) {
            console.log(err)
          }
        })
      // return appointment.remove()
    })
    .then(() => res.status(200).json({ message: 'appointment removed' }))
    .catch(err => res.json(err))
}


function test(req, res) {
  User
    .find({ appointment: req.params.id })
    .then(user => {
      return res.status(200).json(user)
    })

}





module.exports = {
  create,
  index,
  show,
  doctorAppointment,
  remove,
  test
}