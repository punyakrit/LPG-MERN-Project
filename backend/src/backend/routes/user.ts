import express from 'express'
import zod, { string } from 'zod'
const route = express.Router()
import { User } from '../db'
import jwt from 'jsonwebtoken'
import JWT_SECRET from '../config'
import { authMiddleware } from '../middleware'



//   create user
const userSchema = zod.object({
    username: zod.string(),
    email: zod.string().email(),
    name: zod.string(),
    phoneNo: zod.number(),
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

        const token = jwt.sign({ userId: user._id }, JWT_SECRET);

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



route.get('/auth', authMiddleware , async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.userId
        });

        res.json({
            user: user // Assuming you want to send user data back
        });

    } catch (e) {
        res.json({
            message: e // Sending error message back
        });
    }
});






export default route