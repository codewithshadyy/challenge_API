const express = require("express")
const Booking = require("../models/booking.js")
const booking = require("../models/booking.js")

const router = express.Router()


router.post("/", async(req, res) => {
    try{
        const booking = await Booking.create(req.body)
        res.status(201).json(booking)
    }
    catch(err){
        res.status(400).json("Error:", err.message)
    }
    
})


router.get("/", async (req, res) => {

    try{
        const bookings = await Booking.find()
        res.json(bookings)
    }catch(err){
        res.status(404).json('Error:', err.message)
    }
    
})



router.get("/:id", async (req,res) => {
    try{
        const booking = await Booking.findById(req.params.id)
           res.json(booking)
    }catch(err){
        res.status(404).json("Error:", err.message)
    }
})

router.put("/:id", async (req,res) => {
   try{
     const updateBooking = await Booking.findBYIdAndUpdate(req.params.id, req.body,{new:true})
    res.json(updateBooking)
    
   }catch(err){
    res.status(400).json("Error:", err.message)
   }
})

router.delete("/:id", async (req, res) => {
    try{
        await Booking.findByIdAndDelete(req.params.body)
        res.json({message:"booking deleted successfully"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
    
})




module.exports = router

