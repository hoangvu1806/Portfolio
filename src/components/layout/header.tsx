"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiMenu, FiX, FiCode } from "react-icons/fi";
import Image from "next/image";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled ? "header-blur py-3 shadow-sm" : "bg-transparent py-5"
            }`}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between">
                    <Link href="/" className="relative z-10 flex items-center">
                        <motion.div
                            className="text-2xl font-bold flex items-center"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="w-10 h-10 rounded-lg overflow-hidden mr-2">
                                <Image
                                    src="/logo.png"
                                    alt="Logo"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <span className="flex flex-col">
                                {" "}
                                <span className="logo-text">VU HOANG</span>{" "}
                                <span className="logo-subtitle">
                                    {" "}
                                    AI-DEAS FOR BRIGHT MINDS{" "}
                                </span>{" "}
                            </span>
                        </motion.div>
                    </Link>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <Link
                                    href={item.path}
                                    className={`relative text-sm font-medium transition-colors px-2 py-1 rounded-md ${
                                        pathname === item.path
                                            ? "text-primary bg-primary/20 font-semibold"
                                            : "text-gray-100 hover:text-primary"
                                    }`}
                                >
                                    {item.name}
                                    {pathname === item.path && (
                                        <motion.span
                                            layoutId="underline"
                                            className="absolute left-0 bottom-0 block h-[2px] w-full bg-primary"
                                        />
                                    )}
                                </Link>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <div className="flex items-center md:hidden">
                        <button
                            className="p-2 rounded-md bg-gray-800 text-gray-300"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label={
                                mobileMenuOpen ? "Close menu" : "Open menu"
                            }
                        >
                            {mobileMenuOpen ? (
                                <FiX size={20} />
                            ) : (
                                <FiMenu size={20} />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-gray-900 py-4 px-4 shadow-lg border border-gray-700/50"
                >
                    <nav className="flex flex-col space-y-4 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`text-base flex items-center py-2 px-3 rounded-md ${
                                    pathname === item.path
                                        ? "text-primary bg-primary/20 font-medium"
                                        : "text-gray-100 hover:bg-gray-800"
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="mr-2">•</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </motion.div>
            )}
        </header>
    );
}
