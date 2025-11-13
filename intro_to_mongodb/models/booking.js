


const mongoose = require("mongoose")


const BookingSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },

    room:{
        type:Number
    },
    Ingia:{
        type:Date
    },
    Toka:{
        type:String
    },
   

  
    

    createdAt:{
        type:Date,
        default:Date.now()
    }
    
})

const booking = mongoose.model("booking", BookingSchema)

module.exports = booking




//with this model one can now do the following


// booking.find();
// booking.create({ name: "kipkoech", email: "kipkoech@gmail.com" });
// booking.findByIdAndUpdate(id, { name: "shadrack" });
// booking.findByIdAndDelete(id);
