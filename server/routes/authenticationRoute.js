import express from "express";
import { registerUser, logInUser } from "../controllers/authenticationController.js";

const router = express.Router();

router.post('/register', registerUser);
router.post('/logIn', logInUser);

export default router;