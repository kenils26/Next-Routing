"use server";

import bcrypt from "bcrypt";
import connectDB from "@/app/lib/db";
import User from "@/app/models/User";

export default async function registerAction(prevState, formData){
    try {
        await connectDB();
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const password = formData.get("password")?.trim();

        if (!name || !email || !password) {
            return { error: "All fields are required" };
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return { error: "User already exists" };
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            name,
            email,
            password: hashedPassword,
        });

        return { success: true, message: "User registered successfully" };

    } catch (error) {
        console.error("Error registering user:", error);
        return { error: "An error occurred while registering the user" };
    }
}