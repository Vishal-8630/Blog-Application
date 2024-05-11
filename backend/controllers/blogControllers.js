import asyncHanlder from 'express-async-handler';
import mongoose from 'mongoose';

import User from '../models/userModel.js';
import Blog from '../models/blogModel.js';

// @desc        Create new blog { titile, description, createdBy, topics }
// @url         Route: /api/blog/
// @access      Public
export const newBlog = asyncHanlder(async (req, res) => {
    const { title, description, userId, tags } = req.body;
    
    // Validation for empty title, description, and tags array
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

// @desc        get blog using blogId
// @url         Route: /api/blog/?blogId=
// @access      Public
export const getBlog = asyncHanlder(async (req, res) => {
    const blogId = req.query.blogId;

    // Validation for blogId
    if(!mongoose.Types.ObjectId.isValid(blogId)) {
        res.status(404);
        throw new Error("Invalid request");
    }

    const blog = await Blog.findById(blogId);
    if(!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    return res.json({ blog });
});

// @desc        delete blog using blogId
// @url         Route: /api/blog/?blogId=
// @access      Private
export const deleteBlog = asyncHanlder(async (req, res) => {
    const blogId = req.query.blogId;

    // Validation for blogId
    if(!mongoose.Types.ObjectId.isValid(blogId)) {
        res.status(404);
        throw new Error("Invalid request");
    }

    const blog = await Blog.findByIdAndDelete(blogId);
    if(!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }
    return res.json({ blog });
});

// @desc        Update blog using blogId { titile, description, topics }
// @url         Route: /api/blog/?blogId=
// @access      Private
export const updateBlog = asyncHanlder(async (req, res) => {
    const blogId = req.query.blogId;
    const { title, description, tags } = req.body;

    // Validation for empty title, description, and tags array
    if(!title || !description || !tags?.length) {
        res.status(400);
        throw new Error("Please fill all the deatils");
    }

    // Validation for blogId
    if(!mongoose.Types.ObjectId.isValid(blogId)) {
        res.status(404);
        throw new Error("Invalid request");
    }

    const blog = await Blog.findById(blogId);
    if(!blog) {
        res.status(404);
        throw new Error("Blog not found");
    }

    blog.title = title;
    blog.description = description;
    blog.tags = tags;
    await blog.save();

    return res.json({ blog });
});