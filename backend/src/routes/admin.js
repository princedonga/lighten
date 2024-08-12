const express = require('express');
const router = express.Router();
const Admin = require('../models/admin');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register a new user
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, mobile, gender } = req.body;
        const user =  Admin({ name, email, password, mobile, gender });
        await user.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(400).json({ error: 'Error registering user' });
    }
});

// Login a user
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await Admin.findOne({ email });
        if (!user) return res.status(400).json({ error: 'Invalid email or password' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid email or password' });

        const token = jwt.sign({ userId: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.json({ token, userId: user._id });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Get all users
router.get('/user', async (req, res) => {
    try {
        const users = await Admin.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Delete a user
router.delete('/user/:id', async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        res.json({ message: 'User deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
