
const express = require('express');
const router = express.Router();
const Checkout = require('../models/Checkout');

router.post('/checkout', async (req, res) => {
    const { name, email, phone, country, state, city } = req.body;
    const newCheckout =  Checkout({
        name,
        email,
        phone,
        country,
        state,
        city
    });

    try {
        await newCheckout.save();
        res.status(200).json({ message: 'Payment successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving data', error });
    }
});

module.exports = router;
