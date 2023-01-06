import mongoose, { Schema } from "mongoose";

const Schema = mongoose.Schema

const postSchema = new Schema({
  title: String,
  content: String,
  date: undefined
})

const Post = mongoose.model('Post', blogSchema)


export {
  Post
}


