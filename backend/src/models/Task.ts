import mongoose,{Document, Schema} from "mongoose";

export interface ITask extends Document{
    title: string,
    description?: string,
    status: 'todo' | 'inprogress' | 'underreview' | 'finished'
    priority?: 'low' | ' medium' | 'urgent'
    deadline?: Date
    createdDaysAgo: number
}