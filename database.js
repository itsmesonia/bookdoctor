const mongoose = require('mongoose')
const connection = 'mongodb+srv://aichichang:bookDoctor2020@cluster369-aprqf.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => console.log('Database Connected Successfully'))
  .catch(err => console.log(err))