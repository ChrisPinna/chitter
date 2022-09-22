import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt"
import PostModel from "../models/postModel.js";

// get a User
export const getUser = async (req, res) => {

    const id = req.params.id;

    try {

        const user = await UserModel.findById(id);
        
        if (user) {
            const { password, ...otherDetails } = user._doc
            res.status(200).json(otherDetails);
        } else {
            res.status(404).json("User does not exist!")
        }

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

// update a user
export const updateUser = async (req, res) => {

    const id = req.params.id;
    const { currentUserId, currentUserAdminStatus, password} = req.body;

    if ( id === currentUserId || (currentUserAdminStatus === true)) {

        try {

            if (password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});
            res.status(200).json(user);  

        } catch (error) {
            res.status(500).json({message: error.message})
        };

    } else {
        res.status(403).json("Access Denied! No admin status detected, you can only update your own proifile");
    };

};

// Delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    const {currentUserId, currentUserAdminStatus} = req.body;

    if ( id === currentUserId || (currentUserAdminStatus === true) ) {

        try {

            await UserModel.findByIdAndDelete(id, req.body, {new: true});
            res.status(200).json("User deleted successfully")
        } catch (error) {
            res.status(500).json({message: error.message});
        }

    } else {

        res.status(500).json("Access Denied! No admin status detected, you can only delete your own proifile")
    };

};

// Follow a User
export const followUser = async (req, res) => {
    const id = req.params.id;
    const {currentUserId} = req.body;

    if (currentUserId === id){
        res.status(403).json("Action forbidden, you cannot follow yourself");
    } else {
        try {
            const currentUser = await UserModel.findById(currentUserId);
            const targetUser = await UserModel.findById(id);

            if (!targetUser.followers.includes(currentUserId)) {
                await targetUser.updateOne({$push : {followers: currentUserId}});
                await currentUser.updateOne({$push : {following: id}});
                res.status(200).json("User followed!")
            } else {
                res.status(403).json("Action forbidden, you are already following this user")
            }

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    
};

// UnFollow a User
export const unFollowUser = async (req, res) => {
    const id = req.params.id;
    const {currentUserId} = req.body;

    if (currentUserId === id){
        res.status(403).json("Action forbidden, you cannot unfollow yourself");
    } else {
        try {
            const currentUser = await UserModel.findById(currentUserId);
            const targetUser = await UserModel.findById(id);

            if (targetUser.followers.includes(currentUserId)) {
                await targetUser.updateOne({$pull : {followers: currentUserId}});
                await currentUser.updateOne({$pull : {following: id}});
                res.status(200).json("You stoped following the user!")
            } else {
                res.status(403).json("Action forbidden, you are not following this user")
            }

        } catch (error) {
            res.status(500).json({message: error.message});
        }
    }
    
};
 
