"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  MessageSquareText,
  User,
  ShoppingBag,
  ChevronDown,
} from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openMenu = () => {
    setMobileMenuOpen(true);
    setTimeout(() => setIsAnimating(true), 10);
  };

  const closeMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setMobileMenuOpen(false), 300);
  };

  const navLinks = [
    { name: "Indoor Plants", dropdown: true },
    { name: "Outdoor Plants", dropdown: true },
    { name: "Soil & Stones", dropdown: true },
    { name: "Fertilizer & Pesticides", dropdown: true },
    { name: "Pots & Planters", dropdown: true },
    { name: "Seeds", dropdown: true },
    { name: "Hydroponics", dropdown: false },
    { name: "Garden Services", dropdown: false },
    { name: "Plant Talk", dropdown: false },
  ];

  return (
    <header className="bg-[#a5d63f] text-black sticky top-0 z-50 shadow">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 md:px-20 py-5">
        {/* Mobile: Menu Icon (Left) */}
        <button
          className="lg:hidden"
          aria-label="Open mobile menu"
          onClick={openMenu}
        >
          <Menu size={28} />
        </button>

        {/* Mobile: Search Icon (Left, beside menu) */}
        <button
          className="lg:hidden ml-3"
          aria-label="Search"
        >
          <Search size={24} />
        </button>

        {/* Logo - Center on mobile, Left on desktop */}
        <div className="flex items-center lg:flex-none flex-1 justify-center lg:justify-start">
            <Link href="/">
          <Image
            src="/images/logo.webp"
            alt="GreenSouq logo"
            width={150}
            height={40}
            className="w-auto h-12 lg:h-14"
            priority
            />
            </Link>
        </div>

        {/* Mobile: Shopping Cart (Right) */}
        <button className="lg:hidden" aria-label="Shopping cart">
          <ShoppingBag size={24} />
        </button>

        {/* Center: Search Bar (desktop only) */}
        <div className="hidden lg:flex items-center flex-1 max-w-[720px] mx-8">
          <div className="flex w-full bg-white rounded-xs overflow-hidden">
            <select
              className="bg-gray-200 text-gray-700 px-5 py-3  outline-none"
              aria-label="Select category"
            >
              <option>All categories</option>
            </select>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 px-3 py-3 outline-none text-sm text-gray-700"
            />
            <button
              aria-label="Search"
              className="bg-black text-white px-4 flex items-center justify-center"
            >
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Right: Contact + Icons */}
        <div className="hidden lg:flex items-center gap-6 text-sm">
          <div className="flex items-center gap-1">
            <MessageSquareText size={24} />
            <div className="leading-tight">
              <p className="font-semibold">+971 58 512 1105</p>
              <p className="text-gray-800 text-sm">info@greensouq.ae</p>
            </div>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <User size={24} />
            <span>Login</span>
          </div>

          <ShoppingBag size={22} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile: Contact Details (underneath top section) */}
      <div className="lg:hidden px-4 pb-3 text-xs flex items-center justify-center gap-4">
        <div className="flex items-center gap-1">
          <MessageSquareText size={14} />
          <span>+971 58 512 1105</span>
        </div>
        <div className="flex items-center gap-1">
          <span>info@greensouq.ae</span>
        </div>
      </div>

      {/* Bottom Nav Links (desktop only) - with smooth transition */}
      <nav 
        className={`hidden lg:flex items-center justify-center space-x-6 pb-3 transition-all duration-300 ease-in-out overflow-hidden ${
          scrolled ? 'max-h-0 opacity-0 pb-0' : 'max-h-20 opacity-100'
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href="#"
            className="flex items-center gap-1 font-medium hover:underline"
          >
            {link.name}
            {link.dropdown && <ChevronDown size={16} />}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar with smooth sliding transition */}
          <div className={`bg-white w-4/5 max-w-xs h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isAnimating ? 'translate-x-0' : '-translate-x-full'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <Image
                src="/images/logo.webp"
                alt="GreenSouq logo"
                width={100}
                height={35}
              />
              <button
                aria-label="Close mobile menu"
                onClick={closeMenu}
              >
                <X size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="flex mb-6">
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 border border-gray-300 px-3 py-2 rounded-l-md outline-none"
              />
              <button className="bg-black text-white px-3 rounded-r-md">
                <Search size={18} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="space-y-4">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex justify-between items-center text-gray-800"
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown size={18} />}
                </div>
              ))}
            </nav>

            {/* Bottom Icons */}
            <div className="mt-8 border-t pt-6 space-y-4 text-sm">
              <div className="flex items-center gap-2">
                <MessageSquareText size={20} />
                <div>
                  <p className="font-semibold">+971 58 512 1105</p>
                  <p className="text-gray-600 text-xs">info@greensouq.ae</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <User size={20} />
                <span>Login</span>
              </div>

              <div className="flex items-center gap-2">
                <ShoppingBag size={20} />
                <span>Cart</span>
              </div>
            </div>
          </div>

         
        </div>
      )}
    </header>
  );
}
