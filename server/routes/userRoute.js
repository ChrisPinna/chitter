import express from "express";
import { deleteUser, followUser, getUser, unFollowUser, updateUser } from "../controllers/userController.js";

const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.put('/:id/follow', followUser);
router.put('/:id/unFollow', unFollowUser);

export default router;