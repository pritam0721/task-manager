const Task = require('../models/Task');



const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({});
        return res.status(201).json({ task })

    } catch (error) {
        return res.status(501).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        return res.status(201).json({ task })
    } catch (error) {
        return res.status(501).json({ msg: error })
    }

}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        if (!task) {
            res.status(404).json({ msg: `the task was not found ${task} ` })
        }


        return res.status(201).json({ task })

    } catch (error) {
        return res.status(501).json({ msg: error })
    }
}


const deletTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })

        if (!task) {
            res.status(404).json({ msg: `the task was not found ${task} ` })
        }
        return res.status(200).json({ task: null, status: "success" })
    } catch (error) {
        return res.status(501).json({ msg: error })
    }


}
const updateTask = async (req, res) => {
    try {
        const { id:taskID } = req.params
        const task =  await Task.findByIdAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })

        if (!task) {
            res.status(404).json({ msg: `the task was not found ${task} ` })
        }

        return res.status(201).json({task})
    } catch (error) {
        return res.status(501).json({ msg: error })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deletTask

}