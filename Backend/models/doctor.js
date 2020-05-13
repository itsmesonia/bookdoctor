const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const doctorSchema = new mongoose.Model({
  name: String,
  image: String,
  expertise: String,
  gp: String
})

doctorSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Doctor', doctorSchema)