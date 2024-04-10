import express from 'express'
const route = express.Router()
import NewsRouter from './newsLetter'
import UserRouter from './user'
import contactRoute from './Contact'
import ping from './ping'
import otpRoute from './otp'
import shopRoute from './shop'

route.use('/newsletter', NewsRouter)
route.use('/user', UserRouter)
route.use('/contact', contactRoute)
route.use('/otp', otpRoute)
route.use('/shop',shopRoute)
route.use('/', ping)

export default route;