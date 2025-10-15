"use client";

import { useState } from "react";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import TopSellingIndoorPlants from "../components/Cards";

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="max-w-7xl mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-6">
                Home / <span className="text-black font-medium">3 Dracaena Plants Set / Dracaena Trio Bundle 80–100cm in Ceramic Pot</span>
            </div>

            {/* Product Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left: Image */}
                <div className="flex justify-center">
                    <Image
                        src="/images/cards1.avif"
                        alt="3 Dracaena Plants Set"
                        width={500}
                        height={500}
                        className="rounded-md object-cover"
                    />
                </div>

                {/* Right: Details */}
                <div>
                    <h1 className="text-2xl font-semibold mb-2">
                        3 Dracaena Plants Set / Dracaena Trio Bundle 80–100cm in Ceramic Pot
                    </h1>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="bg-gray-200 text-sm px-2 py-1 rounded">Sale</span>
                        <span className="line-through text-gray-400 text-lg">Dhs. 1,500.00</span>
                        <span className="text-lg font-semibold text-black">Dhs. 750.00</span>
                    </div>

                    {/* Options */}
                    <div className="space-y-4 mb-6">
                        <select className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none">
                            <option>Select Pot</option>
                            <option>White Ceramic Pot</option>
                            <option>Black Ceramic Pot</option>
                        </select>

                        <select className="w-full border border-gray-300 px-3 py-2 rounded-sm focus:outline-none">
                            <option>Select Soil Cover</option>
                            <option>Default Soil</option>
                            <option>Decorative Pebbles</option>
                        </select>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex justify-center items-center border border-black rounded-sm ">

                            <button
                                className=" px-5 py-5  text-gray-600 hover:bg-gray-100"
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            >
                                <Minus size={16} />
                            </button>
                            <span className="px-8 py-4  border-x border-black">{quantity}</span>
                            <button
                                className=" px-5 py-5  text-gray-600 hover:bg-gray-100"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                        <button className="bg-white border text-black  py-4 rounded-xs w-full hover:bg-gray-900 transition">
                            Add to cart
                        </button>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col gap-3 mb-4">

                        <button className="bg-black text-white py-3 rounded-sm hover:bg-gray-900 transition">
                            Buy it now
                        </button>
                    </div>

                    {/* Returns Info */}
                    <div className="border border-gray-200 bg-amber-50/50 p-3 text-sm rounded-sm mb-6">
                        <p className="font-semibold">Free returns on all eligible orders</p>
                        <p className="text-gray-600">
                            You have 7 days to request a return. All sale items are final sale.
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        The “3 Dracaena Plants Set - 80–100cm in Ceramic Pot” is a curated trio of indoor tropical plants,
                        each standing between 80–100cm tall, beautifully arranged in ceramic pots—ideal for enhancing
                        home or office interiors.
                    </p>

                    <p className="text-gray-700 text-sm leading-relaxed">
                        Here’s a detailed breakdown of what this set includes and why it’s popular:
                    </p>
                </div>
            </div>

            {/* What's Included */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                    🌿 What’s Included in the Set
                </h2>

                <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm leading-relaxed">
                    <li>
                        <strong>Three distinct Dracaena varieties:</strong>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><em>Dracaena Fragrans Massangeana:</em> Known for its lush, green foliage and upright growth.</li>
                            <li><em>Dracaena Marginata:</em> Features slender, arching leaves with red edges—adds a dramatic flair.</li>
                            <li><em>Dracaena “Yellow Coast”:</em> A vibrant cultivar with glossy green leaves and yellow accents.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Height:</strong> Each plant ranges from 80 to 100 cm tall, making them substantial enough to stand out without overwhelming a space.
                    </li>
                    <li>
                        <strong>Ceramic Pots:</strong> The plants come pre-potted in elegant ceramic containers, which add a polished, modern touch to their presentation.
                    </li>
                </ul>
            </div>

            {/* Benefits Section */}
            <div className="mt-12">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                    🌱 Benefits of Dracaena Plants
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Dracaena plants are known for improving indoor air quality, requiring minimal maintenance, and adding a touch of nature’s elegance to your living or workspace. 
                    They thrive in low to moderate light conditions and only need occasional watering, making them perfect for busy individuals or those new to plant care.

                </p>
            </div>
            <TopSellingIndoorPlants />
        </div>
    );
}
