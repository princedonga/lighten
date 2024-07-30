const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect("mongodb+srv://princedonga41:oXfz1LR7sA1tKxXk@cluster0.wwebhwh.mongodb.net/")
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const productsRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const checkoutRoutes = require("./routes/checkout")
const contectRoutes = require('./routes/contect')
const authRoutes = require('./routes/auth')

app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/contact',contectRoutes)
app.use('/api', checkoutRoutes);
app.use('/api/auth', authRoutes);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

