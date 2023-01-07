import { Post } from "../models/blog.js";

function index(req, res){
  Post.find({})
  .then( posts => {
    res.render('posts/index',{
      posts
    })
  })
  .catch(err =>{
    console.log(err)
    res.render('posts/index')
  })
}

function newPost(req,res){
  res.render('posts/new')
}

export{
  index,
  newPost as new,
  
}