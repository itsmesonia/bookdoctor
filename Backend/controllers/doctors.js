const doctor = require('../models/doctor.js')

function indexRoute(res) {
  doctor
    .find()
    .exec()
    .populate('user')
    .then(doctors => res.status(200).json(doctors))
    .catch(err => console.log(err))
  // or err => res.json(err)
}

module.exports = {
  indexRoute
}