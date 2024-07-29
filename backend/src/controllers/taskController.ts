import express, { Request, Response } from "express"
import Task from '../models/Task'
import User from "../models/User";

// @desc  Create task
// @route  POST /api/tasks
const createTask = async (req: any, res: Response)=>{

    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const { title , description, status, priority, deadline } = req.body;

    try{
        const task = new Task({
            title, description, status, priority, deadline, 
            createdAt : Date.now(),
            user: req.user._id

        })
        await task.save();

        res.status(201).json({
          message: "succesfully created the task",
            task
        })
    }catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
      }
}




// @desc  Delete task
// @route  DELETE /api/tasks/:id

const deleteTask = (async (req: any, res: Response ) => {
    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
        res.status(404);
        throw new Error('Task not found');
    }

    if (task.user.toString() !== req.user.id) {
        res.status(401);
        throw new Error('Not authorized');
    }

    res.status(200).json({ message: 'Task deleted' });
})












export {createTask, deleteTask}