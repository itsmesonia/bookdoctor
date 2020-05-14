const router = require('express').Router()

const userControl = require('./lib/userContorl')
const secureRoute = require('./lib/secureRoute')
const userFunc = require('./controllers/userFunc')
const doctorFunc = require('./controllers/doctorFunc')
const appointmentFunc =  require('./controllers/appointmentFunc')


// ************************ doctors ************************

router.route('/doctors')
  .get(doctorFunc.index)

router.route('/doctors/:id')
  .get(doctorFunc.show)

  

// ************************ appointments? ************************
router.route('/appointment')
  .post(secureRoute, userControl('patient'), appointmentFunc.create)
  .get(appointmentFunc.index)




// ************************ user ************************
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)


router.route('/user/:id')
  .get(userFunc.showUser)



// ************************ dashboard ************************

//router.route('/dashboard/:userId')
// .get(secureRoute, userFunc.prescription)
//.put(secureRoute, userFunc.updateprescription)



module.exports = router