"use client";

import React, { useState } from "react";

export default function Getstarted() {
  const [activeTime, setActiveTime] = useState("1 month-0");

  console.log("Getstarted mounted/rendered - HMR refresh triggered");

  return (
    <section className="relative w-full py-24 bg-gradient-to-b from-white via-[#f8fbfc] to-[#eef6f8] font-sans flex justify-center items-center flex-col overflow-hidden">
      {/* HEADER SECTION */}
      <div className="text-center w-full max-w-3xl mx-auto mt-8 mb-16 px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-0.5 h-3.5 bg-[#4ebcd6]" />
          <span className="text-[12px] font-bold tracking-widest text-[#4ebcd6] uppercase">
            HOW IT WORKS
          </span>
        </div>
        <h2 className="text-[32px] md:text-[44px] font-bold text-[#1e293b] mb-6 tracking-tight leading-tight">
          Beyond courses, meet <br className="hidden md:block" />
          your AI-learning strategist
        </h2>
        <p className="text-[#64748b] text-[15px] md:text-[17px] leading-relaxed max-w-2xl mx-auto">
          Edopia doesn't just give you courses. It builds a personalized
          <br className="hidden md:block" />
          learning path based on your goals, availability, and current skill level
        </p>
      </div>

      {/* MAIN CARD SECTION */}
      <div className="w-full px-4 md:px-8 max-w-[1200px] mb-24">
        {/* Container for shadows/stacking */}
        <div className="relative w-full mx-auto pb-8">

          {/* Main Card */}
          <div className="bg-white rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 relative z-10 flex flex-col md:flex-row p-6 md:p-10 gap-8 md:gap-16 border border-gray-100">

            {/* LEFT SIDE - FORM VISUAL */}
            <div className="w-full md:w-[48%] bg-gradient-to-br from-[#5fd0e6] via-[#2eb3d1] to-[#0f7f9c] rounded-[24px] p-12 relative overflow-hidden flex items-center justify-center min-h-[460px]">
              {/* Tile Grid overlay */}
              <div
                className="absolute inset-0 opacity-[0.12] mix-blend-soft-light pointer-events-none"
                style={{
                  backgroundImage: 'linear-gradient(white 1.5px, transparent 1.5px), linear-gradient(90deg, white 1.5px, transparent 1.5px)',
                  backgroundSize: '48px 48px',
                  backgroundPosition: 'center center'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/10 pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,0.35),transparent_45%)] pointer-events-none" />
              <div className="absolute inset-0 rounded-[24px] pointer-events-none bg-[linear-gradient(120deg,rgba(255,255,255,0.35)_0%,transparent_30%,transparent_70%,rgba(255,255,255,0.25)_100%)] opacity-100" />
              {/* Form Card */}
              <div className="bg-white rounded-[18px] shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-7 md:p-9 w-full max-w-[360px] relative z-20 border border-gray-100">
                <h3 className="text-[18px] font-bold text-[#1e293b] mb-6">
                  What do you want to learn?
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[12px] font-semibold text-[#475569] mb-1.5 pl-0.5">
                      Goals
                    </label>
                    <div className="w-full border border-gray-200 rounded-[12px] py-3 px-4 flex justify-between items-center text-[13px] text-[#64748b] bg-white cursor-pointer hover:border-[#2eb3d1] transition-all">
                      <span className="font-medium text-[#1e293b]">Become a back end developer</span>
                      <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[12px] font-semibold text-[#475569] mb-1.5 pl-0.5">
                      Level
                    </label>
                    <div className="w-full border border-gray-200 rounded-[10px] py-[10px] px-3.5 flex justify-between items-center text-[13px] text-[#334155] bg-white cursor-pointer hover:border-gray-300 transition-colors">
                      <span className="font-semibold text-gray-800">Beginner</span>
                      <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  <div className="pt-1">
                    <label className="block text-[12px] font-semibold text-[#475569] mb-1.5 pl-0.5">
                      Target Time
                    </label>
                    <div className="flex gap-1.5">
                      {["1 month", "1 month", "1 month"].map((time, idx) => {
                        const id = `${time}-${idx}`;
                        const isActive = activeTime === id;
                        return (
                          <button
                            key={id}
                            onClick={() => setActiveTime(id)}
                            className={`flex-1 py-2.5 text-[12px] font-medium rounded-[10px] border ${isActive
                              ? "border-[#2eb3d1] bg-[#e6f7fb] text-[#0f728c] shadow-sm"
                              : "border-gray-200 bg-white text-[#94a3b8] hover:border-gray-300"
                              } transition-colors`}
                          >
                            {time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button className="w-full bg-gradient-to-r from-[#2eb3d1] to-[#0f7f9c] hover:from-[#27a8c6] hover:to-[#0d6e86] text-white font-semibold py-3 rounded-[12px] text-[14px] transition-all duration-200 shadow-[0_8px_20px_rgba(46,179,209,0.35)] hover:shadow-[0_10px_25px_rgba(46,179,209,0.45)] active:scale-[0.98]">
                      Generate learning path
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - CONTENT */}
            <div className="w-full md:w-[52%] flex flex-col justify-center py-6 px-2 pr-6 md:pl-0">

              {/* Icon grid decor */}
              <div className="relative mb-6 md:mb-8 w-14 h-14">
                {/* Decorative sub-grid behind icon */}
                <div className="absolute -inset-7 opacity-[0.12] blur-[0.5px] z-0 flex items-center justify-center">
                  <div className="grid grid-cols-4 gap-1.5 w-[90px] h-[90px]">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="w-full h-full bg-[#2eb3d1]/20 rounded-[2px]" />
                    ))}
                  </div>
                </div>
                {/* Main Icon container */}
                <div className="relative z-1hover:shadow-[0_10px_25px_rgba0 w-full h-full bg-white rounded-[16px] border border-gray-100 flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.06)]">
                  <svg className="w-6 h-6 text-[#64748b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 6h10M8 12h10M8 18h10M4 6h.01M4 12h.01M4 18h.01" />
                  </svg>
                </div>
              </div>

              <div className="mb-10">
                <span className="inline-block px-3 py-1 rounded-md border border-[#fde2cf] text-[#ea580c] text-[11px] font-semibold mb-4 tracking-wider bg-[#fff7ed]">
                  First step
                </span>
                <h3 className="text-[24px] md:text-[26px] font-semibold text-[#0f172a] mb-3 tracking-tight leading-snug">
                  Smart tracking & reminders
                </h3>
                <p className="text-[#64748b] text-[15px] leading-relaxed max-w-[420px]">
                  All you have to do is fill out the form and ai will quickly
                  (even in less than 5 minutes) generate a customized
                  learning path for you.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#1e293b] mb-4 text-[14px]">
                  You'll be asked to input :
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-4">
                  {[
                    "Your learning goal",
                    "Your current skill level",
                    "Tools & platforms you use",
                    "And others questions",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-[18px] h-[18px] text-[#22c55e] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[#475569] text-[13px] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* BACKGROUND STACK EFFECTS */}
          <div className="absolute top-0 left-4 right-4 md:left-6 md:right-6 h-full bg-white rounded-[28px] shadow-[0_25px_60px_rgba(0,0,0,0.08)] translate-y-6 -z-10" />
          <div className="absolute top-0 left-8 right-8 md:left-12 md:right-12 h-full bg-white rounded-[28px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] translate-y-12 -z-20" />
          <div className="absolute top-0 left-12 right-12 md:left-20 md:right-20 h-full bg-white rounded-[28px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] translate-y-16 -z-30" />
        </div>
      </div>
    </section>
  );
}