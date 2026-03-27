"use client";
import { motion } from "framer-motion";

export default function Features() {
    return (
        <section id="features" className="py-32 px-6 bg-white">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT SIDE */}
                <div>

                    <p className="text-sm text-[#64bdbd] font-medium mb-4">
                        KEY FEATURES
                    </p>

                    <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10">
                        Features that make learning smarter
                    </h2>

                    {/* Feature list */}
                    <div className="space-y-6">

                        <div className="border-b pb-4 flex justify-between items-center">
                            <span className="text-gray-800 font-medium">
                                Adaptive progress engine
                            </span>
                            <span>⌄</span>
                        </div>

                        <div className="border-b pb-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-900 font-medium">
                                    Personalized learning paths
                                </span>
                                <span>⌃</span>
                            </div>

                            <p className="text-gray-500 text-sm mt-3">
                                Edopia builds a step-by-step roadmap based on your skills,
                                learning goals, and time commitment.
                            </p>

                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-4 px-4 py-2 border rounded-full text-sm transition-colors hover:bg-gray-50">
                                Learn more →
                            </motion.button>
                        </div>

                        <div className="border-b pb-4 flex justify-between items-center">
                            <span className="text-gray-800 font-medium">
                                AI-chat assistant
                            </span>
                            <span>⌄</span>
                        </div>

                        <div className="border-b pb-4 flex justify-between items-center">
                            <span className="text-gray-800 font-medium">
                                Smart tracking & reminders
                            </span>
                            <span>⌄</span>
                        </div>

                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="relative  h-[500px] flex items-center justify-center">

                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-100 to-blue-100 rounded-3xl blur-2xl opacity-50" />
                    {/* Background image */}
                    <div
                        className="absolute inset-0 rounded-3xl overflow-hidden"
                        style={{
                            backgroundImage: "url('/bg.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />

                    {/* Dark overlay for readability */}
                    <div className="absolute inset-0 bg-white/40 rounded-3xl" />
                    {/* Card */}
                    <div className="relative bg-white rounded-3xl shadow-xl p-6 border">

                        <h3 className="font-semibold text-gray-900 mb-4">
                            Fundamentals
                        </h3>

                        {/* Module overview */}
                        <div className="border rounded-xl p-4 mb-4">
                            <h4 className="font-medium text-gray-800 mb-2">
                                Module overview
                            </h4>
                            <p className="text-sm text-gray-500">
                                Learn the core concepts of programming, Git, and data types.
                            </p>

                            <div className="flex gap-3 mt-3 text-xs text-gray-600">
                                <span className="px-2 py-1 border rounded">4 Modules</span>
                                <span className="px-2 py-1 border rounded">12 days</span>
                            </div>
                        </div>

                        {/* List */}
                        <div className="space-y-3">

                            <div className="flex justify-between items-center border rounded-lg p-3">
                                <span>Programming basics</span>
                                <span className="text-sm text-gray-500">3 days</span>
                            </div>

                            <div className="flex justify-between items-center border rounded-lg p-3">
                                <span>Terminal & CLI</span>
                                <span className="text-sm text-gray-500">2 days</span>
                            </div>

                            <div className="flex justify-between items-center border rounded-lg p-3">
                                <span>Git & version control</span>
                                <span className="text-sm text-gray-500">3 days</span>
                            </div>

                            <div className="flex justify-between items-center border rounded-lg p-3">
                                <span>Data types & variables</span>
                                <span className="text-sm text-gray-500">4 days</span>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}