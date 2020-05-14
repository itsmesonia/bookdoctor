const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const Schema = mongoose.Schema


const appointmentSchema = new Schema({
  date: { type: String, required: true },
  reason: { type: String, required: true }
})


appointmentSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Appointment', appointmentSchema)