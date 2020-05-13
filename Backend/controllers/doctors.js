const doctor = require('../models/doctor.js')

function indexRoute(req, res, next) {
  Doctor
    .find()
    .exec()
    .then(doctors => res.json(doctors))
    .catch(next)
}

module.exports = {
  index: indexRoute
}