import  express  from "express";
const route = express.Router()
import zod from 'zod'
import { Contact } from '../db'
route.get('/',(req,res)=>{
    res.json({
        message:'working'
    })
})


const conatctSchema = zod.object({
    name: zod.string(),
    email: zod.string().email(),
    text: zod.string()
})

route.post('/',async(req,res)=>{
    const body = req.body

    const {success} = conatctSchema.safeParse(req.body)

    if(!success){
        return res.json({
            message:"Enter complete details"
        })
    }
    try{

        const form = await Contact.create({
            name :body.name,
            email: body.email,
            text: body.text
        })

        res.json({
            message: "Form Submitted",
            form

        })
    }catch{
        res.json({
            message: "Error occured"
        })
    }

})




export default route