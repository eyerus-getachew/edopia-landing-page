"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
    const logos = [
        "duolingo",
        "udemy",
        "coursera",
        "skillshare",
        "futurelearn",
        "google",
        "codecademy",
        "caltech",
    ];

    return (
        <section className="py-24 bg-[#f8fafc]">

            <div className="max-w-6xl mx-auto px-6">

                {/* Label */}
                <p className="text-sm text-teal-600 font-medium mb-4 tracking-wide">
                    TRUSTED BY BRANDS
                </p>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 max-w-xl leading-tight">
                    Trusted by Top <br />
                    Educational Innovators
                </h2>

                {/* Subtext */}
                <p className="text-gray-500 mt-4 max-w-md">
                    Edopia helps top education brands personalize and scale learning with AI-driven paths.
                </p>

                {/* 🔥 BOLD GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 mt-16 border border-gray-300">

                    {logos.map((name, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.04 }}
                            className="flex items-center justify-center h-32 bg-white border border-gray-300 hover:bg-gray-50 transition"
                        >
                            <img
    src={`/logos/${name}.png`}
    alt={name}
    className="h-12 md:h-14 object-contain opacity-90 grayscale-[40%] hover:opacity-100 hover:grayscale-0 transition duration-200"
/>
                        </motion.div>
                    ))}

                </div>

            </div>

        </section>
    );
}