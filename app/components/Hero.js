import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative w-full h-[40vh] md:h-[80vh]">
      {/* Mobile Image */}
      <Image
        src="/images/hero2.webp"
        alt="Hero Image"
        fill
        className="object-cover md:hidden"
        priority
      />
      
      {/* Desktop Image */}
      <Image
        src="/images/hero1.webp"
        alt="Hero Image"
        fill
        className="object-cover hidden md:block"
        priority
      />
    </div>
  );
}
