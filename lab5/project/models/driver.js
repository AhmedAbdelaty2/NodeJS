const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const DriverSchema = new Schema({
  email: {
    type: String,
    required: "please enter your email"
  },
  fname: {
    type: String,
    required: "please enter your first name"
  },
  lname: {
    type: String,
    required: "please enter your last name"
  },
  phone:{
    type: Number,
    required: "please enter your phone number"
  }
})
// //
const Driver = mongoose.model('driver', DriverSchema);
module.exports = Driver;
