"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Brain,
  Trophy,
  Users,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Features() {
  const [active, setActive] = useState(0);

  const features = [
    {
      title: "AI-powered courses",
      icon: BookOpen,
      description:
        "Generate complete courses instantly with Biruh, your AI course agent.",
    },
    {
      title: "Real-time AI tutor",
      icon: Brain,
      description:
        "Learn with Edopis, your personal AI tutor with real-time help.",
    },
    {
      title: "Gamified learning",
      icon: Trophy,
      description:
        "Earn points, climb leaderboards, and stay motivated.",
    },
    {
      title: "Parent Controls",
      icon: Users,
      description:
        "Parents can track progress and manage learning.",
    },
  ];

  return (
    <section id="features" className="w-full">
      <div className="grid md:grid-cols-2 min-h-screen">

        {/* LEFT SIDE */}
        <div className="flex items-center justify-end bg-white px-6 md:px-12 py-20 border-r border-gray-100">
          <div className="max-w-xl w-full">

            <p className="text-xs text-[#008cba] font-medium mb-3 tracking-widest flex items-center gap-2">
              <span>|</span> KEY FEATURES
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-[44px] leading-[1.15] font-semibold text-[#1a2f4a] mb-16"
            >
              Features that make learning smarter
            </motion.h2>

            <motion.div
              className="divide-y divide-gray-200"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: { transition: { staggerChildren: 0.1 } },
                hidden: {}
              }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = active === index;

                return (
                  <motion.div
                    key={index}
                    className="py-5"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 }
                    }}
                  >
                    <motion.div
                      onClick={() => setActive(index)}
                      className="flex justify-between items-center cursor-pointer group"
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center gap-3">
                        <Icon
                          className={`w-5 h-5 ${isActive
                            ? "text-[#0ea5e9]"
                            : "text-gray-600 group-hover:text-gray-900"
                            }`}
                        />
                        <span
                          className={`${isActive
                            ? "font-semibold text-gray-900"
                            : "font-medium text-gray-900"
                            }`}
                        >
                          {feature.title}
                        </span>
                      </div>

                      {isActive ? (
                        <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </motion.div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 pl-8">
                            <p className="text-gray-500 text-sm">
                              {feature.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative w-full flex items-center justify-center overflow-hidden">

          {/* BACKGROUND */}
          <div className="absolute inset-0 bg-[url('/bg.png')] bg-cover bg-bottom" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent" />

          {/* WRAPPER */}
          <div className="relative p-8">

            {/* GLASS BACKGROUND */}
            <div className="absolute inset-0 rounded-3xl bg-white/30 border border-white/40 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.15)]" />

            {/* FRONT CARD */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-[95%] sm:w-full max-w-[500px] rounded-2xl bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-7 border border-gray-100"
            >

              {/* CONTENT */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {active === 0 && (
                    <>
                      <h3 className="text-lg font-semibold mb-5">
                        AI Course System
                      </h3>

                      <div className="bg-gray-50 border rounded-xl p-4 mb-5">
                        <p className="text-sm text-gray-500">
                          Structured AI-generated courses with chapters, quizzes, and study guides.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {["Chapters", "Quizzes", "Flashcards"].map((item, i) => (
                          <div key={i} className="p-3 border rounded-lg bg-gray-50 text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {active === 1 && (
                    <>
                      <h3 className="text-lg font-semibold mb-5">
                        AI Tutor
                      </h3>

                      <div className="bg-gray-50 border rounded-xl p-4 mb-5">
                        <p className="text-sm text-gray-500">
                          Real-time tutoring with explanations and interactive help.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {["Ask questions", "Get help", "Practice"].map((item, i) => (
                          <div key={i} className="p-3 border rounded-lg bg-gray-50 text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {active === 2 && (
                    <>
                      <h3 className="text-lg font-semibold mb-5">
                        Gamification
                      </h3>

                      <div className="bg-gray-50 border rounded-xl p-4 mb-5">
                        <p className="text-sm text-gray-500">
                          Earn rewards, climb ranks, and stay motivated.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {["Earn points", "Leaderboards", "Rewards"].map((item, i) => (
                          <div key={i} className="p-3 border rounded-lg bg-gray-50 text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {active === 3 && (
                    <>
                      <h3 className="text-lg font-semibold mb-5">
                        Parent Dashboard
                      </h3>

                      <div className="bg-gray-50 border rounded-xl p-4 mb-5">
                        <p className="text-sm text-gray-500">
                          Monitor student progress and manage learning.
                        </p>
                      </div>

                      <div className="space-y-3">
                        {["Track progress", "Reports", "Subscriptions"].map((item, i) => (
                          <div key={i} className="p-3 border rounded-lg bg-gray-50 text-sm">
                            {item}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                </motion.div>
              </AnimatePresence>

            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}