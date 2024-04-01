import express from 'express'
import zod, { string } from 'zod'
const route = express.Router()
import { User, Otp } from '../db'
import jwt from 'jsonwebtoken'
import JWT_SECRET from '../config'
import { authMiddleware } from '../middleware'
import nodemailer from 'nodemailer'


var transporter = nodemailer.createTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure:false,
    auth: {
        user: 'mail.sender.lpu@gmail.com',
        pass: 'vwrmktsodduhkhkm'
    }
});

//   create user
const userSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    name: zod.string(),
    phoneNo: zod.string(),
    password: zod.string().min(6)
})
route.post('/signup', async (req, res) => {
    const body = req.body

    const { success } = userSchema.safeParse(req.body)
    if (!success) {
        return res.json({
            message: "Error Occured Enter correct values"
        })
    }
    try {

        const userExists = await User.findOne({
            email: body.email
        })

        if (userExists) {
            return res.json({
                message: "User Already Exists"
            })
        }

        const user = await User.create(body)

        const otp = Math.floor(1000 + Math.random() * 9000);
        await Otp.create({
            userId: user._id,
            otp
        })

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

        const mailOptions = {
            from: '"LPG Automation PVT "<lpg-auth@gmail.com>',
            to: body.email,
            subject: 'Your OTP for Signup',
            text: `Enter Your OTP for authentication is: ${otp}`
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Error sending email:", error);
            } else {
                console.log("Email sent:", info.response);
            }
        });

        res.json({
            message: "User Created",
            user,
            token
        })



    } catch (e) {
        console.log(e)
        res.json({
            message: e,
        })
    }
})

// Login Schema
const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})
// Login Route
route.post('/signin', async (req, res) => {
    const body = req.body

    const { success } = loginSchema.safeParse(req.body)
    if(!success){
        return res.json({
            message:"Enter correct Input values"
        })
    }

    try{

        const user = await User.findOne({
            email: body.email,
            password: body.password
        })

        if(!user){
            return res.json({
                message: "Enter Correct User Credentials"
            }) 
        }
        
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

        res.json({
            message: "Login Successful",
            token
        })

    }catch{
        message: "Server crashed"
    }
})




route.get('/auth', authMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.userId
        });

        res.json({
            user: user
        });

    } catch (e) {
        res.json({
            message: e
        });
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

        const alreadyVrified = await User. findOne({
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