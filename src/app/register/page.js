"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import registerAction from "@/app/actions/registerAction";

export default function RegisterPage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(registerAction, {});

  
  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create Account 
        </h2>

        <form action={formAction} className="space-y-5">
              
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none transition"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200 font-semibold disabled:opacity-50"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </form>

        {/* Error message */}
        {state?.error && (
          <p className="mt-4 text-center text-red-500 text-sm">
            {state.error}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-gray-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}
