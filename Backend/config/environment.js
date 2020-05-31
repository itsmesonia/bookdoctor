const port = 8000
const dbURIPrefix = 'mongodb://localhost/'
const dbName = 'book-doctor'
const dbURI = `${dbURIPrefix}${dbName}`
// const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/bookdoctor'
// our secret used for encoding our JWT tokens, used in '/controllers/user' and '/lib/secureRoute'
const secret = 'This is my really secret string that nobody is going to be able to guess1'
const ASENDGRID_API_KEY = 'SG.hsgqwSSpSs2s918-mHXsaA.EUG9ZUxTgtZXZudNOZT8nta2XqaOQsF17QOmoX8GJtU'

module.exports = { 
  port, 
  dbURI, 
  secret,
  ASENDGRID_API_KEY 
}