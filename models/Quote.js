
const mongoose = require("mongoose")

const quoteSchema = new mongoose.Schema({
    title : {
        type:String
    },

    author:{
        type:String,
        required:true
    },
    year:{
        type:Date,
        default:Date.now()
    }
})

const quote = mongoose.model("quote", quoteSchema)
module.exports = quote