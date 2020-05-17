const Appointment = require('../models/Appointment')
const User = require('../models/User')

function create(req, res) {
  // req.body.user = req.currentUser
  const appoint = Appointment.findOne({ date: req.body.date, doctor: req.body.doctor }).exec()
  appoint
    .then(function(appointmentItem) {
      if (!appointmentItem) {
        console.log('Appointment available')
        Appointment
          .create(req.body)
          .then(appointment => {
            return User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { appointment: appointment } }, { new: true })
          })
          // and push it to doctor's appointment as well
          .then(appointment => {
            return User.findOneAndUpdate({ username: req.body.doctor }, { $addToSet: { appointment: appointment } }, { new: true })
          })
          .then(appointment => {
            return res.status(200).json(appointment)
          })
          .catch(err => res.json(err))
      } else {
        console.log('has booked')
        return res.status(406).json({ message: 'This time is not available' })
      }
    })
    // .then(console.log('hoe to make this line await?'))
}



// function create(req, res) {
//   // req.body.user = req.currentUser
//   Appointment
//     .findOne({ date: req.body.date, doctor: req.body.doctor }, function(err, appointmentItem) {
//       if (err) {
//         console.log(err)
//         return false
//       }
//       if (!appointmentItem) {
//         console.log('No exsit appointment found')
//         Appointment
//           .create(req.body)
//           .then(appointment => {
//             return res.status(200).json(appointment)
//           })

//       } else {
//         console.log('This time is not available')
//         return res.status(500).json({ message: 'This time is not available' })
//       }
//       return true
//     })
//     // .then(appointment => {
//     //   return User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { appointment: appointment } }, { new: true })
//     // })
//     // // and push it to doctor's appointment as well
//     // .then(appointment => {
//     //   return User.findOneAndUpdate({ username: req.body.doctor }, { $addToSet: { appointment: appointment } }, { new: true })
//     // })
//     // .then(appointment => {
//     //   return res.status(201).json(appointment)
//     // })
//     // .catch(err => res.json(err))

// }

// function create(req, res) {
//   Appointment.create(req.body)
//     // If a appointment was created successfully, find one User with an `_id` equal to current user id. Update the User to be associated with the new appointment
//     // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//     .then(appointment => {
//       return User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { appointment: appointment } }, { new: true })
//     })
//     // and push it to doctor's appointment as well
//     .then(appointment => {
//       return User.findOneAndUpdate({ username: req.body.doctor }, { $addToSet: { appointment: appointment } }, { new: true })
//     })
//     .then(appointment => {
//       return res.status(201).json(appointment)
//     })
//     .catch(err => res.json(err))
// }


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