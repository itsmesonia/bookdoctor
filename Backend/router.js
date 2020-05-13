const router = require('express').Router()
const doctors = require('./controllers/doctors.js')

router.route('./controllers/doctors.js')
  .get(doctors.index)

module.exports = router