const router = require('express').Router()

const userControl = require('./lib/userContorl')
const secureRoute = require('./lib/secureRoute')
const userFunc = require('./controllers/userFunc')
const appointmentFunc =  require('./controllers/appointmentFunc')


// ************************ doctors ************************

// router.route('/doctors')
//   .get(doctorFunc.index)

// router.route('/doctors/:id')
//   .get(doctorFunc.show)

  

// ************************ appointments? ************************
router.route('/appointment')
  .post(secureRoute, userControl('patient'), appointmentFunc.create)
  .get(appointmentFunc.index)

router.route('/appointment/:id')
  .get(appointmentFunc.show)




// ************************ user ************************
router.route('/register')
  .post(userFunc.register)


router.route('/login')
  .post(userFunc.login)

router.route('/user')
  .get(secureRoute, userFunc.index)


router.route('/user/:id')
  .get(secureRoute, userFunc.show)



// ************************ dashboard ************************

//router.route('/dashboard/:userId')
// .get(secureRoute, userFunc.prescription)
//.put(secureRoute, userFunc.updateprescription)



module.exports = router