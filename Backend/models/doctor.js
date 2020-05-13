const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const appointmentSchema = new mongoose.Schema({
  date: { type: String, unique: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})


const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  expertise: { type: String, required: true },
  gp: { type: String, required: true },
  appointments: [ appointmentSchema ]
})


appointmentSchema.plugin(uniqueValidator)


module.exports = mongoose.model('Doctor', doctorSchema)