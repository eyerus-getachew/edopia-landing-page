"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Header() {
    const router = useRouter();

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        // Only run on the home page when navigating to sections
        if (window.location.pathname !== '/') {
            router.push(`/#${targetId}`);
            return;
        }

        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
            // Include an offset for the fixed header
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-8">
                
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0 cursor-pointer">
                    <img src="/nobg.png" alt="Edopia Logo" className="w-10 h-10 object-contain drop-shadow-sm" />
                    <span className="font-bold text-xl text-slate-800 tracking-tight">Edopia</span>
                </Link>

                {/* Menu */}
                <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium text-sm whitespace-nowrap">
                    <motion.a 
                        href="#features" 
                        onClick={(e) => scrollToSection(e, "features")}
                        whileHover={{ scale: 1.05, color: "#1f2937" }} 
                        className="transition-colors cursor-pointer"
                    >
                        Features
                    </motion.a>
                    <motion.a 
                        href="#pricing"
                        onClick={(e) => scrollToSection(e, "pricing")}
                        whileHover={{ scale: 1.05, color: "#1f2937" }} 
                        className="transition-colors cursor-pointer"
                    >
                        Plans & Pricing
                    </motion.a>
                    <motion.a 
                        href="#resources"
                        onClick={(e) => scrollToSection(e, "resources")}
                        whileHover={{ scale: 1.05, color: "#1f2937" }} 
                        className="transition-colors flex items-center gap-1 cursor-pointer"
                    >
                        Resources <ChevronDown size={14} className="text-gray-400" />
                    </motion.a>

                    <motion.a 
                        href="#about"
                        onClick={(e) => scrollToSection(e, "about")}
                        whileHover={{ scale: 1.05, color: "#1f2937" }} 
                        className="transition-colors cursor-pointer"
                    >
                        About
                    </motion.a>
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 flex-shrink-0">
                    <motion.button
                        onClick={() => router.push("/login")}
                        whileHover={{ scale: 1.05, backgroundColor: "#f8fafc" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 text-sm font-medium border border-gray-200 rounded-lg text-gray-700 bg-white transition-all shadow-sm"
                    >
                        Sign-in
                    </motion.button>
                    <motion.button
                        onClick={() => router.push("/login")}
                        whileHover={{ scale: 1.05, backgroundColor: "#4a9191" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 text-sm font-medium rounded-lg bg-[#64bdbd] text-white shadow-md transition-colors"
                    >
                        Get started
                    </motion.button>
                </div>
            </div>
        </header>
    );
}
