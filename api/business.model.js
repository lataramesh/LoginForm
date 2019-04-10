const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let studentSchema = new Schema({
  first_name: {
    type: String
  },
  middle_name: {
    type: String
  },
  last_name: {
    type: String
  },
  phone_number: {
    type: Number
  },
    email: {
    type: String
  },
    pwd: {
    type: String
  },
},{
    collection: 'students'
});

module.exports = mongoose.model('students', studentSchema);