import React from "react";
import { BookOpen, Users, Target } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-20 bg-slate-50 border-t border-gray-100">
            {/* Header Section */}
            <div className="max-w-4xl mx-auto text-center px-6 mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 tracking-tight">
                    About <span className="text-[#64bdbd]">Edopia</span>
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    We are revolutionizing the way you learn specialized tech skills by bringing you an AI-driven, highly 
                    personalized platform. Edopia doesn't just offer courses; it acts as your personal coach building the ideal 
                    curriculum based on your unique goals and schedule.
                </p>
            </div>

            {/* Placeholder Values Section */}
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
                {/* Value 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-teal-50 text-[#64bdbd] rounded-xl flex items-center justify-center mb-6">
                        <Target size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Our Mission</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        To empower developers worldwide with curated, AI-generated learning paths that eliminate guesswork 
                        and drastically accelerate the time to land their dream job.
                    </p>
                </div>

                {/* Value 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6">
                        <Users size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Community First</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        Learning in isolation is slow. We believe in providing an interconnected platform where students, 
                        mentors, and experts can collaborate, share code, and grow together.
                    </p>
                </div>

                {/* Value 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-6">
                        <BookOpen size={28} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-3">Continuous Evolution</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        The tech world moves fast, and so do we. Our AI constantly updates curriculums with the newest 
                        tools, ensuring you're never learning outdated concepts.
                    </p>
                </div>
            </div>


        </section>
    );
}
