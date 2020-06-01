require('dotenv').config()
const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: `${email}`,
  from: 'bookdoctorappointments@gmail.com',
  subject: 'Your Appointment is Booked!',
  text: '',
  html: `Hello ${user},
  Your appointment is at ${time}, ${date} with ${doctor}.
  To cancel it, please call your GP 48hrs before the appointment.
  <hr />
  Thank you,
  Bookdoctor.com`
}

sgMail.send(msg)
  .then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
  })

