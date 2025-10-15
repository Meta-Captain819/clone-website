
import Image from "next/image";
import Link from "next/link";

export default function TopCategories() {
  const heroBanners = [
    {
      id: 1,
      title: "Best Seller Large Plants Bundle",
      price: "1050 AED",
      img: "/images/category1.webp",
    },
    {
      id: 2,
      title: "Diwali Bundle",
      price: "199 AED",
      img: "/images/category1.webp",
    },
    {
      id: 3,
      title: "Urban Jungle Bundle",
      price: "725 AED",
      img: "/images/category1.webp",
    },
  ];

  const categories = [
    { id: 1, name: "Plant Bundles", img: "/images/category2.webp" },
    { id: 2, name: "Fruit Plants", img: "/images/category2.webp" },
    { id: 3, name: "Clearance sale", img: "/images/category2.webp" },
    { id: 4, name: "Olive Trees", img: "/images/category2.webp" },
    { id: 5, name: "Boxed Greenery", img: "/images/category2.webp" },
    { id: 6, name: "GRP Pots", img: "/images/category2.webp" },
    { id: 7, name: "Herbs and Vegetables", img: "/images/category2.webp" },
    { id: 8, name: "Outdoor Plants", img: "/images/category2.webp" },
  ];

  return (
    <section className="px-4 md:px-8 lg:px-16 py-10">
      {/* Hero Banner Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {heroBanners.map((banner) => (
          <div
            key={banner.id}
            className="relative group overflow-hidden "
          >
            <Image
              src={banner.img}
              alt={banner.title}
              width={600}
              height={400}
              className="w-full h-64 md:h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
              priority={banner.id === 1}
            />

            {/* Overlay content */}
            <div className="absolute inset-0  flex flex-col justify-end p-4 text-white">
              <p className="text-lg md:text-xl">{banner.title}</p>
              <div className="flex justify-between items-center">
                
                <Link
                  href="#"
                  className="bg-black text-white my-3 text-sm px-5 py-3 rounded-sm hover:bg-gray-800 transition"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Top Categories Section */}
      <div className="text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-8">
          Top Categories this Week
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4  gap-6 md:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-32 h-32 md:w-80 md:h-80 rounded-full overflow-hidden shadow-md hover:scale-105 transform transition duration-500">
                <Image
                  src={cat.img}
                  alt={cat.name}
                  fill
                  sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-sm md:text-base font-medium">
                {cat.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
