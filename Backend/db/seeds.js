const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const Doctor = require('../models/doctor')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()

  Doctor.create([{
    name: 'Aichi test',
    image: 'https://www.tradefinanceglobal.com/wp-content/uploads/2018/09/unicorn-20072661280.jpg',
    expertise: 'Everything bitch',
    gp: 'Miltonkeynes'
  }, {
    name: 'Denisa test',
    image: 'https://www.tradefinanceglobal.com/wp-content/uploads/2018/09/unicorn-20072661280.jpg',
    expertise: 'Everything bitch',
    gp: 'Miltonkeynes'

  }])
    .then(doctors => console.log(`${doctors.length} doctors created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})