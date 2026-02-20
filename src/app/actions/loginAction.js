"use server";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import connectDB from "@/app/lib/db";
import User from "@/app/models/User";
import { cookies } from "next/headers";

export async function loginAction(prevState, formData) {
  try {
    await connectDB();

    const email = formData.get("email")?.trim().toLowerCase();
    const password = formData.get("password");

    if (!email || !password) {
      return { error: "All fields are required" };
    }

    const user = await User.findOne({ email });

    if (!user) {
      return { error: "User does not exist" };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return { error: "Invalid credentials" };
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return { success: true };

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return { error: "Something went wrong" };
  }
}
