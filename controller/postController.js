const Post=require("../models/postModel");
const Comment=require("../models/commentModel");

exports.createPost = async(req,res)=>{
 try{
    const {title,body}=req.body;
    const post=new Post({
        title,body,
    });

    const savedPost=await post.save();

    res.json({
        post:savedPost,
    });

    }
    catch(error){
        return res.status(400).json({
            error:"error creating a post",
        });
    } 
};

exports.getAllPost=async(res,req)=>{
    try{
        const post=await Post.find().populate("likes").populate("comments").exec()
        res.json({
            post,
        })
    }
    catch(error){
        return res.status(400).json({
            error:"error creating a post",
 });
 } 
}