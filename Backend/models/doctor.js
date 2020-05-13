const mongoose = require('mongoose')
const doctorSchema = new mongoose.Model({
  name: String,
  image: String,
  expertise: [ String ],
  gp: String
})

module.exports = mongoose.model('Doctor', doctorSchema)