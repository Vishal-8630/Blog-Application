import express from 'express';
import { allBlogs, deleteBlog, getBlog, newBlog, updateBlog } from '../controllers/blogControllers.js';

const router = express.Router();

// Router to create new blog
router.post('/', newBlog);

// Router to get all blogs
router.get('/', allBlogs);

// Router to get blog using
router.get('/:blogId', getBlog);

// Router to update blog using
router.put('/', updateBlog);

// Router to delete blog
router.delete('/', deleteBlog);

export default router;