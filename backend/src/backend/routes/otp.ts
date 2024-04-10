import express from 'express'
const route = express.Router()
import nodemailer from 'nodemailer'
import { authMiddleware } from '../middleware';
import { Otp, User } from '../db';
require('dotenv').config();

var transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }
});

route.post('/verify-otp', authMiddleware, async (req, res) => {
    const body = req.body

    try {
        const otpEntry = await Otp.findOne({
            userId: req.userId,
            otp: body.otp
        })

        if (!otpEntry) {
            return res.json("Invalid Otp")
        }

        const alreadyVrified = await User.findOne({
            _id: req.userId,
            verified: true
        })

        if(alreadyVrified){
            return res.json({
                message:"User is already verified"
            })
        }

        await User.findOneAndUpdate({
            _id: req.userId
        }, {
            verified: true
        })

        res.json({
            message: "Opt Verified Successful"
        })

    } catch (e) {
        res.json({
            message: "Server crashed in otp",
            e
        })
    }
})

//  sending otp
route.get('/send-otp', authMiddleware, async (req, res) => {
    try {
      const otp = await Otp.findOne({ userId: req.userId });
      const user = await User.findOne({ _id: req.userId });
  
      if (!otp || !user) {
        return res.status(404).json({ message: 'User or OTP not found' });
      }
  
      const email = user.email;
      const otpValue = otp.otp;
  
      if (!email) {
        return res.status(400).json({ message: 'Email address is missing' });
      }
  
      console.log(otpValue);
  
      const mailOptions = {
        from: '"LPG Automation PVT "<lpg-auth@gmail.com>',
        to: email,
        subject: 'Your OTP for Signup',
        text: `Enter Your OTP for authentication is: ${otpValue}`,
      };
  
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("Error sending email:", error);
          return res.status(500).json({ message: 'Failed to send email' });
        } else {
          console.log("Email sent:", info.response);
          return res.json({ message: "Email Sent!!" });
        }
      });
    } catch (error) {
      console.error("Error:", error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });


export default route