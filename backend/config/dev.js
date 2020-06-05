const port = process.env.PORT || 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'book-doctor'
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://aichichang:bookDoctor2020@cluster369-aprqf.mongodb.net/book-doctor?retryWrites=true&w=majority'
const secret = 'This is my really secret string that nobody is going to be able to guess1'

module.exports = { 
  port, 
  dbURI, 
  secret
}
