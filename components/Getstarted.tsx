"use client";

import React from "react";
import { motion } from "framer-motion";
import DashboardMockup from "./DashboardMockup";
import Image from "next/image";

export default function Getstarted() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden font-sans">

      {/* SKY */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#d7edf7] via-[#eef8fc] to-[#f7fcff] z-0" />

      {/* CONTENT WRAPPER (NO CENTERING ANYMORE) */}
      <div className="relative z-30 w-full flex flex-col md:flex-row justify-between">

        {/* LEFT SIDE (TOP-ALIGNED + LESS GAP) */}
        <div className="w-full md:w-[40%] pt-16 pl-6 md:pl-10 lg:pl-16">

          {/* LOGO */}
          <div className="flex items-center gap-2 mb-6">
            <Image src="/nobg.png" alt="logo" width={34} height={34} />
            <span className="text-lg font-semibold text-gray-800">
              Edopia
            </span>
          </div>

          {/* TEXT */}
          <h1 className="text-3xl md:text-[42px] font-bold text-[#0f172a] leading-[1.15] mb-6">
            What are you <br />
            waiting for, get <br />
            started now
          </h1>

          {/* BUTTONS */}
          <div className="flex gap-3 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#5bbcbc] text-white px-5 py-2.5 rounded-lg text-sm shadow"
            >
              Try 7-days free trial
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-gray-200 px-5 py-2.5 rounded-lg text-sm"
            >
              View pricing plan
            </motion.button>
          </div>
        </div>

        {/* RIGHT SIDE (PUSHED TO EDGE + TOP GAP) */}
        <div className="w-full md:w-[60%] flex justify-end pr-0 md:pr-6 lg:pr-10 mt-10 md:mt-20">

          <div className="w-full max-w-[600px] rounded-xl overflow-hidden shadow-xl">
            <DashboardMockup />
          </div>
        </div>
      </div>

      {/* GRASS */}
      <div className="absolute bottom-0 left-0 w-full z-10 pointer-events-none">
        <div className="relative w-full h-[220px] md:h-[280px]">
          <Image
            src="/bg.png"
            alt="grass"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}