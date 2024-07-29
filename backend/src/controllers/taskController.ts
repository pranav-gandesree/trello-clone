import  { Request, Response } from "express"
import Task, { ITask } from '../models/Task'

// @desc  Create task
// @route  POST /api/tasks
const createTask = async (req:Request, res: Response)=>{

    if (!req.user) {
        res.status(401);
        throw new Error('User not found');
    }

    const { title , description, status, priority, deadline } = req.body;

    try{
        const task: ITask = new Task({
            title, description, status, priority, deadline, 
            createdAt : Date.now(),
            user: req.user._id

        })
        task.save();

        res.status(201).json({
          message: "succesfully created the task",
            task
        })
    }catch (error) {
        res.status(500).json({ message: 'Error creating task', error });
      }
}

export {createTask}