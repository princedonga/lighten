const mongoose = require('mongoose');

const PincodeSchema =  mongoose.Schema({
    pincode: String,
    city: String
});

const Pincode = mongoose.model('Pincode', PincodeSchema);
module.exports = Pincode