import Task from "../models/taskModel.js";
import ErrorHandler from "../middleware/error.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const task = await Task.create({
      title,
      description,
      user: req.user,
    });

    return res.status(201).json({
      success: true,
      message: "Task added Successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTask = async (req, res, next) => {
  try {
    const userid = req.user;
    const tasks = await Task.find({ user: userid });

    res.json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) return next(new ErrorHandler("Task not found", 404));

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.json({
      success: true,
      message: "Task Updated!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) return next(new ErrorHandler("Task not found", 404));
    await task.deleteOne();

    res.json({
      success: true,
      message: "Task Deleted!",
    });
  } catch (error) {
    next(error);
  }
};
