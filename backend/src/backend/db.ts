import mongoose from "mongoose";

mongoose.connect('mongodb+srv://punyakritsinghmakhni:2002%40Anoop@cluster0.8ok11ce.mongodb.net/lpg-mern-project');

const NewsLetterSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true
    }
})

const newsLetterEntry = mongoose.model('News-Letter-Emails', NewsLetterSchema)


module.exports = {newsLetterEntry}

