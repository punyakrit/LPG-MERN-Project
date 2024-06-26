import mongoose from "mongoose";
import { string } from "zod";
require('dotenv').config();
// @ts-ignore
mongoose.connect(process.env.MONGODB_URI);

const NewsLetterSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    }
})

export const newsLetterEntry = mongoose.model('News-Letter-Emails', NewsLetterSchema)

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    phoneNo: {
        type: String,
        require: true,
        length: 10
    },
    password: {
        type: String,
        require: true
    },
    verified: {
        type: Boolean,
        require: false,
        default: false
    },
    admin: {
        type: Boolean,
        require: false,
        default: false
    },
    orders:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    }]
})

export const User = mongoose.model('User', UserSchema)


//  Create opt table generate random otp with ref to user id 

const otpSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    otp: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
});

export const Otp = mongoose.model('Otp', otpSchema);


const contactSchmae = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    text: {
        type: String,
    }
})


export const Contact = mongoose.model('contact', contactSchmae)

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
        required: true
    }
})

export const Order = mongoose.model('Orders',orderSchema)


module.exports = { newsLetterEntry, User, Otp, Contact, Order };

