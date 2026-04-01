"use client";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section
            id="pricing"
            className="py-32 px-6 text-center bg-gradient-to-b from-[#f3f6f9] to-[#cfe8f3]"
        >

            {/* Label */}
            <p className="text-sm mb-4 font-medium tracking-wide 
              bg-gradient-to-b from-[#2fb3c4] via-[#1f9bb0] to-[#167e95] 
              bg-clip-text text-transparent">
                | PLAN & PRICINGS
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-16 max-w-3xl mx-auto leading-tight">
                Start learning with <br className="hidden md:block" />
                AI, select your plan
            </h2>

            {/* Container */}
            <div className="max-w-7xl mx-auto bg-white border border-gray-100/60 rounded-[2rem] shadow-md p-5 md:p-8">
                <div className="grid md:grid-cols-4">

                    {/* FEATURES */}
                    <div className="hidden md:flex flex-col justify-end text-left px-6 pb-6 text-[15px] text-gray-900">
                        {[
                            "Access to learning path",
                            "AI Assistant",
                            "Customization",
                            "Learning Insights",
                            "Path Updates",
                            "Usage",
                        ].map((item, i) => (
                            <p key={i} className="h-12 flex items-center">
                                {item}
                            </p>
                        ))}
                    </div>

                    {/* FREE */}
                    <div className="px-8 py-8 text-left flex flex-col border border-gray-100 rounded-2xl bg-white">

                        <h3 className="font-semibold text-gray-900">Free plan</h3>
                        <p className="text-gray-700 text-sm mt-1">
                            You can explore basic features with limited access
                        </p>

                        <div className="mt-6 flex items-baseline gap-2">
                            <p className="text-3xl font-bold text-gray-900">$0.00</p>
                            <p className="text-sm text-gray-800">Forever</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-6 w-full py-3 rounded-full border border-gray-200 text-sm bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                        >
                            Get started →
                        </motion.button>

                        <div className="mt-8 text-sm text-gray-600 -mx-8">
                            {["Limited", "Basic", "Limited", "Basic Stats", "Monthly", "Personal"].map((item, i) => (
                                <p key={i} className="h-12 flex items-center px-8 border-t-2 border-gray-100">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* PRO */}
                    <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-[#6fd3d3] to-[#4f9cf9] p-[1.5px]">

                        <div className="bg-white rounded-2xl px-8 py-8 text-left flex flex-col h-full border-x-2 border-gray-100">

                            {/* Badge */}
                            <div className="absolute top-4 right-4 p-[1.5px] rounded-full bg-gradient-to-b from-[#2fb3c4] via-[#1f9bb0] to-[#167e95]">
                                <div className="px-3 py-1 text-xs bg-white rounded-full text-gray-800">
                                    Popular
                                </div>
                            </div>

                            <h3 className="font-semibold text-gray-900">Pro Plan</h3>
                            <p className="text-gray-700 text-sm mt-1">
                                Let’s unlock full AI features and unlimited paths
                            </p>

                            <div className="mt-6 flex items-baseline gap-2">
                                <p className="text-3xl font-bold text-gray-900">$79</p>
                                <p className="text-sm text-gray-800">/month</p>
                            </div>


                            <motion.button
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="mt-6 w-full py-3 rounded-full text-white text-sm 
                                bg-gradient-to-b from-[#2fb3c4] via-[#1f9bb0] to-[#167e95]
                                shadow-sm hover:shadow-md transition
                                ring-1 ring-inset ring-white/10"
                            >
                                Get started →
                            </motion.button>

                            <div className="mt-8 text-sm text-gray-600 -mx-8">
                                {[
                                    "Unlimited",
                                    "Full Chat + Adaptive AI",
                                    "Unlimited",
                                    "Advanced",
                                    "Weekly",
                                    "Personal",
                                ].map((item, i) => (
                                    <p key={i} className="h-12 flex items-center px-8 border-t-2 border-gray-100">
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* TEAM */}
                    <div className="px-8 py-8 text-left flex flex-col border-l-2 border-gray-100">

                        <h3 className="font-semibold text-gray-900">Team Plan</h3>
                        <p className="text-gray-700 text-sm mt-1">
                            You can manage learners and track team progress.
                        </p>

                        <div className="mt-6">
                            <p className="text-2xl font-bold">Custom</p>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            className="mt-6 w-full py-3 rounded-full border border-gray-200 text-sm bg-white shadow-sm hover:shadow-md hover:bg-gray-50 transition"
                        >
                            Get started →
                        </motion.button>

                        <div className="mt-8 text-sm text-gray-900 -mx-8">
                            {[
                                "Full + Team Sync",
                                "Dedicated AI reports",
                                "Unlimited",
                                "Team-wide Reports",
                                "Weekly",
                                "Teams & Orgs",
                            ].map((item, i) => (
                                <p key={i} className="h-12 flex items-center px-8 border-t-2 border-gray-100">
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}