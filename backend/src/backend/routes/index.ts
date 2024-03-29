import express from 'express'
const route = express.Router()
import NewsRouter from './newsLetter' 


route.use('/newsletter',NewsRouter)


export default route;