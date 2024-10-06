import { NextResponse } from "next/server";
import Blog from "@/models/Blog";
import { dbConnect } from "@/utils/dbConnect";
import { verifyToken } from "@/utils/auth";

export async function POST(request: Request) {
  await dbConnect();

  const { title, body, tags } = await request.json();
  const token = request.headers.get("Authorization")?.split(" ")[1];

  const decoded = verifyToken(token);

  if (!decoded || typeof decoded === "string" || !("userId" in decoded)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const newBlog = new Blog({
    title,
    body,
    tags,
    author: decoded.userId,
  });

  await newBlog.save();

  return NextResponse.json({ message: "Blog created successfully" });
}
