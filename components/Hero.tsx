"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, BookOpen, User, LayoutDashboard, BrainCircuit, Target, BarChart2, CheckCircle2, Bookmark, Users, PlayCircle, Folder, LayoutTemplate } from "lucide-react";
import DashboardMockup from "./DashboardMockup";

export default function Hero() {
    const router = useRouter();



    return (
        <section
            className="relative min-h-screen flex flex-col items-center justify-start text-center px-4 pt-8 animate-fadeIn overflow-hidden"
            style={{
                background: "linear-gradient(to bottom, #f0f7fa 0%, #e2f1f8 50%, #ffffff 100%)",
            }}
        >
            {/* Subtle Full Background */}
            <div 
                className="absolute inset-0 z-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: "url('/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Grassy Background at the bottom */}
            <div 
                className="absolute bottom-0 left-0 w-full h-[30vh] md:h-[40vh] z-20 pointer-events-none"
                style={{
                    backgroundImage: "url('/bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat"
                }}
            />



            {/* Hero Main Content */}
            <div className="relative z-30 pt-28 pb-10 flex flex-col items-center">
                
                {/* Badge */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 px-4 py-1.5 rounded-full bg-white border border-teal-200 text-sm font-medium text-[#64bdbd] flex items-center gap-2 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                >
                    <span className="bg-teal-50 text-[#64bdbd] px-2 py-0.5 rounded-full text-xs font-semibold">New</span>
                    Join our AI-learner community <ArrowRight size={14} />
                </motion.div>

                {/* Heading */}
                <motion.h1 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl md:text-[64px] font-semibold text-slate-800 leading-[1.1] max-w-3xl tracking-tight"
                >
                    AI-powered learning <br className="hidden md:block" /> paths for everyone
                </motion.h1>
            </div>

            {/* Dashboard Mockup */}
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative z-10 w-full max-w-[1200px] mt-8 mb-32 group"
            >
                {/* Glow effect */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-sky-200/40 blur-[80px] rounded-full -z-10 transition-all duration-700 group-hover:bg-sky-300/40"></div>
                
                {/* Window container */}
                <DashboardMockup />
            </motion.div>

        </section>
    );
}