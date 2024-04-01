import mongoose from "mongoose";
import { string } from "zod";

mongoose.connect('mongodb+srv://punyakritsinghmakhni:2002%40Anoop@cluster0.8ok11ce.mongodb.net/lpg-mern-project');

const NewsLetterSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    }
})

export const newsLetterEntry = mongoose.model('News-Letter-Emails', NewsLetterSchema)

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
    },
    email:{
        type:String,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    phoneNo:{
        type: String,
        require: true,
        length:10
    },
    password:{
        type:String,
        require: true
    },
    verified:{
        type: Boolean,
        require: false,
        default: false
    },
    admin:{
        type: Boolean,
        require: false,
        default: false
    }
})

export const User = mongoose.model('User',UserSchema)


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


module.exports = { newsLetterEntry , User, Otp};

