import mongoose from "mongoose";
import PostModel from "../models/postModel.js";
import UserModel from "../models/userModel.js";

// Create new Post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);

    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Get a post 
export const getPost = async (req, res) => {
    const id = req.params.id;

    try {
        const post = await PostModel.findById(id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Update a post 
export const updatePost = async (req, res) => {
    const postId = req.params.id;
    const {userId} = req.body;

    
    try {
        const post = await PostModel.findById(postId);
        if (post.userId === userId) {
            await post.updateOne( { $set : req.body } );
            res.status(200).json("Post updated!");
        } else {
            res.status(403).json("Action forbidden, you can only update your own posts");
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Delete a Post 
export const deletePost = async (req, res) => {
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);
        if (post.userId === userId) {
            await post.deleteOne();
            res.status(200).json("Post deleted!");
        } else {
            res.status(403).json("Action forbidden, you can only delete your own posts");
        }
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// Like and Dislike a Post
export const likePost = async (req, res) => {
    const postId = req.params.id;
    const {userId} = req.body;

    try {
        const post = await PostModel.findById(postId);

        if(post) {
            if(post.likes.includes(userId)) {
                await post.updateOne({$pull : {likes : userId }});
                res.status(200).json("Post unliked");
            } else {
                await post.updateOne( {$push : {likes : userId }});
                res.status(200).json("Post liked");
            }

        } else {
            res.status(403).json("Post does not exist")
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

// Get Timeline Posts
 export const getTimelinePosts = async (req, res) => {
    const userId = req.params.id;

    const currentUserPosts = await PostModel.find({ userId: userId});

    const currentUser = await UserModel.findById(userId);
    const followedPosts = await PostModel.find({ userId: { $in:  currentUser.following}});
    const timelinePosts = currentUserPosts.concat(followedPosts).sort(
        (objA, objB) => objB.createdAt - objA.createdAt
    );

    // const sortedAsc = timelinePosts.sort(
    //     (objA, objB) => Number(objB.createdAt) - Number(objA.createdAt),
    //   );

    try {
        if (timelinePosts.length != 0) {
            res.status(200).json(timelinePosts);

        } else {
            res.status(403).json("There are no Posts in your Timeline!")

        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
 }
