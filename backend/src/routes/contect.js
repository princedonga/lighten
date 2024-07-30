const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    auth: {
        user: 'princedonga41@gmail.com',
        pass: 'nyqnrzcjrzxjfjok',
    },
});


router.post('/',async (req, res) => {
    const { name, email, phone, message } = req.body;


    const newMessage =  Message({ name, email, phone, message });
    await newMessage.save();


    const mailOptions = {
        from: `${email}`,
        to: 'princedonga41@gmail.com', 
        subject: 'New Contact Form Message',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Message sent successfully' });
    });
});

module.exports = router