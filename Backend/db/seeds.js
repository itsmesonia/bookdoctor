const mongoose = require('mongoose')
//mongoose.Promise = require('bluebird')
const { dbURI } = require('../config/environment')
const User = require('../models/user')

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase()
    .then(() => {
      return User.create([{
        username: 'doctor1',
        email: 'doctor1@gmail.com',
        password: 'doctor1',
        passwordConfirmation: 'doctor1',
        role: 'doctor',
        expertise: 'Everything',
        clinic: 'London',
        appointment: [],
        history: []
      }, {
        username: 'doctor2',
        email: 'doctor2@gmail.com',
        password: 'doctor2',
        passwordConfirmation: 'doctor2',
        role: 'doctor',
        expertise: 'Everything',
        clinic: 'London',
        appointment: [],
        history: []
      }, {
        username: 'doctor3',
        email: 'doctor3@gmail.com',
        password: 'doctor3',
        passwordConfirmation: 'doctor3',
        role: 'doctor',
        expertise: 'Everything',
        clinic: 'London',
        appointment: [],
        history: []
      }, {
        username: 'doctor4',
        email: 'doctor4@gmail.com',
        password: 'doctor4',
        passwordConfirmation: 'doctor4',
        role: 'doctor',
        expertise: 'Everything',
        clinic: 'London',
        appointment: [],
        history: []
      }, {
        username: 'doctor5',
        email: 'doctor5@gmail.com',
        password: 'doctor5',
        passwordConfirmation: 'doctor5',
        role: 'doctor',
        expertise: 'Everything',
        clinic: 'London',
        appointment: [],
        history: []
      }
      ])
    })

  
    .then(doctors => console.log(`${doctors.length} doctors created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close())
})