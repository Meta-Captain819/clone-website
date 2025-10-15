"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    const socialIcons = [
        { Icon: MdEmail, label: "Email" },
        { Icon: FaFacebookF, label: "Facebook" },
        { Icon: FaInstagram, label: "Instagram" },
        { Icon: FaLinkedinIn, label: "LinkedIn" },
        { Icon: FaPinterestP, label: "Pinterest" },
        { Icon: FaTiktok, label: "TikTok" },
        { Icon: FaWhatsapp, label: "WhatsApp" },
        { Icon: FaYoutube, label: "YouTube" },
    ];

    return (
        <footer className="bg-white text-gray-800">


            {/* Footer Links */}
            <div className="bg-gray-100/50">
                <div className="max-w-[1420px] mx-auto px-6 lg:px-12 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1">
                    {/* Follow Us */}
                    <div>
                        <h3 className=" mb-4">Follow us</h3>
                        <div className="flex flex-wrap gap-3">
                            {socialIcons.map(({ Icon, label }, i) => (
                                <div
                                    key={i}
                                    className="w-7 h-7 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                                    aria-label={label}
                                >
                                    <Icon />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Find It Fast */}
                    <div>
                        <h3 className=" mb-4">Find It Fast</h3>
                        <ul className="space-y-2 text-gray-800 text-sm">
                            <li><a href="#" className="hover:underline">Latest Blogs</a></li>
                            <li><a href="#" className="hover:underline">FAQ’s</a></li>
                        </ul>
                    </div>

                    {/* Important Links */}
                    <div>
                        <h3 className=" mb-4">Important Links</h3>
                        <ul className="space-y-2 text-gray-800 text-sm">
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                            <li><a href="#" className="hover:underline">Shipping charges</a></li>
                            <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                        </ul>
                    </div>

                    {/* Hot Links */}
                    <div>
                        <h3 className=" mb-4">Hot Links</h3>
                        <ul className="space-y-2 text-gray-800 text-sm">
                            <li><a href="#" className="hover:underline">My Account</a></li>
                            <li><a href="#" className="hover:underline">Checkout</a></li>
                            <li><a href="#" className="hover:underline">Your Cart</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className=" mb-4">Contact Info</h3>
                        <ul className="space-y-3 text-gray-800 text-sm">
                            <li><a href="tel:+971585121105" className=" hover:underline">Mobile: +971 58 512 1105</a></li>
                            <li><a href="mailto:info@greensouq.ae" className=" hover:underline">Email: info@greensouq.ae</a></li>

                        </ul>
                    </div>
                </div>

                {/* Contact Info + Payment */}
                <div className="max-w-[1420px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center  py-6 text-sm">
                    {/* Copyright */}
                <div className="  text-gray-700 text-xs  py-4">
                    <p>Copyright © 2025 Greensouq.</p>
                    <p>Powered by Shopify</p>
                </div>

                    <div className="flex gap-2">
                        <Image src="/images/amex.svg" alt="Amex" width={48} height={48} className="h-12 w-auto" />
                        <Image src="/images/master-card.svg" alt="Mastercard" width={48} height={48} className="h-12 w-auto" />
                        <Image src="/images/visa.svg" alt="Visa" width={48} height={48} className="h-12 w-auto" />
                    </div>
                </div>

              
            </div>
        </footer>
    );
}
