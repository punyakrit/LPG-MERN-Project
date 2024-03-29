import express from 'express'

const route = express.Router()

route.get('/',(req,res)=>{
    res.json({
        message:" Working"
    })
})

route.post('/')


export default route