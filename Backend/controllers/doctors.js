// Controllers contain all our 'handler logic' for our routes. So their
// job is essentially to use our models to perform CRUD operations
// (create, read, update, delete), and then send an appropriate response
// back to the client

const doctor = require('../models/doctor')

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