import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Database connection
import connectDB from './config/db.js';
connectDB();

// Importing routes
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import userRouter from './routes/userRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// Routes
app.use("/api/auth", userRouter);

// Calling error handler middlwares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at: ${port}`));