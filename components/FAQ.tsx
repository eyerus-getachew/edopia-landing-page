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
        <div className="py-20 bg-[#eef2f7]">
            <div className="max-w-6xl mx-auto px-6">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl text-center font-semibold text-gray-800 mb-12">
                    Frequently <br /> asked questions
                </h2>

                {/* Main Box */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 flex gap-6">

                    {/* Sidebar */}
                    <div className="w-1/4 space-y-2">
                        {categories.map((cat, i) => (
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`w-full text-left px-4 py-3 rounded-lg text-sm transition ${activeIndex === i
                                    ? "bg-blue-50 text-blue-600 border border-blue-200"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>

                    {/* FAQ Content */}
                    <div className="w-3/4 space-y-3">
                        {faqs.map((faq, i) => (
                            <div
                                key={i}
                                className="border border-gray-200 rounded-xl overflow-hidden"
                            >

                                {/* Question */}
                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.99 }}
                                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                                    className="w-full flex justify-between items-center px-5 py-4 text-left"
                                >
                                    <span className="font-medium text-gray-800">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </motion.button>

                                {/* Answer */}
                                {openIndex === i && (
                                    <div className="px-5 pb-5 text-gray-600 text-sm whitespace-pre-line">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}