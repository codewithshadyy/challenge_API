const Quote = require("../models/Quote.js")
const mongoose = require("mongoose")
const express = require("express")

const router = express.Router()


router.post("/quotes", async (req, res) => {

    try {
        const quote = await Quote.create(req.params)
        res.status(201).json(quote)
        
    } catch (error) {
        res.status(500).json(error)
        
    }

    
})

module.exports = router