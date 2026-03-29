"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
            style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
          

            {/* Content */}
            <div className="relative z-10 w-full flex flex-col items-center">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-gray-200 text-sm font-medium text-gray-700 shadow-sm"
                >
                    <span className="font-semibold text-gray-900">New</span>
                    <span className="text-gray-400">•</span>
                    <span>Join our AI-learner community</span>
                    <ArrowRight size={15} className="text-gray-600" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#0f172a] leading-tight max-w-3xl tracking-tight"
                >
                    AI-powered learning paths for everyone
                </motion.h1>

                {/* Optional subtext (adds more realism like your reference) */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-4 text-gray-600 max-w-xl"
                >
                    Personalized learning journeys powered by AI. Build skills faster and smarter with Edopia.
                </motion.p>
            </div>

            {/* Dashboard Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 w-full max-w-[1100px] px-2 mt-10"
            >
                <div className="rounded-2xl shadow-2xl border border-gray-200 bg-white/80 backdrop-blur-md p-2">
                    <DashboardMockup />
                </div>
            </motion.div>
        </section>
    );
}