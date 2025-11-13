
const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

// signing up
router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body

        // Check if user exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" })
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10)

        // Creating  new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({ message: "New user successfully created" })

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
})

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        // Check user exist
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" })
        }

        // Generate JWT
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET || "kip26",
            { expiresIn: "1h" }
        )

        res.json({ message: "Logged in successfully", token })

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message })
    }
})

module.exports = router
