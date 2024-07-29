import express, { Request, Response } from 'express';

import connectDb from './config';
import authRoutes from './routes/authRoute'
import taskRoutes from './routes/taskRoute'

// const connectDb = require('./config')
// const authRoutes = require('./routes/authRoute')
// const taskRoutes = require('./routes/taskRoute')

import cors from 'cors';
import dotenv from 'dotenv'

// const dotenv = require('dotenv');

const app = express();

dotenv.config();

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your client app's URL
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));


const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

//middleware for json parser
app.use(express.json())

// Add authentication routes
app.use('/api/auth', authRoutes);
app.use('api/tasks',taskRoutes)

app.listen(port, async() => {
     await connectDb();
  console.log(`Server is running on port ${port}`);
});
