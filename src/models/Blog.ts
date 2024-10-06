import mongoose, { Schema, model, models } from "mongoose";

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: { type: [String], required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = models.Blog || model("Blog", blogSchema);
export default Blog;
