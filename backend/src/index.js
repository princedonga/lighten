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
const adminRoutes = require('./routes/admin')

const coupons = {
    'FIRST': 10,
    'USE20SBI': 15,
    'DISCOUNT30': 30,
};

// Endpoint to apply discount
app.post('/api/cart/apply-discount', (req, res) => {
    const { code } = req.body;
    const discountAmount = coupons[code.toUpperCase()];
    
    if (discountAmount) {
        return res.status(200).json({ discountAmount });
    } else {
        return res.status(400).json({ message: 'Invalid discount code' });
    }
});


app.use('/api/products', productsRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/contact',contectRoutes)
app.use('/api', checkoutRoutes);
app.use('/api/aut h', authRoutes);
app.use('/api/admin',adminRoutes)
app.use('/uploads', express.static('uploads'));


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

