"use client";
import { motion } from "framer-motion";
import {
  BarChart2,
  Target,
  MessageSquare,
  Timer,
  ChevronDown,
  ChevronUp,
  Code2,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="w-full">
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="flex items-center justify-end bg-white px-6 md:px-12 py-20 border-r border-gray-100">
          <div className="max-w-xl w-full">

            <p className="text-xs text-[#008cba] font-medium mb-3 tracking-widest flex items-center gap-2">
              <span className="opacity-80">|</span>
              KEY FEATURES
            </p>

            <h2 className="text-3xl md:text-[44px] leading-[1.15] font-semibold text-[#1a2f4a] mb-16">
              Features that make learning smarter
            </h2>

            <div className="divide-y divide-gray-200">

              {/* Item 1 */}
              <div className="py-5 flex justify-between items-center cursor-pointer group">
                <div className="flex items-center gap-3">
                  <BarChart2 className="w-5 h-5 text-gray-700 group-hover:text-black" />
                  <span className="text-gray-900 font-medium">
                    Adaptive progress engine
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>

              {/* Active Item */}
              <div className="py-5">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-gray-900" />
                    <span className="text-gray-900 font-semibold">
                      Personalized learning paths
                    </span>
                  </div>
                  <ChevronUp className="w-5 h-5 text-gray-400" />
                </div>

                <p className="text-gray-500 text-sm mt-3 pl-8 leading-relaxed">
                  Edopia builds a step-by-step roadmap based on your skills,
                  learning goals, and time commitment — so you always know what
                  to do next.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-5 ml-8 px-5 py-2 rounded-lg text-sm font-medium border border-gray-200 bg-white hover:bg-gray-50 transition"
                >
                  Learn more →
                </motion.button>
              </div>

              {/* Item 3 */}
              <div className="py-5 flex justify-between items-center cursor-pointer group">
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-900 font-medium">
                    AI-chat assistant
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>

              {/* Item 4 */}
              <div className="py-5 flex justify-between items-center cursor-pointer group">
                <div className="flex items-center gap-3">
                  <Timer className="w-5 h-5 text-gray-700" />
                  <span className="text-gray-900 font-medium">
                    Smart tracking & reminders
                  </span>
                </div>
                <ChevronDown className="w-5 h-5 text-gray-400" />
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          />

          {/* VERY LIGHT DEPTH (no blur anymore) */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />

          {/* CARD SYSTEM */}
          <div className="relative flex items-center justify-center">

            {/* BACK GLASS LAYER */}
            <div className="absolute w-[540px] h-[580px] rounded-3xl bg-white/30 border border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.15)]" />

            {/* FRONT CARD */}
            <div className="relative w-[500px] rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-6 border border-gray-100">

              {/* HEADER */}
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  Fundamentals
                </h3>
                <ChevronUp className="w-5 h-5 text-gray-400" />
              </div>

              {/* OVERVIEW */}
              <div className="border border-gray-200 rounded-xl p-4 mb-5 bg-gray-50">
                <h4 className="font-medium text-gray-800 mb-2">
                  Module overview
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Learn the core concepts of programming, terminal commands,
                  Git, and basic data types — the foundation for every back-end developer.
                </p>

                <div className="flex gap-2 mt-3 text-xs">
                  <span className="px-3 py-1 rounded-md bg-white border text-[#008cba] font-medium">
                    4 Modules
                  </span>
                  <span className="px-3 py-1 rounded-md bg-white border text-[#008cba] font-medium">
                    12 days
                  </span>
                </div>
              </div>

              {/* LIST */}
              <div className="space-y-3">
                {[
                  "Programming basics",
                  "Terminal & CLI",
                  "Git & version control",
                  "Data types & variables",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-sm">
                      <Code2 className="w-4 h-4 text-white" />
                    </div>

                    <div className="flex-1">
                      <p className="text-gray-900 text-sm font-medium">
                        {item}
                      </p>
                      <p className="text-xs text-gray-500">
                        Short description here...
                      </p>
                    </div>

                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {i + 2} days
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}