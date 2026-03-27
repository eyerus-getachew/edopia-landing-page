"use client";
import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section id="pricing" className="py-32 px-6 bg-[#f3f6f9] text-center">

            {/* Label */}
            <p className="text-sm text-[#64bdbd] mb-4 font-medium tracking-wide">
                PLAN & PRICINGS
            </p>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-20 max-w-3xl mx-auto">
                Start learning with AI, select your plan
            </h2>

            {/* Outer container */}
            <div className="max-w-6xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden p-4">

                <div className="grid md:grid-cols-4">

                    {/* LEFT FEATURES */}
                    <div className="hidden md:flex flex-col justify-end text-left px-6 pb-6 text-sm text-gray-500 gap-6">
                        <p>Access to learning path</p>
                        <p>AI Assistant</p>
                        <p>Customization</p>
                        <p>Learning Insights</p>
                        <p>Path Updates</p>
                        <p>Usage</p>
                    </div>

                    {/* FREE */}
                    <div className="border rounded-2xl p-6 text-left flex flex-col">

                        <h3 className="font-semibold text-gray-900">Free plan</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            Basic features to get started
                        </p>

                        <div className="mt-6">
                            <p className="text-3xl font-bold">$0.00</p>
                            <p className="text-sm text-gray-400">Forever</p>
                        </div>

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 w-full py-2.5 rounded-full border text-sm transition-colors hover:bg-gray-50">
                            Get started →
                        </motion.button>

                        <div className="mt-8 space-y-6 text-sm text-gray-600">
                            <p>Limited</p>
                            <p>Basic</p>
                            <p>Limited</p>
                            <p>Basic Stats</p>
                            <p>Monthly</p>
                            <p>Personal</p>
                        </div>

                    </div>

                    {/* PRO (PERFECT STYLE) */}
                    <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-teal-400 to-[#64bdbd] scale-105 shadow-lg">

                        <div className="bg-white rounded-2xl p-6 text-left flex flex-col h-full">

                            {/* Badge */}
                            <div className="absolute top-3 right-3 text-xs bg-gray-100 px-2 py-1 rounded-full">
                                • Popular
                            </div>

                            <h3 className="font-semibold text-gray-900">Pro Plan</h3>
                            <p className="text-gray-500 text-sm mt-1">
                                Unlock full AI features
                            </p>

                            <div className="mt-6">
                                <p className="text-3xl font-bold">$79</p>
                                <p className="text-sm text-gray-400">/month</p>
                            </div>

                            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 w-full py-2.5 rounded-full bg-gradient-to-r from-[#64bdbd] to-teal-500 text-white text-sm shadow hover:from-[#4a9191] hover:to-teal-600 transition-colors">
                                Get started →
                            </motion.button>

                            <div className="mt-8 space-y-6 text-sm text-gray-600">
                                <p>Unlimited</p>
                                <p>Full Chat + Adaptive AI</p>
                                <p>Unlimited</p>
                                <p>Advanced</p>
                                <p>Weekly</p>
                                <p>Personal</p>
                            </div>

                        </div>
                    </div>

                    {/* TEAM */}
                    <div className="border rounded-2xl p-6 text-left flex flex-col">

                        <h3 className="font-semibold text-gray-900">Team Plan</h3>
                        <p className="text-gray-500 text-sm mt-1">
                            For teams & organizations
                        </p>

                        <div className="mt-6">
                            <p className="text-2xl font-bold">Custom</p>
                        </div>

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="mt-6 w-full py-2.5 rounded-full border text-sm transition-colors hover:bg-gray-50">
                            Get started →
                        </motion.button>

                        <div className="mt-8 space-y-6 text-sm text-gray-600">
                            <p>Full + Team Sync</p>
                            <p>Dedicated AI reports</p>
                            <p>Unlimited</p>
                            <p>Team-wide Reports</p>
                            <p>Weekly</p>
                            <p>Teams & Orgs</p>
                        </div>

                    </div>

                </div>
            </div>

        </section>
    );
}