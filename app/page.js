import Image from "next/image";
import Hero from "./components/Hero";
import TopCategories from "./components/Categories";
import TopSellingIndoorPlants from "./components/Cards";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
   <>
   <Hero />
   <TopCategories />
   
   <TopSellingIndoorPlants />
   <div className="py-10 text-center border-b border-gray-200">
           <h2 className="text-3xl  mb-2">Newsletter</h2>
           <p className="text-gray-900 mb-6">Invite customers to join your mailing list.</p>
           <div className="flex justify-center flex-wrap gap-2">
             <input
               type="email"
               placeholder="Email address"
               className="border border-gray-900 rounded-sm px-4 py-3 w-96 focus:outline-none"
             />
             <button className="bg-black text-white px-5 py-3 text-lg rounded-sm hover:bg-gray-900 transition">
               Sign up
             </button>
           </div>
         </div>

   </>
  );
}
