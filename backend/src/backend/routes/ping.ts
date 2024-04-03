import express from 'express'
const route = express.Router()

route.get('/',(req,res)=>{
    res.json({
        message: "Pinging"
    })
})


export default route