import asyncHanlder from 'express-async-handler';
import mongoose from 'mongoose';

import User from '../models/userModel.js';
import Blog from '../models/blogModel.js';

// @desc        Create new blog { titile, description, createdBy, topics }
// @url         Route: /api/blog/new
// @access      Public
export const newBlog = asyncHanlder(async (req, res) => {
    const { title, description, userId, tags } = req.body;
    
    // Validation for empty title, description, and topics array
    if(!title || !description || !tags?.length) {
        res.status(400);
        throw new Error("Please fill all the deatils");
    }

    // Validation for userID
    if(!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400);
        throw new Error("Invalid user");
    }

    const createdBy = await User.findById(userId);
    if(!createdBy) {
        res.status(400);
        throw new Error("No user found");
    }

    const newBlog = await Blog.create({
        title, 
        description,
        createdBy,
        tags
    });
    res.json({ newBlog });
});