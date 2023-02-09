
const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');


router.post('/', (req, res) => {




    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'xyz@gmail.com',
            pass: '*************'
        }
    });

    let mailDetails = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.subject
    };

    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            return res.status(400).json({ msg: 'Mail Not Sent' })
        } else {
            return res.status(200).json({ msg: 'Mail Sent Successfully' })
        }
    });









});


module.exports = router;