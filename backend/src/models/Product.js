const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    price: Number,
    image01: String,
    desc: String
});

module.exports = mongoose.model('Product', productSchema);
