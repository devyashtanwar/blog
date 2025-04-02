import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import BlogModel from "@/lib/models/blog-model";
import fs from "fs";

const LoadDB = async () => {
  await ConnectDB();
};

LoadDB();

//API endpoint to get all blogs
export const GET = async (request) => {
  const blogId = request.nextUrl.searchParams.get("id");
  if (blogId) {
    const blog = await BlogModel.findById(blogId);
    return NextResponse.json(blog);
  } else {
    const blogs = await BlogModel.find({});
    return NextResponse.json({ blogs });
  }
};

// API endpoint for uploading new blogs
export const POST = async (request) => {
  const formData = await request.formData();

  const blogData = {
    title: `${formData.get("title")}`,
    description: `${formData.get("description")}`,
    category: `${formData.get("category")}`,
    author: `${formData.get("author")}`,
    image: `${formData.get("image")}`,
    authorImg: `${formData.get("authorImg")}`,
  };

  await BlogModel.create(blogData);
  console.log("Blog Saved!");

  return NextResponse.json({ success: true, msg: "Blog added successfully" });
};

// API endpoint to delete blog
export const DELETE = async (request) => {
  const id = await request.nextUrl.searchParams.get("id");
  const blog = await BlogModel.findById(id);
  fs.unlink(`./public${blog.image}`, () => {});
  await BlogModel.findByIdAndDelete(id);
  return NextResponse.json({
    success: true,
    msg: "Blog deleted successfully.",
  });
};
