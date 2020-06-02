const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'book-doctor'
const dbURI = `${dbURIPrefix}${dbName}`
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/bookdoctor'
// our secret used for encoding our JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'This is my really secret string that nobody is going to be able to guess1'

module.exports = { 
  port, 
  dbURI, 
  secret
}