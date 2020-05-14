const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema


const doctorSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  expertise: { type: String, required: true },
  gp: { type: String, required: true },
  appointment: {
    type: Schema.Types.ObjectId,
    ref: 'Appointment'
  }
})


// appointmentSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Doctor', doctorSchema)