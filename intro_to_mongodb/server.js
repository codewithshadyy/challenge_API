



const express = require("express")
const mongoose = require("mongoose")
const BookingRoutes = require("./routes/bookings.js")
const  authRoutes = require("./routes/auth.js")

const app = express()
port = 4945


app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.9")
.then(() => console.log("mongo connected succesfully"))
.catch(err=>console.log("error connecting to monngo:", err))

app.use("/bookings", BookingRoutes)
app.use("/auth", authRoutes)
require("dotenv").config()


app.listen(port, ()=>{
    console.log(`app listening on:http://localhost:${port}`)
})

console.log(`http://localhost:${port}`);
