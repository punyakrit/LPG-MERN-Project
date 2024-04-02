import express from 'express'
const route = express.Router()
import NewsRouter from './newsLetter' 
import UserRouter from './user'
import contactRoute from './Contact'
route.use('/newsletter',NewsRouter)
route.use('/user', UserRouter)
route.use('/contact',contactRoute)

export default route;