import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { dbConnect } from "@/utils/dbConnect";

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find().populate("author", "name email");
  return NextResponse.json(blogs);
}
