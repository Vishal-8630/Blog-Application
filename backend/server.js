import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
dotenv.config();

// Database connection
import connectDB from './config/db.js';
connectDB();

// Importing routes
import { errorHandler, notFound } from './middlewares/errorHandler.js';
import userRouter from './routes/userRoutes.js';
import blogRouter from './routes/blogRoutes.js';

const app = express();
const port = process.env.PORT || 5000;

// For parsing json data
app.use(express.json());
// For parsing form data
app.use(express.urlencoded({ extended: true }));
// For parsing cookies
app.use(cookieParser());

// Routes
app.use("/api/auth", userRouter);
app.use('/api/blogs', blogRouter);

// Calling error handler middlwares
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at: ${port}`));