"use client";
import React from "react";
import { Code2, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import {
    LayoutDashboard,
    Target,
    BarChart2,
    HelpCircle,
    Bell,
    Settings,
    MessageSquare,
    BookMarked,
    Users,
    PlayCircle,
    ChevronDown,
    Search,
    Sparkles,
    X
} from "lucide-react";
import dynamic from "next/dynamic";

const ProgressChart = dynamic(() => import("./ProgressChart"), { ssr: false });

const PROGRESS_DATA = [
    { name: "Fundamentals", value: 10, color: "#1199a4" },
    { name: "Back-End Basics", value: 25, color: "#0ea5e9" },
    { name: "Database", value: 15, color: "#3b82f6" },
    { name: "Authentication", value: 20, color: "#6366f1" },
];

export default function Hero() {
    return (
        <section
            className="relative min-h-screen flex flex-col items-center pt-20 pb-32 overflow-hidden bg-[#fdfdfd]"
            style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: "cover",
                backgroundPosition: "top",
            }}
        >
            {/* TOP PILL */}
            <div className="mb-8 bg-white/80 backdrop-blur border border-gray-200 px-4 py-1.5 rounded-full flex items-center gap-2 text-[13px] font-medium text-gray-600 shadow-sm">
                <span className="text-teal-600 font-bold">New</span>
                <span className="text-gray-300">|</span>
                Join our AI-learner community <span className="ml-1">→</span>
            </div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[52px] md:text-[60px] leading-[1.1] font-bold text-[#0f172a] text-center mb-12 tracking-tight"
            >
                AI-powered learning <br /> paths for everyone
            </motion.h1>

            {/* MAIN DASHBOARD CONTAINER */}
            <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-[95%] max-w-[950px] rounded-3xl border border-gray-200/70 bg-white/90 backdrop-blur-xl 
                  shadow-[0_20px_60px_rgba(0,0,0,0.06),0_2px_6px_rgba(0,0,0,0.04)] 
                  overflow-hidden flex flex-col"
            >
                {/* GLOBAL HEADER */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100/80 bg-white/70 backdrop-blur">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <img
                                src="/nobg.png"
                                alt="Edopia logo"
                                className="w-8 h-8 object-contain"
                            />
                            <span className="font-bold text-sm tracking-tight">Edopia</span>
                        </div>
                        <div className="text-[11px] text-gray-400">
                            Add new path / <span className="text-gray-900 font-medium">Back-end dev</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400">
                        <Search className="w-4 h-4" />
                        <Bell className="w-4 h-4" />
                        <div className="flex items-center gap-1 px-2 py-1 border rounded-md text-[11px]">
                            <HelpCircle className="w-3 h-3" /> Help
                        </div>
                    </div>
                </div>

                <div className="flex h-[500px]">
                    {/* LEFT SIDEBAR */}
                    <aside className="w-[230px] border-r border-gray-100/70 px-4 py-5 flex flex-col gap-8 bg-gradient-to-b from-gray-50 to-white">
                        {/* User Profile */}
                        <div className="flex items-center gap-3 p-2 bg-white border border-gray-100 rounded-xl">
                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center font-bold text-xs">HJ</div>
                            <div className="overflow-hidden">
                                <p className="text-xs font-bold truncate">Henry Joe</p>
                                <p className="text-[10px] text-gray-400 truncate">henry@gmail.com</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <SidebarSection title="MAIN MENU">
                                <SidebarLink icon={<LayoutDashboard size={14} />} label="Dashboard" active />
                                <SidebarLink icon={<Sparkles size={14} />} label="AI personal coach" />
                                <SidebarLink icon={<Target size={14} />} label="My goals" />
                                <SidebarLink icon={<BarChart2 size={14} />} label="Progress & stats" />
                            </SidebarSection>

                            <SidebarSection title="LEARNING ASSETS">
                                <SidebarLink icon={<BookMarked size={14} />} label="Saved modules" />
                                <SidebarLink icon={<Users size={14} />} label="Community" badge="New" />
                                <SidebarLink icon={<PlayCircle size={14} />} label="Watch later" />
                            </SidebarSection>
                        </div>
                    </aside>

                    {/* CENTER CONTENT */}
                    <main className="flex-1 p-6 overflow-y-auto">
                        <div className="flex items-start justify-between mb-8">
                            <div className="flex gap-4">
                                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center">
                                    <LayoutDashboard className="text-cyan-500 w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900">Back-end developer learning path</h2>
                                    <p className="text-[11px] text-gray-400 max-w-md mt-1">
                                        Start from <span className="text-cyan-600">server basics, node.js, express, databases, deployment</span>.
                                    </p>
                                    <div className="flex gap-2 mt-4">
                                        <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg text-xs font-bold">Start learning</button>
                                        <button className="border border-gray-200 px-4 py-2 rounded-lg text-xs font-bold">Edit preference</button>
                                    </div>
                                </div>
                            </div>

                            {/* Current Skill Card */}
                            <div className="grid grid-cols-2 gap-x-8 gap-y-2 bg-gray-50/50 p-4 rounded-xl border border-gray-100 text-[11px]">
                                <div>
                                    <p className="text-gray-400">Deadline</p>
                                    <p className="font-bold">3 months</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Learning goal</p>
                                    <p className="font-bold">Back-end dev</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Available Time</p>
                                    <p className="font-bold">1-2 Hours/day</p>
                                </div>
                                <div>
                                    <p className="text-gray-400">Current level</p>
                                    <p className="font-bold">Beginner</p>
                                </div>
                            </div>
                        </div>

                        {/* TABS */}
                        <div className="flex gap-2 mb-6 p-1 bg-gray-50 w-fit rounded-xl border border-gray-100">
                            {["Curriculums", "Syntax & tools", "Project-based", "Assesment", "Tutorials"].map((tab, i) => (
                                <button key={tab} className={`px-4 py-2 rounded-lg text-[11px] font-bold ${i === 0 ? "bg-white shadow-sm" : "text-gray-400"}`}>
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* GRID MODULES & PROGRESS */}
                        <div className="grid grid-cols-5 gap-6">
                            <div className="col-span-3 space-y-4">
                                <div className="border border-gray-100 rounded-xl overflow-hidden">
                                    <div className="flex justify-between items-center p-4 bg-gray-50/50">
                                        <h3 className="text-sm font-bold">Fundamentals</h3>
                                        <ChevronDown size={14} className="text-gray-400" />
                                    </div>
                                    <div className="p-4 space-y-4">
                                        <div className="bg-blue-50/30 p-4 rounded-xl">
                                            <p className="text-xs font-bold mb-1">Module overview</p>
                                            <p className="text-[11px] text-gray-500 leading-relaxed">Learn the core concepts of programming, terminal commands, Git, and basic data types - the foundation for every back-end developer.</p>
                                            <div className="flex gap-2 mt-3">
                                                <span className="text-[10px] px-2 py-1 bg-white border rounded-md font-medium flex items-center gap-1"><BookMarked size={10} /> 4 Modules</span>
                                                <span className="text-[10px] px-2 py-1 bg-white border rounded-md font-medium flex items-center gap-1"><Target size={10} /> 12 days</span>
                                            </div>
                                        </div>
                                        <LessonItem icon={<Code2 size={16} />} title="Programming basics" time="3 days" />
                                        <LessonItem icon={<Terminal size={16} />} title="Terminal & CLI" time="2 days" />
                                    </div>
                                </div>
                            </div>

                            {/* Percentage Donut */}
                            <div className="col-span-2 bg-white border border-gray-100 rounded-xl p-4">
                                <p className="text-[11px] font-bold mb-4">Percentage</p>
                                <div className="h-[140px] relative">
                                    <ProgressChart data={PROGRESS_DATA} />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-[9px] text-gray-400">Total of</span>
                                        <span className="text-[11px] font-bold">43 Sub-modules</span>
                                    </div>
                                </div>
                                <div className="mt-4 space-y-2">
                                    {PROGRESS_DATA.map(item => (
                                        <div key={item.name} className="flex justify-between items-center text-[10px]">
                                            <div className="flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                                                <span className="text-gray-500">{item.name}</span>
                                            </div>
                                            <div className="flex gap-4">
                                                <span className="font-bold">{item.value / 2.5}</span>
                                                <span className="text-gray-300">{item.value}%</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* RIGHT SIDEBAR - AI COACH */}
                    <aside className="w-[300px] border-l border-gray-100 bg-[#f8fbff] p-5 flex flex-col gap-4">
                        <div className="bg-white border border-blue-100 rounded-xl p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <Sparkles size={14} className="text-cyan-500" />
                                    <span className="text-xs font-bold">Microten AI</span>
                                </div>
                                <X size={12} className="text-gray-300" />
                            </div>
                            <p className="text-[10px] text-gray-500 leading-relaxed">
                                Our AI already trained to be your assistant in creating a comfortable learning flow, just tell it and see the results.
                            </p>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto">
                            <ChatMessage
                                role="ai"
                                text="Based on your input, here's your personalized learning goal: Back-End Developer"
                                time="10:25 AM"
                            />
                            <ChatMessage
                                role="ai"
                                text="I'll guide you through modules like programming basics, let's break it down:"
                                list={["Fundamentals", "Back-End Basics", "Database"]}
                            />
                            <ChatMessage
                                role="user"
                                text="Sound good! It's awesome"
                                time="10:26 AM"
                            />
                        </div>

                        <div className="bg-white border border-gray-200 p-3 rounded-xl flex items-center justify-between shadow-sm">
                            <span className="text-xs text-gray-400">Type message...</span>
                            <div className="w-6 h-6 bg-cyan-500 rounded-lg flex items-center justify-center text-white">
                                <MessageSquare size={12} />
                            </div>
                        </div>
                    </aside>
                </div>
            </motion.div>
        </section>
    );
}

// Helpers
function SidebarSection({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="space-y-1">
            <p className="text-[9px] font-bold text-gray-400 mb-2 tracking-wider px-2">{title}</p>
            {children}
        </div>
    );
}

function SidebarLink({ icon, label, active = false, badge }: { icon: any, label: string, active?: boolean, badge?: string }) {
    return (
        <div className={`
flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-200
${active
                ? "text-cyan-600 bg-white shadow-sm border border-gray-100"
                : "text-gray-500 hover:bg-white hover:shadow-sm hover:text-gray-700"
            }
`}>
            <div className="flex items-center gap-2 text-[11px] font-bold">
                {icon} {label}
            </div>
            {badge && <span className="text-[8px] px-1.5 py-0.5 bg-blue-50 text-blue-500 rounded-full font-bold">{badge}</span>}
        </div>
    );
}

function LessonItem({ icon, title, time }: { icon: React.ReactNode, title: string, time: string }) {
    return (
        <div className="flex justify-between items-center p-3 border border-gray-50 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                    {icon}
                </div>
                <span className="text-[11px] font-bold text-gray-700">{title}</span>
            </div>
            <span className="text-[10px] text-gray-400">{time}</span>
        </div>
    );
}

function ChatMessage({ role, text, time, list }: { role: 'ai' | 'user', text: string, time?: string, list?: string[] }) {
    return (
        <div className={`flex flex-col ${role === 'user' ? 'items-end' : 'items-start'} gap-1`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-[11px] leading-relaxed ${role === 'ai' ? 'bg-white border border-gray-100' : 'bg-orange-500 text-white'}`}>
                {text}
                {list && (
                    <ul className="mt-2 space-y-1 list-disc pl-4">
                        {list.map(l => <li key={l}>{l}</li>)}
                    </ul>
                )}
            </div>
            {time && <span className="text-[9px] text-gray-300">{time}</span>}
        </div>
    );
}