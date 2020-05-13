const mongoose = require('mongoose')
const uniqueValidatior = require('mongoose-unique-validator')

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  expertise: { type: String, required: true },

  gp: { type: String, required: true }
})

// doctorSchema.plugin(uniqueValidatior)

module.exports = mongoose.model('Doctor', doctorSchema)