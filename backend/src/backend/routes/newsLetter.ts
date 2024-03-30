import express from 'express'
import zod from 'zod'
const route = express.Router()
import { newsLetterEntry } from '../db'

route.get('/', (req, res) => {
    res.json({
        message: " Working"
    })
})
const emailSchema = zod.object({
    email: zod.string().email()
})
route.post('/', async (req, res) => {
    const body = req.body

    const { success } = emailSchema.safeParse(req.body)

    if (!success) {
       return res.json({
            message: "Error Occured Enter correct values"
        })
    }
    
    try {
        const exists = await newsLetterEntry.findOne({
            email: body.email
        })

        if (exists) {
            return res.json({
                message: "User already exists"
            })
        }

        await newsLetterEntry.create(body)

        res.json({
            message: "Successfully Signed Up for NewsLetter"
        })
    } catch (e) {
        res.json({
            message: e
        })
    }


})


export default route