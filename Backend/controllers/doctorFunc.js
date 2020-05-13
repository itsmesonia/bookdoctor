const Doctor = require('../models/Doctor.js')

function index(req, res) {
  Doctor
    .find()
    // .exec()
    .populate('user')
    .then(doctors => res.status(200).json(doctors))
    .catch(err => console.log(err))
  // or err => res.json(err)
}

module.exports = {
  index
}