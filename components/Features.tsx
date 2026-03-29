"use client";
import { motion } from "framer-motion";
import {
  BarChart2,
  Target,
  MessageSquare,
  Timer,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Clock,
  Code2,
} from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm text-[#008cba] font-medium mb-4 tracking-wide flex items-center gap-2">
            <span className="font-light opacity-90" aria-hidden>|</span>
            KEY FEATURES
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 mb-10">
            Features that make learning smarter
          </h2>

          {/* Feature list */}
          <div className="divide-y divide-gray-200 border-t border-gray-200">

            <div className="py-4 flex justify-between items-center gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <BarChart2
                  className="w-5 h-5 shrink-0 text-gray-900"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-gray-800 font-medium">Adaptive progress engine</span>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} aria-hidden />
            </div>

            <div className="py-4">
              <div className="flex justify-between items-center gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <Target
                    className="w-5 h-5 shrink-0 text-gray-900"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <span className="text-gray-900 font-medium">Personalized learning paths</span>
                </div>
                <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="text-gray-500 text-sm mt-3 pl-8">
                Edopia builds a step-by-step roadmap based on your skills, learning goals, and time commitment.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 ml-8 px-4 py-2 border border-gray-200 rounded-full text-sm transition-colors hover:bg-gray-50"
              >
                Learn more →
              </motion.button>
            </div>

            <div className="py-4 flex justify-between items-center gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <MessageSquare
                  className="w-5 h-5 shrink-0 text-gray-900"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-gray-800 font-medium">AI-chat assistant</span>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} aria-hidden />
            </div>

            <div className="py-4 flex justify-between items-center gap-4">
              <div className="flex items-center gap-3 min-w-0">
                <Timer
                  className="w-5 h-5 shrink-0 text-gray-900"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <span className="text-gray-800 font-medium">Smart tracking & reminders</span>
              </div>
              <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} aria-hidden />
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — bg fills frame; card inset at medium width */}
        <div className="relative h-[540px] w-full min-w-0 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-white/20" />

          <div className="relative z-10 flex h-full items-center justify-center px-4 py-5 sm:px-6 sm:py-6">
            <div className="w-full max-w-md max-h-[94%] overflow-y-auto rounded-2xl bg-white/90 backdrop-blur-md shadow-xl p-5 sm:p-6 border border-gray-200/80">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Fundamentals</h3>
                <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" strokeWidth={1.5} aria-hidden />
              </div>

              <div className="border rounded-xl p-4 mb-4 bg-white/60">
                <h4 className="font-medium text-gray-800 mb-2">Module overview</h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Learn the core concepts of programming, terminal commands, Git, and basic data types — the foundation for every back-end developer.
                </p>
                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-[#008cba] border border-sky-100 font-medium">
                    <BookOpen className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden />
                    4 Modules
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-sky-50 text-[#008cba] border border-sky-100 font-medium">
                    <Clock className="w-3.5 h-3.5" strokeWidth={1.5} aria-hidden />
                    12 days
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 border rounded-lg p-3 bg-white/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <span className="flex-1 text-gray-900 font-medium text-sm">Programming basics</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded shrink-0">3 days</span>
                </div>
                <div className="flex items-center gap-3 border rounded-lg p-3 bg-white/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <span className="flex-1 text-gray-900 font-medium text-sm">Terminal & CLI</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded shrink-0">2 days</span>
                </div>
                <div className="flex items-center gap-3 border rounded-lg p-3 bg-white/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <span className="flex-1 text-gray-900 font-medium text-sm">Git & version control</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded shrink-0">3 days</span>
                </div>
                <div className="flex items-center gap-3 border rounded-lg p-3 bg-white/80">
                  <div className="w-9 h-9 rounded-lg bg-orange-500 flex items-center justify-center shrink-0">
                    <Code2 className="w-4 h-4 text-white" strokeWidth={2} aria-hidden />
                  </div>
                  <span className="flex-1 text-gray-900 font-medium text-sm">Data types & variables</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded shrink-0">4 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
