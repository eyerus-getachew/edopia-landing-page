"use client";
import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/waiting-list", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const data = await res.json();

            if (res.ok) {
                setStatus("success");
                setMessage("You've been added to the waiting list successfully.");
                setEmail("");
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Failed to connect to the server.");
        }
    };

    return (
        <div className="bg-white pt-20">

            {/* TOP SECTION */}
            <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row justify-between items-start gap-12">

                {/* Pattern */}
                <img
                    src="/pattern.svg"
                    alt=""
                    className="absolute top-[-20px] right-[-20px] w-[260px] opacity-10 pointer-events-none select-none"
                />

                {/* LEFT */}
                <div className="max-w-md flex flex-col gap-6">

                    <div className="flex items-center gap-3 mb-20">
                        <img src="/logo.png" alt="Edopia logo" className="w-10 h-10 md:w-11 md:h-11" />
                        <span className="font-bold text-xl md:text-2xl text-[#1a2f4a]">Edopia</span>
                    </div>

                    <h2 className="text-4xl md:text-[2.6rem] font-medium text-black leading-[1.2]">
                        The best place for learning automation
                    </h2>

                    <div className="space-y-2 text-sm text-[#1a2f4a] pt-2">
                        <p className="flex items-center gap-2">
                            <Mail size={16} /> contact@getedopia.app
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} /> +251948435765
                        </p>
                    </div>

                </div>

                {/* RIGHT */}
                <div className="max-w-md flex flex-col mt-16 md:mt-45">

                    <h3 className="font-semibold text-[#1a2f4a] mb-2">
                        Stay connected
                    </h3>

                    <p className="text-sm text-[#6b7280] mb-5 leading-relaxed">
                        Sign up for our waiting list to receive the latest news,
                        updates, and insights on learning solutions
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your mail"
                                disabled={status === "loading"}
                                className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 outline-none focus:ring-2 focus:ring-[#0ea5c6]/20 disabled:opacity-50"
                                required
                            />
                            <motion.button
                                type="submit"
                                disabled={status === "loading"}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#0ea5c6] text-white px-5 py-2.5 rounded-lg hover:bg-[#0b8aa3] transition-all duration-200 disabled:opacity-50"
                            >
                                {status === "loading" ? "Submitting..." : "Submit"}
                            </motion.button>
                        </div>

                        {message && (
                            <p className={`text-sm mt-1 font-medium ${status === "success" ? "text-green-600" : "text-red-500"}`}>
                                {message}
                            </p>
                        )}
                    </form>

                </div>
            </div>

            {/* LINKS SECTION */}
            <div className="bg-[#f5f7fa] py-14 px-6 md:px-10">
                <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-sm text-[#6b7280]">

                    <div>
                        <h4 className="font-semibold text-[#1a2f4a] mb-4">Menus</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Features</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">How it works</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Pricing</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Testimonials</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Custom</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#1a2f4a] mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-[#0ea5c6] cursor-pointer">About Us</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Our service</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Careers</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Teams</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#1a2f4a] mb-4">Connect</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Instagram</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">X (Twitter)</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Facebook</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#1a2f4a] mb-4">Resources</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Blog</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Help Center</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Case Studies</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">API Docs</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Release Notes</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-[#1a2f4a] mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Terms of Service</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-[#0ea5c6] cursor-pointer">Cookie Policy</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* BOTTOM */}
            <div className="bg-white border-t border-gray-200 text-center py-6 text-sm text-[#6b7280]">
                © 2026 Edopia. All rights reserved.
            </div>

        </div>
    );
}