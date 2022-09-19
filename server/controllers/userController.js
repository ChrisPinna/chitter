import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt"

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
            res.status(500).json(error)
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

            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully")
        } catch (error) {
            res.status(500).json(error)
        }

    } else {

        res.status(500).json("Access Denied! No admin status detected, you can only delete your own proifile")
    };

};