
const express = require("express")
const router = express.Router()
const Task = require("../models/task")


router.post('/createTask', async (req, res) => {

    try {
        const task = await Task.create(req.body)
        return res.status(201).json({message:`${task.title} created successfully`})
        
    } catch (error) {
        return res.status(500).json({message:"server error", error})
        
    }
    
})

router.get('/getTask', async (req, res) => {
    try {
        const tasks = await Task.find()
         res.json(tasks)
        
    } catch (error) {

        return res.status(500).json({message:"server error", error})
        
    }
    
})

router.get('/getTask:id', async (req, res) => {

    try {
        const taskID = await  Task.findById(req.params.id)
        res.json(taskID)


    } catch (error) {

        return res.status(404).json({message:"task not found"})
        
    }
    
})


module.exports = router