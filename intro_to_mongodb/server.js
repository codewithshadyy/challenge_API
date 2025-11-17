


const express = require("express")
const mongoose = require("mongoose")
const BookingRoutes = require("./routes/bookings.js")
const  authRoutes = require("./routes/auth.js")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()
port = 4945


app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.get("//", async(req, res) => {
    res.sendFile(Path.join(__dirname+"/docs/index.html"))
})


mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.9")
.then(() => console.log("mongo connected succesfully"))
.catch(err=>console.log("error connecting to monngo:", err))

app.use("/api", BookingRoutes)
app.use("/api", authRoutes)



app.listen(port, ()=>{
    console.log(`app listening on:http://localhost:${port}`)
})

console.log(`http://localhost:${port}`);
