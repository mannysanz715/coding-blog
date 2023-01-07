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

function create(req, res){
  console.log(req.body)
  Post.create(req.body)
  .then(post =>{
    res.redirect('/blog')
  })
  .catch(err =>{
    console.log(err)
    res.render('posts/index')
  })
}

function show(req, res){
  console.log(req.params.id)
  Post.findById(req.params.id)
  .then( post =>{
    res.render('posts/show', {
      post
    })
    
  }).catch(err =>{
      console.log(err)
      res.render('posts/index')
    })
}

function deletePost(req, res){
  Post.findByIdAndDelete(req.params.id)
  .then( post =>{
    res.redirect('/blog')
  })
  .catch(err =>{
    console.log(err)
    res.render('posts/index')
  })
}

function edit(req, res){
  Post.findById(req.params.id)
  .then(post =>{
    res.render('posts/edit',{
      post
    })
  })
  .catch(err =>{
    console.log(err)
    res.render('posts/show')
  })
}

function update(req, res){
  Post.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(post =>{
    res.redirect('/blog')
  })
  .catch(err =>{
    console.log(err)
    res.render('posts/index')
  })
}

export{
  index,
  newPost as new,
  create,
  show,
  deletePost as delete,
  edit,
  update

}