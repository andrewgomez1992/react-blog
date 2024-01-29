const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { v4: uuidv4 } = require("uuid");

const PostSchema = new Schema(
  {
    postId: {
      type: String,
      default: () => uuidv4(), // Generate a new UUID for each document
      unique: true,
    },
    title: String,
    summary: String,
    content: String,
    coverImage: String,
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
