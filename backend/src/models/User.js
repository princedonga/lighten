const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  photo: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);
