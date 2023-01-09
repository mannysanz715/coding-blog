import mongoose from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: String,
  content: String,
  date: String,
})

const Post = mongoose.model('Post', postSchema)


export {
  Post
}


