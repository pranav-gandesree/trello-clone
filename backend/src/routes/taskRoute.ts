import express, {Request, Response} from "express";
import verifyToken from "../middleware";
import { createTask } from "../controllers/taskController";


const router = express.Router();

router.post('/addtask', verifyToken, createTask);

export default router;

