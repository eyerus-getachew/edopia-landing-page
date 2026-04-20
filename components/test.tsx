"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Target,
    BarChart2,
    BookOpen,
    Users,
    Clock,
    Flag,
    HelpCircle,
    Bell,
    MoreVertical
} from "lucide-react";

export default function Hero() {
    return (
        <section
            className="relative min-h-[120vh] flex flex-col items-center pt-32 pb-40 overflow-hidden"
            style={{ backgroundImage: "url('/bg.png')", backgroundSize: "cover", backgroundPosition: "top" }}
        >
            {/* PILL */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 px-5 py-2 rounded-full border border-gray-200 bg-white shadow-sm mb-8 z-10 cursor-pointer hover:shadow-md transition-shadow"
            >
                <span className="text-emerald-600 font-semibold text-sm">New</span>
                <span className="text-gray-300 text-xs">•</span>
                <span className="text-sm text-gray-700 font-medium">Join our AI-learner community →</span>
            </motion.div>

            {/* HEADLINE */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="z-10 text-center px-4"
            >
                <h1 className="text-5xl md:text-[64px] leading-[1.1] font-bold text-[#0f172a] tracking-tight">
                    AI-powered personalized<br />learning paths for developers
                </h1>
            </motion.div>

            {/* DASHBOARD MOCKUP */}
            <motion.div
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 45 }}
                className="relative mt-16 w-[95%] max-w-[1240px] z-10 bg-white rounded-2xl shadow-[0_40px_100px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden flex flex-col mx-auto"
            >
                {/* TOP BAR */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 bg-white">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#1199a4] to-teal-700 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 border-[2px] border-white rounded-sm" />
                        </div>
                        <span className="text-[15px] font-bold text-gray-900 tracking-tight">Edopia</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        Add new path / <span className="text-gray-800 font-bold bg-gray-50 px-2 py-1 rounded">Back-end dev</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <div className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700">
                            <HelpCircle className="w-3.5 h-3.5" /> Help
                        </div>
                    </div>
                </div>

                {/* 4-COLUMN CONTENT AREA */}
                <div className="flex h-[600px] bg-white">

                    {/* 1. SIDEBAR */}
                    <div className="w-[220px] border-r border-gray-100 p-5 flex-shrink-0 flex flex-col bg-white">
                        <div className="flex items-center gap-3 mb-8 border border-gray-100 rounded-xl p-2 shadow-sm">
                            <div className="w-9 h-9 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-700">
                                HJ
                            </div>
                            <div>
                                <p className="text-[13px] font-bold text-gray-900 leading-tight">Henry Joe</p>
                                <p className="text-[10px] text-gray-500">Henry@gmail.com</p>
                            </div>
                        </div>

                        <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-3 ml-2">Main menu</p>
                        <ul className="space-y-4 text-[13px] text-gray-600 mb-8 ml-2 font-medium">
                            <li className="flex items-center gap-3 text-gray-900 font-bold">
                                <LayoutDashboard className="w-[16px] h-[16px] text-gray-400" /> Dashboard
                            </li>
                            <li className="flex items-center gap-3">
                                <Target className="w-[16px] h-[16px] text-gray-400" /> AI personal coach
                            </li>
                            <li className="flex items-center gap-3">
                                <Flag className="w-[16px] h-[16px] text-gray-400" /> My goals
                            </li>
                            <li className="flex items-center gap-3">
                                <BarChart2 className="w-[16px] h-[16px] text-gray-400" /> Progress & stats
                            </li>
                            <li className="flex items-center gap-3">
                                <HelpCircle className="w-[16px] h-[16px] text-gray-400" /> Skill assessment
                            </li>
                        </ul>

                        <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mb-3 ml-2">Learning assets</p>
                        <ul className="space-y-4 text-[13px] text-gray-600 ml-2 font-medium">
                            <li className="flex items-center gap-3"><BookOpen className="w-[16px] h-[16px] text-gray-400" /> Saved modules</li>
                            <li className="flex items-center gap-3"><Users className="w-[16px] h-[16px] text-gray-400" /> Community <span className="px-1.5 py-0.5 rounded text-[8px] border border-blue-200 text-blue-600 bg-blue-50">New</span></li>
                            <li className="flex items-center gap-3"><Clock className="w-[16px] h-[16px] text-gray-400" /> Watch later</li>
                        </ul>
                    </div>

                    {/* 2 & 3 MAIN AREA */}
                    <div className="flex-1 bg-[#fcfdff] p-8 overflow-hidden flex flex-col">

                        <div className="flex gap-8 mb-6">
                            <div className="flex-1">
                                <h2 className="text-[22px] font-extrabold text-[#0f172a] mb-2">
                                    Back-end developer learning path
                                </h2>

                                <p className="text-[13px] text-gray-500 leading-relaxed font-medium mb-4 max-w-md">
                                    Start from <span className="text-[#1199a4] font-bold">server basics, Node.js, Express, databases, and deployment</span>. Your path is generated and optimized by AI based on your goals and availability.
                                </p>

                                {/* NEW INSERT */}
                                <p className="text-[12px] text-gray-400 mt-2 font-medium">
                                    Updated daily based on your progress
                                </p>

                                <div className="flex gap-3">
                                    <button className="px-5 py-2 text-[13px] font-bold bg-[#1199a4] text-white rounded-lg shadow-sm flex items-center gap-2">
                                        <Flag className="w-4 h-4" /> Start your path
                                    </button>
                                    <button className="px-5 py-2 text-[13px] font-bold bg-white border border-gray-200 text-gray-700 rounded-lg shadow-sm flex items-center gap-2">
                                        <LayoutDashboard className="w-4 h-4" /> Edit preference
                                    </button>
                                </div>
                            </div>

                            {/* Skill summary remains SAME */}
                            <div className="w-[280px] bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex-shrink-0 self-start text-[12px]">
                                <h4 className="font-bold text-gray-900 mb-3 text-[13px]">Your current skill</h4>
                                <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Deadline</p>
                                        <p className="font-semibold text-gray-900">3 months</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Learning goal</p>
                                        <p className="font-semibold text-gray-900">Back-end dev</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Available Time</p>
                                        <p className="font-semibold text-gray-900">1-2 Hours/day</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Learning Style</p>
                                        <p className="font-semibold text-gray-900">Video + Hands-on</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Current level</p>
                                        <p className="font-semibold text-gray-900">Beginner</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-400 mb-0.5">Preferred tools</p>
                                        <p className="font-semibold text-gray-900">VS Code, Git</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* REST OF YOUR MODULE + UI SECTION */}
                        {/* ⚠️ unchanged completely */}

                    </div>

                    {/* CHAT */}
                    <div className="w-[300px] border-l border-gray-100 bg-white p-5 flex flex-col shrink-0 relative">

                        <div className="border border-[#e0f2fe] bg-[#f0f9ff] rounded-xl p-4 mb-6 shadow-sm relative">
                            <div className="font-extrabold text-sky-800 text-[13px] flex items-center gap-2 mb-1">
                                <div className="w-4 h-4 rounded text-white bg-sky-500 flex items-center justify-center text-[10px]">✨</div>
                                Edopia AI
                            </div>
                            <p className="text-[12px] text-sky-700 leading-relaxed font-medium">
                                Our AI helps you build a structured, personalized learning flow. Just tell it your goal and it will guide you step-by-step.
                            </p>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-5 text-[12px] pr-2">

                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="font-bold text-gray-800">Edopia AI</span>
                                    <span className="text-[10px] text-gray-400">10:25 AM</span>
                                </div>
                                <div className="ml-8 bg-gray-50 border border-gray-100 rounded-lg rounded-tl-none p-3 text-gray-700 font-medium leading-relaxed">
                                    Based on your inputs, I've created your personalized learning path: Back-End Developer.
                                </div>
                            </div>

                            <div className="flex flex-col items-end">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-[10px] text-gray-400">10:26 AM</span>
                                    <span className="font-bold text-gray-800">You</span>
                                </div>
                                <div className="bg-[#1199a4] text-white rounded-lg rounded-tr-none px-4 py-2 font-medium">
                                    Sounds good! This is awesome.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}