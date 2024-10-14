import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { dbConnect } from "@/utils/dbConnect";
import User from "@/models/User";

export async function GET() {
  try {
    await dbConnect();

    const blogs = await Blog.find().populate("author", "name email");

    const userIds = blogs.map((blog) => blog.author);
    const users = await User.find({ _id: { $in: userIds } });

    return NextResponse.json({ blogs, users });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
