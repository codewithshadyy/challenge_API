

const dotenv = require("dotenv")
const express = require('express')
const mongoose = require('mongoose')
dotenv.config()
const PORT = process.env.PORT

const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err))

app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/books', require('./routes/bookRoutes'))

app.listen(PORT, () => console.log(`server running on ${PORT}`));