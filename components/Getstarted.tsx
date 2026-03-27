"use client";
import React from "react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";

export default function Getstarted() {
    return (
        <div className="relative min-h-[90vh] w-full overflow-hidden font-sans flex items-center justify-center mb-10 pt-20">

            {/* SKY BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#e2f1f8] to-[#d0e8f2]"></div>

            {/* CONTENT CONTAINER */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col md:flex-row items-center px-6 lg:px-12 h-full gap-10 lg:gap-20">

                {/* LEFT TEXT */}
                <div className="w-full md:w-5/12 z-30 flex-shrink-0 pt-10 pb-32">
                    <h2 className="text-5xl md:text-[56px] font-bold text-[#0f172a] leading-[1.15] mb-8 tracking-tight">
                        What are you <br/> waiting for, get <br/> started now
                    </h2>

                    <div className="flex gap-4">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#64bdbd] text-white px-6 py-3.5 rounded-xl font-medium shadow-md hover:bg-[#4a9191] transition">
                            Try 7-days free trial
                        </motion.button>

                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-white border border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl font-medium shadow-sm hover:bg-gray-50 transition">
                            View pricing plan
                        </motion.button>
                    </div>
                </div>

                {/* RIGHT DASHBOARD MOCK */}
                <div className="relative w-full md:w-1/2 flex justify-center items-center z-10 mt-10 md:mt-0">
                    <div className="w-[120%] max-w-[800px] transform md:translate-x-10 translate-y-10 shadow-2xl rounded-2xl overflow-hidden">
                        <DashboardMockup />
                    </div>
                </div>

            </div>

            {/* GRASS IMAGE (BOTTOM) */}
            <div
                className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[35vh] z-20 pointer-events-none"
                style={{ 
                    backgroundImage: "url('/bg.png')", 
                    backgroundSize: "cover", 
                    backgroundPosition: "bottom center", 
                    backgroundRepeat: "no-repeat" 
                }}
            ></div>

        </div>
    );
}