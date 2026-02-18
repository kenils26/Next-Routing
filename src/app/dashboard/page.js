"use client";

import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", {
      method: "POST",
      credentials: "include",
    });

    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Navbar */}
      <div className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">
          My Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200 font-medium"
        >
          Logout
        </button>
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
