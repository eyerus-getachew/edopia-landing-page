"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function TrustedBy() {
    const [active, setActive] = useState<number | null>(2); // default Coursera active

    const logos = [
        "duolingo - Copy",
        "udemy",
        "coursera - Copy",
        "skillshare - Copy",
        "futurelearn",
        "google - Copy",
        "codecademy",
        "caltech",
    ];

    return (
        <section className="py-28 bg-[#f8fafc]">

            <div className="max-w-6xl mx-auto px-6">

                {/* Label */}
                <p className="text-xs text-[#008cba] font-medium mb-3 tracking-widest flex items-center gap-2">
                    <span className="font-light opacity-90" aria-hidden> </span>
                    | TRUSTED BY BRANDS
                </p>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 max-w-xl leading-tight">
                    Trusted by Top <br />
                    Educational Innovators
                </h2>

                {/* Subtext */}
                <p className="text-gray-500 mt-5 max-w-md text-lg">
                    Edopia helps top education brands personalize
                    and scale learning with AI-driven paths
                </p>

                {/* GRID */}
                <div className="grid grid-cols-2 md:grid-cols-4 mt-20 border-t border-l border-gray-200">

                    {logos.map((name, i) => {
                        const isActive = active === i;

                        return (
                            <div
                                key={i}
                                onMouseEnter={() => setActive(i)}
                                className={`relative flex items-center justify-center h-36 
                                border-r border-b border-gray-200 
                                transition-all duration-300
                                ${isActive ? "bg-white" : "bg-transparent"}
                                `}
                            >

                                {/* ACTIVE BORDER */}
                                {isActive && (
                                    <div className="absolute inset-0 border-2 border-teal-500 pointer-events-none"></div>
                                )}

                                {/* LOGO */}
                                <img
                                    src={`/logos/${name}.png`}
                                    alt={name}
                                    className={`
                                        h-12 md:h-14 object-contain transition-all duration-300
                                        ${isActive ? "opacity-100 grayscale-0 scale-105" : "opacity-60 grayscale"}
                                    `}
                                />

                                {/* TOOLTIP (only for active item) */}
                                {isActive && name === "coursera - Copy" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="absolute right-4 top-4 bg-white rounded-xl shadow-lg p-5 w-48 border border-gray-100"
                                    >
                                        <p className="text-sm text-gray-700 mb-2">
                                            • Coursera
                                        </p>
                                        <p className="text-2xl font-semibold text-teal-600">
                                            +27%
                                        </p>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Faster course completion rates
                                        </p>
                                    </motion.div>
                                )}

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}