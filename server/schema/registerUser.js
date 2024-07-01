const mongoose = require('mongoose');

const RegisteruserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  email: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

module.exports.RegisterUser = mongoose.model('RegisterUser', RegisteruserSchema);
