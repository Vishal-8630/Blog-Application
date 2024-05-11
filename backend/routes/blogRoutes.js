import express from 'express';
import { newBlog } from '../controllers/blogControllers.js';

const router = express.Router();

router.post('/new', newBlog);

export default router;