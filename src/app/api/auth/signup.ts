import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { dbConnect } from "@/utils/dbConnect";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { name, email, password } = await request.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
  }
}
