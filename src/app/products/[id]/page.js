import Image from "next/image";

async function getProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    next: { revalidate: 60 },
  });

  return res.json();
}



export default async function ProductDetails({ params }) {
  const { id } = await params;
  const product = await getProduct(id);

  return (
    <main className="max-w-6xl mx-auto p-8 bg-white">
      
      <div className="grid md:grid-cols-2 gap-10">

        {/* Product Image */}
        <div className="relative w-full h-96 border rounded-lg overflow-hidden shadow-md">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
          />

          {/* Discount Badge */}
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 text-sm rounded">
            {product.discountPercentage}% OFF
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            {product.title}
          </h1>

          <p className="text-gray-700 mb-6">
            {product.description}
          </p>

          <div className="space-y-2 text-lg">

            <p>
              <span className="font-semibold">Brand:</span>{" "}
              {product.brand}
            </p>

            <p>
              <span className="font-semibold">Category:</span>{" "}
              {product.category}
            </p>

            <p className="text-3xl font-bold mt-4">
              ${product.price}
            </p>

            <p className="text-yellow-600 text-lg">
              ⭐ {product.rating}
            </p>

            <p
              className={`text-lg ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0
                ? `In Stock (${product.stock})`
                : "Out of Stock"}
            </p>

          </div>
        </div>

      </div>

    </main>
  );
}