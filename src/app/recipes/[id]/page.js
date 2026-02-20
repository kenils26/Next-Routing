import Image from "next/image";
import { notFound } from "next/navigation";

async function getRecipe(id) {
  const res = await fetch(
    `https://dummyjson.com/recipes/${id}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  if (!data.id) {
    return null;
  }

  return data;
}

export async function generateMetadata({params}){
    const {id} = await params;
    const recipe = await getRecipe(id);
    return{
        title: recipe.name,
        description: recipe.instructions,
        openGraph:{
            name: recipe.name,
            instructions: recipe.instructions,
            images: [recipe.image],
        }
    }
}
export default async function RecipeDetails({ params }) {
  const { id } = await params;
  const recipe = await getRecipe(id);

  if (!recipe) {
    notFound(); // Proper Next.js 404
  }

  return (
    <main className="max-w-5xl mx-auto p-8 bg-white">

      <div className="grid md:grid-cols-2 gap-10">

        <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-md">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">
            {recipe.name}
          </h1>

          <p className="mb-2">Cuisine: {recipe.cuisine}</p>
          <p className="mb-2">Difficulty: {recipe.difficulty}</p>
          <p className="text-yellow-600">
            ⭐ {recipe.rating}
          </p>
        </div>

      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
        <ul className="list-disc list-inside space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>

    </main>
  );
}