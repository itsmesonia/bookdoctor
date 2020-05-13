const Doctor = require('../models/Doctor.js')



function index(req, res) {
  Doctor
    .find()
    // .exec()
    .populate('user')
    .then(doctors => res.status(200).json(doctors))
    .catch(err => res.json(err))
}

function show(req, res) {
  Doctor
    .findById(req.params.id)
    .then(doctor => {
      if (!doctor) res.status(404).json({ message: 'Doctor does not exist in this GP' })
      else res.status(200).json(doctor)
    })
    .catch(err => res.json(err))
}




module.exports = {
  index,
  show
}