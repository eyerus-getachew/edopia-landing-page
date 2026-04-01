"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
    "General",
    "Learning & Features",
    "Plans & Pricing",
    "Platform & Accessibility",
    "Privacy & Data",
];

const faqs = [
    {
        question: "How does Edopia differ from a traditional LMS?",
        answer: `Unlike most learning platforms that offer fixed, linear content, Edopia uses AI to create a learning path that evolves with you — making the experience more personal, efficient, and flexible.

• Personalized by AI — no generic curriculum  
• Adaptive roadmap that adjusts to your pace and progress  
• Built-in AI assistant for real-time edits and support  
• Automated tracking — no manual updates needed`,
    },
    {
        question: "Do I need to plan my own curriculum?",
        answer: "No — Edopia automatically builds your learning path for you.",
    },
    {
        question: "Can I choose what I want to learn?",
        answer: "Yes, you can customize your learning goals anytime.",
    },
    {
        question: "Is it suitable for self-paced learners?",
        answer: "Absolutely — Edopia is designed for flexible learning.",
    },
    {
        question: "Who is Edopia built for?",
        answer: "Students, professionals, and lifelong learners.",
    },
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="py-24 md:py-28 bg-[#eef2f7]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] text-center font-medium text-[#1a2f4a] mb-16 leading-[1.2]">
                    Frequently <br /> asked questions
                </h2>

                {/* Main Box */}
                <div className="bg-white rounded-[28px] border border-gray-200 p-4 md:p-6 flex gap-6 md:gap-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    {/* Sidebar */}
                    <div className="w-[28%] space-y-3 pr-6">
                        {categories.map((cat, i) => (
                            <motion.button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`relative w-full text-left px-4 py-3 rounded-lg text-[0.95rem] transition-all duration-200 ${activeIndex === i
                                    ? "bg-[#f1f7fb] text-[#0ea5c6] font-semibold"
                                    : "text-[#1a2f4a] font-medium hover:bg-gray-50"
                                    }`}
                            >
                                {/* Active indicator */}
                                {activeIndex === i && (
                                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-[3px] bg-[#0ea5c6] rounded-r-full" />
                                )}

                                <span className="ml-2">{cat}</span>
                            </motion.button>
                        ))}
                    </div>

                    {/* FAQ Content */}
                    <div className="w-[72%] border border-gray-200 rounded-xl overflow-hidden">

                        {faqs.map((faq, i) => (
                            <div key={i}>

                                {/* Question */}
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200"
                                >
                                    <span className="font-medium text-[#1a2f4a]">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-300 transition-transform duration-300 ease-out ${openIndex === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </motion.button>

                                {/* Answer */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === i ? "auto" : 0,
                                        opacity: openIndex === i ? 1 : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-[#1a2f4a] text-sm leading-relaxed whitespace-pre-line max-w-2xl">
                                        {faq.answer}
                                    </div>
                                </motion.div>

                                {/* Divider (ONLY between items) */}
                                {i !== faqs.length - 1 && (
                                    <div className="border-t border-gray-200" />
                                )}

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}