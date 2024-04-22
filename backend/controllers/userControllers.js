import asyncHanlder from 'express-async-handler';

import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc        Register the user with { name, email, password }
// @url         Route: /api/auth/register
// @access      Public
export const registerUser = asyncHanlder(async (req, res) => {
    const { name, email, password } = req.body;

    if(!name || !email || !password) {
        res.status(400);
        throw new Error("Invalid user data");
    }

    const existingUser = await User.findOne({ email });
    if(existingUser) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await User.create({
        name,
        email,
        password
    });

    if(user) {
        generateToken(res, user._id);
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

// @desc        Login the user with { email, password }
// @url         Route: /api/auth/login
// @access      Public
export const loginUser = asyncHanlder(async (req, res) => {
    res.json({ message: "Login" });
});

// @desc        logout the user with
// @url         Route: /api/auth/logout
// @access      Public
export const logoutUser = asyncHanlder(async (req, res) => {
    res.json({ message: "Logout" });
});