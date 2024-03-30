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
        type:Number,
        require: true,
        length:10
    },
    password:{
        type:String,
        require: true
    }
})

export const User = mongoose.model('User',UserSchema)

module.exports = { newsLetterEntry , User};

