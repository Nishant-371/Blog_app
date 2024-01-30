const express=require("express");
const router=express.Router();

const {likePost, unlikePost}=require("../controller/likecontroller");
const {createComment}=require("../controller/commentController");
const {createPost,getAllPost}=require("../controller/postController");

router.post("comments/create",createComment);
router.post("post/create",createPost);
router.get("/posts",getAllPost);
router.post("/likes/like",likePost);
router.post("/likes/unlike",unlikePost);

module.exports=router;