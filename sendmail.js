require('dotenv').config()
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'aichi.p.chang@gmail.com',
  from: 'bookdoctorappointments@gmail.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>'
}
sgMail.send(msg)
  .then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
    // console.log(error.response.body.errors[0].message)
  })

// console.log(process.env.SENDGRID_API_KEY)