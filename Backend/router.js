const router = require('express').Router()

const userControl = require('./lib/userControl')
const secureRoute = require('./lib/secureRoute')
const userFunc = require('./controllers/userFunc')
const appointmentFunc =  require('./controllers/appointmentFunc')
const historyFunc = require('./controllers/historyFunc')




// ************************ appointments ************************
router.route('/appointment')
  .post(secureRoute, userControl('patient'), appointmentFunc.create)
  .get(secureRoute, appointmentFunc.index)


router.route('/appointment/doc/:id')
  .get(secureRoute, appointmentFunc.doctorAppointment)


router.route('/appointment/:id')
  .delete(secureRoute, appointmentFunc.remove)
  .get(secureRoute, appointmentFunc.show)




// ************************ history ************************
router.route('/history')
  .post(secureRoute, userControl('doctor'), historyFunc.create)
  .get(secureRoute, historyFunc.index)


router.route('/history/patient')
  .get(secureRoute, userControl('patient'), historyFunc.patientHistory)

router.route('/history/:id')
  .get(secureRoute, historyFunc.show)
  .delete(secureRoute, userControl('doctor'), historyFunc.remove)



// ************************ user ************************
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)


router.route('/user')
  .get(secureRoute, userFunc.index)


router.route('/user/:id')
  .get(secureRoute, userFunc.show)
  




module.exports = router