const History = require('../models/History')
const User = require('../models/User')


// function create(req, res) {
//   req.body.user = req.currentUser
//   History.create(req.body)
//     .then(history => {
//       return res.status(201).json(history)
//     })
//     .catch(err => res.json(err))
// }


function create(req, res) {
  History.create(req.body)
    .then(history => {
      return User.findOneAndUpdate({ _id: req.currentUser._id }, { $push: { history: history._id } }, { new: true })
    })
    .then(history => {
      return res.status(201).json(history)
    })
    .catch(err => res.json(err))
}


module.exports = {
  create
}