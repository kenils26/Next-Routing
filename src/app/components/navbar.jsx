import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-black shadow-md px-6 py-4 flex justify-between items-center">
      
      <h1 className="text-white font-bold text-xl">
        My App
      </h1>

      <div className="flex gap-6">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>

        <Link href="/products" className="text-white hover:text-gray-300">
          Products
        </Link>

        <Link href="/recipes" className="text-white hover:text-gray-300">
          Recipes
        </Link>
        
        <Link href="/login" className="text-white hover:text-gray-300">
          Login
        </Link>

        <Link href="/register" className="text-white hover:text-gray-300">
          Register
        </Link>


      </div>

    </div>
  );
}
