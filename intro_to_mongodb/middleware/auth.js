

const jwt = require("jsonwebtoken");


const auth = (req,res, next) => {
    try {


    const token = req.header("Authorization")?.replace("Bearer", "")

    if(!token){
        return res.status(401).json({message:"no token provided"})
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || "kip26")
    req.user = decoded
    next()

        
    } catch (error) {

        res.status(401).json({message:"invalid token", error:error.message})
        
    }
}

module.exports = auth
