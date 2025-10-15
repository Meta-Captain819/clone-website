import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const phoneNumber = "971585121105"; // Replace with your WhatsApp number
  const message = "Hello! I'm interested in your products."; // Default message

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-2 rounded-full shadow-lg hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 ease-in-out "
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </Link>
  );
}
