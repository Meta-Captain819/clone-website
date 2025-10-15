import Image from "next/image";
import Link from "next/link";

export default function TopSellingIndoorPlants() {
  const products = [
    {
      id: 1,
      image: "/images/cards1.avif",
      name: "Product Name 1",
      oldPrice: "Dhs. 1,500.00",
      priceRange: "Dhs. 750.00 - Dhs. 880.00",
      isSale: true,
    },
    {
      id: 2,
      image: "/images/cards1.avif",
      name: "Product Name 2",
      priceRange: "Dhs. 125.00",
      isSale: false,
    },
    {
      id: 3,
      image: "/images/cards1.avif",
      name: "Product Name 3",
      oldPrice: "Dhs. 45.00",
      priceRange: "Dhs. 35.00 - Dhs. 80.00",
      isSale: true,
    },
    {
      id: 4,
      image: "/images/cards1.avif",
      name: "Product Name 4",
      oldPrice: "Dhs. 55.00 - Dhs. 195.00",
      priceRange: "Dhs. 50.00 - Dhs. 160.00",
      isSale: true,
    },
    {
      id: 5,
      image: "/images/cards1.avif",
      name: "Product Name 5",
      oldPrice: "Dhs. 135.00",
      priceRange: "Dhs. 85.00",
      isSale: true,
    },
    {
      id: 6,
      image: "/images/cards1.avif",
      name: "Product Name 5",
      oldPrice: "Dhs. 135.00",
      priceRange: "Dhs. 85.00",
      isSale: true,
    },
    {
      id: 7,
      image: "/images/cards1.avif",
      name: "Product Name 5",
      oldPrice: "Dhs. 135.00",
      priceRange: "Dhs. 85.00",
      isSale: true,
    },
  ];

  return (
    <section className="max-w-[1380px] mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
        Top Selling Indoor Plants
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/product`}
            className="bg-white border border-gray-200 shadow-sm rounded-md overflow-hidden group hover:shadow-lg transition-all duration-300 block"
          >
            <div className="relative overflow-hidden">
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="w-full h-64 p-2 sm:p-3 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Sale Badge */}
              {product.isSale && (
                <span className="absolute bottom-0 left-0 bg-black/70 text-white text-xs  px-1 py-0.5 ">
                  Sale
                </span>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <h3 className="text-gray-800 font-medium text-sm md:text-base mb-1 line-clamp-2">
                {product.name}
              </h3>

              {/* Prices */}
              {product.oldPrice && (
                <p className="text-gray-500 text-sm line-through">
                  {product.oldPrice}
                </p>
              )}
              <p className="text-gray-800 text-sm md:text-base font-medium">
                {product.priceRange}
              </p>
            </div>

            {/* Hover Buttons - Shown below product details */}
            <div className="overflow-hidden flex justify-center items-center max-h-32 md:max-h-0 md:group-hover:max-h-32 transition-all duration-300 ease-in-out">
              <div className="flex  gap-2 p-3 pt-0">
                <button
                  className="bg-white border border-black text-black px-2 font-medium text-sm py-1.5 rounded hover:bg-gray-100 transition"
                >
                  Quick Shop
                </button>
                <button
                  className="bg-black text-white font-medium text-sm py-1.5 px-2 rounded hover:bg-green-800 transition"
                >
                  Choose Options
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-8">
         <button
                  className="bg-black text-white font-medium text-sm py-3 px-4 rounded hover:bg-green-800 transition"
                >
                  Shop Collection
                </button>
      </div>
    </section>
  );
}
