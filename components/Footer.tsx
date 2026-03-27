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
        <div className="bg-[#eef2f7] pt-20">

            {/* TOP SECTION */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 flex justify-between items-start mb-10">

                {/* LEFT */}
                <div className="max-w-md">

                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-6">
                        <img src="/logo.png" alt="Edopia logo" className="w-8 h-8" />
                        <span className="font-bold text-lg">Edopia</span>
                    </div>

                    <h2 className="text-4xl font-semibold text-gray-900 mb-6 leading-snug">
                        The best place for learning automation
                    </h2>

                    <div className="space-y-2 text-sm text-gray-500">
                        <p className="flex items-center gap-2">
                            <Mail size={16} /> contact@getedopia.app
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone size={16} /> +251948435765
                        </p>
                    </div>
                </div>

                {/* RIGHT (Newsletter) */}
                <div className="max-w-sm">
                    <h3 className="font-semibold text-gray-800 mb-2">
                        Stay connected
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                        Sign up for our waiting list to receive the latest news,
                        updates, and insights on learning solutions
                    </p>

                    <form onSubmit={handleSubmit} className="flex gap-2 relative flex-col">
                        <div className="flex gap-2">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your mail"
                                disabled={status === "loading"}
                                className="flex-1 border border-gray-200 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-200 disabled:opacity-50"
                                required
                            />
                            <motion.button 
                                type="submit"
                                disabled={status === "loading"}
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="bg-[#64bdbd] text-white px-4 py-2 rounded-lg hover:bg-[#4a9191] transition flex-shrink-0 disabled:opacity-50"
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
            <div className="max-w-6xl mx-auto grid grid-cols-5 gap-10 text-sm text-gray-600 pb-10">

                {/* Menus */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Menus</h4>
                    <ul className="space-y-2">
                        <li>Features</li>
                        <li>How it works</li>
                        <li>Pricing</li>
                        <li>Testimonials</li>
                        <li>Custom</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Our service</li>
                        <li>Careers</li>
                        <li>Teams</li>
                    </ul>
                </div>

                {/* Connect */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Connect</h4>
                    <ul className="space-y-2">
                        <li>Instagram</li>
                        <li>X (Twitter)</li>
                        <li>Facebook</li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
                    <ul className="space-y-2">
                        <li>Blog</li>
                        <li>Help Center</li>
                        <li>Case Studies</li>
                        <li>API Docs</li>
                        <li>Release Notes</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
                    <ul className="space-y-2">
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>
                    </ul>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t border-gray-200 text-center py-4 text-sm text-gray-500">
                © 2026 Edopia. All rights reserved.
            </div>

        </div>
    );
}