import express from 'express';
import { deleteBlog, getBlog, newBlog, updateBlog } from '../controllers/blogControllers.js';

const router = express.Router();

// Router to create new blog
router.post('/', newBlog);

// Router to get blog using
router.get('/', getBlog);

// Router to update blog using
router.put('/', updateBlog);

// Router to delete blog
router.delete('/', deleteBlog);

export default router;