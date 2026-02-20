"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/app/actions/logoutAction";

export default function DashboardPage() {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(logoutAction, {});

  // Redirect after logout
  useEffect(() => {
    if (state?.success) {
      router.push("/login");
    }
  }, [state, router]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          My Dashboard
        </h1>

        <form action={formAction}>
          <button
            type="submit"
            disabled={isPending}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 font-medium disabled:opacity-50"
          >
            {isPending ? "Logging out..." : "Logout"}
          </button>
        </form>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 py-16">
        <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-lg text-center">
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome 🎉
          </h2>

          <p className="text-gray-600 text-lg">
            You are successfully logged in.
          </p>

        </div>
      </div>

    </div>
  );
}
