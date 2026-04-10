const dotenv = require("dotenv")
const express = require("express")
const app = express()
PORT = 4545
cors = require("cors")
const quotesRoutes = require("./routes/quoteRoute")
const mongoose = require("mongoose")

dotenv.config()


// app.use(cors({
//     origins:["https://github.com"],
//     methods: ["POST"],
//     Credentials : true
// }))



app.use(express.json())
mongoose.connect(process.env.MONGO_URI || "mongodb+srv://shadrack26th_db_user:05aRpT8iZZNIWPJK@cluster0.o6zuaen.mongodb.net/?retryWrites=true&w=majority", {
    serverSelectionTimeoutMS:5000
})
.then(() => console.log("mongodb connected successfukky"))
.catch(err => console.log(err.message))


app.use("/api", quotesRoutes)
// const users = [
//     {id:1, name:"layla", email:"layla@gmail.com"},
//     {id:2, name:"kipkoech", email:"kipkoech10@gmail.com"}


// ]

// app.get("/users", (req, res)=>{
//     res.status(200).json(users)
// })

// app.post("/users", (res, req) => {
//     newuser = {
//         id: users.length + 1,
//         name:"coredy",
//         email:"coredy@gmail.com"
//     }

//     users.push(newuser)
//     res.status(201).json(newuser)
// })

// app.put("/users/:id", (req, res)=>{
//     const user = users.find(u => u.id === parseInt(req.params.id))
//     if (!user){
//         res.status(404).json({"message":"user not found"})
//     }

//     user.name = req.body.name
//     user.email = req.body.email

//     res.json(user)
// })

// app.delete("/users/:id", (req,res)=>{
//     const userIndex = users.findIndex(u => u.id === parseInt(req.paraams.id))

//     if(userIndex===-1) return res.status(404).json({"mesage":"user id invallid"})
    
//         const deletedUser = users.splice(userIndex, 1)
//       res.json(deletedUser[0])
    

// })

app.listen(process.env.PORT, ()=>{console.log(`server live on :http://localhost:${process.env.PORT}`)})


