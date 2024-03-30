import express from 'express'
const route = express.Router()
import NewsRouter from './newsLetter' 
import UserRouter from './user'

route.use('/newsletter',NewsRouter)
route.use('/user', UserRouter)

export default route;