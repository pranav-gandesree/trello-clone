import express, { Request, Response } from 'express';
import connectDb from './config';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoute'

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

//middleware for json parser
app.use(express.json())

// Add authentication routes
app.use('/api/auth', authRoutes);

app.listen(port, async() => {
     await connectDb();
  console.log(`Server is running on port ${port}`);
});
