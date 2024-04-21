import asyncHanlder from 'express-async-handler';

// @desc        Register the user with { name, email, password }
// @url         Route: /api/auth/register
// @access      Public
export const registerUser = asyncHanlder(async (req, res) => {
    res.json({ message: "Register" });
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