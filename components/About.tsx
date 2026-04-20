import React from "react";
import { BookOpen, Users, Target } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24 bg-[#f7f9fc]">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center px-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-semibold text-[#1a2f4a] mb-6 tracking-tight">
                    About <span className="text-[#64bdbd]">Edopia</span>
                </h2>
                <p className="text-lg text-[#6b7280] leading-relaxed max-w-2xl mx-auto">
                Edopia is an AI-powered learning platform that helps students learn smarter through personalized courses, real-time tutoring, and adaptive learning paths.
                </p>
            </div>

            {/* Placeholder Values Section */}
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
                {/* Value 1 */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#e6f6f8] text-[#0ea5c6] rounded-xl flex items-center justify-center mb-6">
                        <Target size={28} />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a2f4a] mb-3">Our Mission</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">
                    To make high-quality, personalized education accessible to every student using AI.
                    </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#fff4e6] text-[#f59e0b] rounded-xl flex items-center justify-center mb-6">
                        <Users size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Student-Centered Learning</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                    Learning is better together. We provide a space where students can collaborate, support each other, and grow through shared learning experiences.
                    </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-8 rounded-xl border border-gray-100 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                    <div className="w-14 h-14 bg-[#ecfdf5] text-[#22c55e] rounded-xl flex items-center justify-center mb-6">
                        <BookOpen size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Continuous Evolution</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                    Our AI continuously improves learning content and explanations based on how students learn, ensuring a better and more effective learning experience over time.
                    </p>
                </div>
            </div>


        </section>
    );
}
