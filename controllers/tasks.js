const asyncWrapper = require("../middleware/async");
const Task = require("../models/Task");
const { createCustomError } = require('../errors/custom-errors')

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(201).json({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const getTask = asyncWrapper(async (req, res,next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });

  if (!task) {
     return next( createCustomError (` msg: the task was not found ${task}`,404))
  }

  res.status(201).json({ task });
});

const deletTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });

  if (!task) {
    return next(createCustomError(` msg: the task was not found ${task}`,404))
  }
  res.status(200).json({ task: null, status: "success" });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next( createCustomError(` msg: the task was not found ${task}`,404))
  }

  res.status(201).json({ task });
});

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deletTask,
};
