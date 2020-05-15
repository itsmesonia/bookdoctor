const History = require('../models/history')


function create(req, res) {
  req.body.user = req.currentUser
  History.create(req.body)
    .then(history => {
      return res.status(201).json(history)
    })
    .catch(err => res.json(err))
}



module.exports = {
  create
}