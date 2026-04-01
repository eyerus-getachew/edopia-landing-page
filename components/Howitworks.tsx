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
} from "lucide-react";

export default function HeroDashboard() {
  return (
    <section
      className="relative min-h-screen flex items-start pt-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      {/* MAIN CONTAINER */}
      <div className="w-full max-w-7xl mx-auto px-6 flex items-start justify-between gap-20">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-[380px]"
        >
          <h1 className="text-[48px] leading-[1.15] font-semibold text-[#0b2239] tracking-[-0.5px]">
            What are you
            <br />
            waiting for, get
            <br />
            started now
          </h1>

          <div className="mt-5 flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 h-[42px] text-sm font-medium text-white rounded-md 
              bg-gradient-to-b from-[#2ec0da] to-[#0891bb] 
              shadow-md hover:shadow-lg transition"
            >
              Try 7-days free trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 h-[42px] text-sm font-medium bg-white border border-gray-300 rounded-md 
              hover:bg-gray-50 shadow-sm hover:shadow-md transition"
            >
              View pricing plan
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative w-[760px] mt-[-20px]"
        >

          {/* FLOATING EFFECT */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >

            {/* CARD */}
            <div className="bg-white rounded-xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden border border-gray-200/70">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-sky-600" />
                  <span className="text-sm font-semibold">Edopia</span>
                </div>

                <span className="text-xs text-gray-500">
                  Add new path /{" "}
                  <span className="bg-gray-100 px-2 py-1 rounded-md">
                    Back-end dev
                  </span>
                </span>
              </div>

              {/* BODY */}
              <div className="grid grid-cols-[220px_1fr] min-h-[460px]">

                {/* SIDEBAR */}
                <div className="border-r border-gray-200 p-4 bg-white">

                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-9 h-9 border rounded-md flex items-center justify-center text-xs font-bold">
                      HJ
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Henry Joe</p>
                      <p className="text-xs text-gray-500">
                        Henry@gmail.com
                      </p>
                    </div>
                  </div>

                  <p className="text-[11px] uppercase tracking-wider text-gray-400 mb-2">
                    Main menu
                  </p>

                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2 font-semibold text-gray-900">
                      <LayoutDashboard className="w-4 h-4" /> Dashboard
                    </li>
                    <li className="flex items-center gap-2 hover:text-gray-900 transition">
                      <Target className="w-4 h-4" /> AI coach
                    </li>
                    <li className="flex items-center gap-2 hover:text-gray-900 transition">
                      <Flag className="w-4 h-4" /> My goals
                    </li>
                    <li className="flex items-center gap-2 hover:text-gray-900 transition">
                      <BarChart2 className="w-4 h-4" /> Progress
                    </li>
                  </ul>

                  <p className="text-[11px] uppercase tracking-wider text-gray-400 mt-6 mb-2">
                    Learning assets
                  </p>

                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-center gap-2 hover:text-gray-900 transition">
                      <BookOpen className="w-4 h-4" /> Modules
                    </li>
                    <li className="flex items-center gap-2 hover:text-gray-900 transition">
                      <Users className="w-4 h-4" /> Community
                    </li>
                    <li className="flex items-center gap-2 hover:text-gray-900 transition">
                      <Clock className="w-4 h-4" /> Watch later
                    </li>
                  </ul>
                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    Back-end developer learning path
                  </motion.h2>

                  <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                    Start from{" "}
                    <span className="text-[#0891bb]">
                      server basics, node.js, express, databases, deployment
                    </span>
                    . Focused path generated by AI.
                  </p>

                  <div className="flex gap-3 mb-5">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-sm bg-[#0891bb] text-white rounded-md shadow-sm"
                    >
                      Start learning
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 text-sm border border-gray-300 rounded-md"
                    >
                      Edit preference
                    </motion.button>
                  </div>

                  {/* MODULE */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="border border-gray-200/70 rounded-lg p-4 bg-[#f9fbfd]"
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-gray-900">
                        Fundamentals
                      </h3>
                      <span className="text-gray-400">⌃</span>
                    </div>

                    <p className="text-sm font-medium mt-2">
                      Module overview
                    </p>

                    <p className="text-sm text-gray-500 mt-2">
                      Learn the core concepts of programming, terminal commands,
                      Git, and data types.
                    </p>

                    <div className="flex gap-2 mt-3 text-xs">
                      <span className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-md">
                        4 Modules
                      </span>
                      <span className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-md">
                        12 days
                      </span>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>

      {/* GRASS */}
      <div className="absolute bottom-0 left-0 w-full h-[320px] bg-[url('/hero-bg.png')] bg-cover bg-bottom z-20 pointer-events-none" />
    </section>
  );
}