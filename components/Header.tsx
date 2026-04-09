"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (
        e: React.MouseEvent<HTMLAnchorElement>,
        targetId: string
    ) => {
        // If NOT on homepage → navigate first
        if (pathname !== "/") {
            router.push(`/#${targetId}`);
            return;
        }

        e.preventDefault();

        const element = document.getElementById(targetId);

        if (!element) {
            console.warn(`Section with id="${targetId}" not found`);
            return;
        }

        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
        });

        // update URL without reload
        window.history.pushState(null, "", `#${targetId}`);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-lg border-b border-gray-100">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <img src="/nobg.png" alt="Edopia Logo" className="w-11 h-11 object-contain" />
                    <span className="font-bold text-xl text-[#1a2f4a] tracking-tight">
                        Edopia
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-8 text-[#6b7280] font-medium text-sm">

                    <motion.a
                        href="#hero"
                        onClick={(e) => scrollToSection(e, "hero")}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer hover:text-[#0ea5c6] transition"
                    >
                        Home
                    </motion.a>

                    <motion.a
                        href="#features"
                        onClick={(e) => scrollToSection(e, "features")}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer hover:text-[#0ea5c6] transition"
                    >
                        Features
                    </motion.a>

                    <motion.a
                        href="#pricing"
                        onClick={(e) => scrollToSection(e, "pricing")}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer hover:text-[#0ea5c6] transition"
                    >
                        Plans & Pricing
                    </motion.a>

                    <motion.a
                        href="#about"
                        onClick={(e) => scrollToSection(e, "about")}
                        whileHover={{ scale: 1.05 }}
                        className="cursor-pointer hover:text-[#0ea5c6] transition"
                    >
                        About
                    </motion.a>
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-4">

                    <motion.button
                        onClick={() => router.push("/login")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 text-sm border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm"
                    >
                        Sign in
                    </motion.button>

                    <motion.button
                        onClick={() => router.push("/login")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 text-sm rounded-lg bg-[#5FA8A6] text-white hover:bg-[#4A8F8D] shadow-sm"
                    >
                        Get started
                    </motion.button>

                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 text-gray-600 hover:text-[#0ea5c6] transition-colors focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-lg"
                    >
                        <nav className="flex flex-col items-center py-6 gap-6 text-[#1a2f4a] font-medium text-base">
                            <a href="#hero" onClick={(e) => scrollToSection(e, "hero")} className="hover:text-[#0ea5c6] transition">Home</a>
                            <a href="#features" onClick={(e) => scrollToSection(e, "features")} className="hover:text-[#0ea5c6] transition">Features</a>
                            <a href="#pricing" onClick={(e) => scrollToSection(e, "pricing")} className="hover:text-[#0ea5c6] transition">Plans & Pricing</a>
                            <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="hover:text-[#0ea5c6] transition">About</a>
                            
                            <div className="flex flex-col w-full px-8 gap-3 mt-4">
                                <button
                                    onClick={() => router.push("/login")}
                                    className="w-full py-3 text-sm border border-gray-200 rounded-lg text-gray-700 bg-white hover:bg-gray-50 shadow-sm font-semibold"
                                >
                                    Sign in
                                </button>
                                <button
                                    onClick={() => router.push("/login")}
                                    className="w-full py-3 text-sm rounded-lg bg-[#5FA8A6] text-white hover:bg-[#4A8F8D] shadow-sm font-semibold"
                                >
                                    Get started
                                </button>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}