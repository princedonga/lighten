// models/Message.js
const mongoose = require('mongoose');

const messageSchema =  mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  message: { type: String, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
