const express = require('express');
const router = express.Router();
const Pincode = require('../models/pincode')

app.get('/api/pincode/:pincode', async (req, res) => {
    try {
        const pincode = req.params.pincode;
        const data = await Pincode.findOne({ pincode });
        if (data) {
            res.json({ city: data.city });
        } else {
            res.status(404).json({ message: 'Pincode not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router