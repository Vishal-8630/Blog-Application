import express from 'express';
import { loginUser, logoutUser, registerUser } from '../controllers/userControllers.js';

const router = express.Router();

// Route for registering user
router.post("/register", registerUser);

// Route for login user
router.post("/login", loginUser);

// Route for logout user
router.post("/logout", logoutUser);

export default router;  