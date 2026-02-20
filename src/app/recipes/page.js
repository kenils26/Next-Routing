import Link from "next/link";
import Image from "next/image";

async function getRecipes() {
  const res = await fetch("https://dummyjson.com/recipes?limit=30", {
    next: { revalidate: 60 },
  });
  return res.json();
}

export const metadata = {
  title: "All Recipes",
  description: "Browse all available recipes in our website.",
};

export default async function Recipes() {
  const data = await getRecipes();

  return (
    <main className="max-w-7xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold mb-8">Recipes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.recipes.map((recipe) => (
          <Link key={recipe.id} href={`/recipes/${recipe.id}`}>
            <div className="bg-white border rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300 overflow-hidden cursor-pointer">
              
              <div className="relative w-full h-48">
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {recipe.name}
                </h2>

                <p className="text-sm text-gray-600 mb-2">
                  {recipe.instructions[0].substring(0, 80)}...
                </p>

                <p className="text-sm">
                  <span className="font-semibold">Cuisine:</span>{" "}
                  {recipe.cuisine}
                </p>

                <p className="text-yellow-600 text-sm mt-1">
                  ⭐ {recipe.rating}
                </p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}