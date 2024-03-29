import express from 'express'
import cors from 'cors'
const app = express()
import mainRouter from './backend/routes/index'


app.use(cors())
app.use(express.json())

app.use('/api/v1',mainRouter)



app.get('/',(req,res)=>{
    res.json({
        message:" Working"
    })
})


app.listen('3000',()=>{
    console.log("Server started")
})