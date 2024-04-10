import express from 'express'
const route = express.Router()
import zod from 'zod'
import { authMiddleware } from '../middleware'
import { Order } from '../db'
route.get('/', (req, res) => {
    res.json({
        message: "Working"
    })
})


const shopSchema = zod.object({
    name: zod.string(),
    address: zod.string(),
    description: zod.string(),
    phoneno: zod.string(),
    product: zod.string(),
    quantity: zod.string(),
    amount: zod.string()
})

route.post('/create-prod', authMiddleware, async (req, res) => {
    const body = req.body
    // const { success } = shopSchema.safeParse(req.body)

    // if (!success) {
    //     return res.json({
    //         message: "Incorrect Values Entered"
    //     })
    // }

    try {
        console.log("reach")
        const product = await Order.create({
            userId: req.userId,
            name: body.name,
            address: body.address,
            description: body.description,
            phoneno: body.phoneno,
            product: body.product,
            quantity: body.quantity,
            amount: body.amount,
        })

        res.json({
            message: "Product Added",
            product
        })

    } catch (e) {
        console.log(e)
        res.json({
            message: "Server crashed",
            e
        })
    }

})

route.get('/fetch', authMiddleware, async (req, res) => {
    const user = req.userId
    try {
        const data = await Order.find({
            userId: req.userId
        })
        res.json({
            data
        })
    }
    catch {
        res.json("Server crashed")
    }
})

route.delete('/delete', authMiddleware, async (req, res) => {
    const orderId = req.body.orderId; // Get orderId from request body

    try {
        // Check if the order exists and belongs to the current user
        const order = await Order.findOneAndDelete({
            userId: req.userId
        });

        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }

        res.json({
            message: "Order deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server crashed"
        });
    }
});


export default route