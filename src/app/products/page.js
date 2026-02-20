import Image from "next/image";
import Link from "next/link";
async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=30", {
    next: { revalidate: 60 },
  });

  return res.json();
}

export const metadata = {
  title: "All Products | My Store",
  description: "Browse all available products in our store.",
};
export default async function ProductsPage() {
  const data = await getProducts();

  return (
    <main className="px-6 py-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Our Products
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 flex flex-col cursor-pointer">
            
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={300}
              height={200}
              className="rounded-lg object-cover h-48 w-full"
            />

            <h2 className="text-lg font-semibold mt-4">
              {product.title}
            </h2>

            <p className="text-sm text-gray-600 mt-2">
              {product.description.slice(0, 80)}...
            </p>

            <p className="mt-2 font-bold text-blue-600">
              ${product.price}
            </p>

          </div>
        </Link>
        ))}
      </div>
    </main>
  );
}