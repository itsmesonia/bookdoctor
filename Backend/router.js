const router = require('express').Router()

const secureRoute = require('./lib/secureRoute')
const userFunc = require('./controllers/userFunc')
const doctors = require('./controllers/doctors')


// ************************ doctors ************************

router.route('/doctors')
  .get(secureRoute, doctors.indexRoute)

router.route('/doctorcalendar/:id')
  //.get(secureRoute, doctors.indexRoute)
  //appointment requests
  .put(secureRoute, doctors.update)
  .delete(secureRoute, doctors.remove)

// ************************ appointments? ************************



// ************************ user ************************
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)



// ************************ dashboard ************************

//router.route('/dashboard/:userId')
// .get(secureRoute, userFunc.prescription)
//.put(secureRoute, userFunc.updateprescription)



module.exports = router