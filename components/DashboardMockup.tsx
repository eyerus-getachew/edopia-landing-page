import React from "react";
import { ChevronDown, BookOpen, LayoutDashboard, BrainCircuit, Target, BarChart2, CheckCircle2, Bookmark, Users, PlayCircle, Folder, LayoutTemplate } from "lucide-react";

export default function DashboardMockup() {
    return (
        <div className="w-full bg-white rounded-2xl shadow-[0_24px_64px_-16px_rgba(15,23,42,0.12),0_8px_24px_-8px_rgba(0,0,0,0.08)] border border-gray-200/80 overflow-hidden text-left flex flex-col h-[650px] transform transition-transform duration-500 hover:-translate-y-1 z-10">
            {/* Fake Browser header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 bg-gray-50/50">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="mx-auto flex items-center gap-2 bg-white px-6 py-1 rounded-md border border-gray-200 text-xs text-gray-400 w-1/2 justify-center shadow-sm">
                    <span className="font-semibold text-gray-500">Edopia</span>
                    <span className="text-gray-300">|</span>
                    <span>Add new path / <b>Back-end dev</b></span>
                </div>
            </div>

            {/* Dashboard Layout */}
            <div className="flex flex-1 overflow-hidden bg-white">
                
                {/* Left Sidebar */}
                <div className="w-[220px] border-r border-gray-100 p-4 flex flex-col hidden lg:flex">
                    {/* User Profile */}
                    <div className="flex items-center gap-3 mb-8 p-2 rounded-lg hover:bg-gray-50 cursor-pointer border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-sky-100 text-[#008cba] flex items-center justify-center font-bold text-xs">HJ</div>
                        <div>
                            <p className="text-sm font-semibold text-gray-800">Henry Joe</p>
                            <p className="text-[10px] text-gray-500">henryj@gmail.com</p>
                        </div>
                        <ChevronDown size={14} className="ml-auto text-gray-400" />
                    </div>

                    {/* Nav Sections */}
                    <div className="space-y-6">
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Main Menu</p>
                            <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-sky-50 cursor-pointer bg-sky-50 text-[#008cba]"><LayoutDashboard size={16} /> Dashboard</li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"><BrainCircuit size={16} /> AI personal coach</li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"><Target size={16} /> My goals</li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"><BarChart2 size={16} /> Progress & stats</li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"><CheckCircle2 size={16} /> Skill assessment</li>
                            </ul>
                        </div>
                        
                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">Learning Assets</p>
                            <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"><Bookmark size={16} /> Saved modules</li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer justify-between">
                                    <div className="flex items-center gap-3"><Users size={16} /> Community</div>
                                            <span className="text-[9px] bg-sky-50 text-[#008cba] border border-sky-100 px-1.5 py-0.5 rounded">New</span>
                                </li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer"><PlayCircle size={16} /> Watch later</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">My Learning Path</p>
                            <ul className="space-y-1 text-sm text-gray-600 font-medium">
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer justify-between">
                                    <div className="flex items-center gap-3"><Folder size={16} /> Basic programming</div>
                                    <ChevronDown size={14} className="text-gray-400" />
                                </li>
                                <li className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 cursor-pointer justify-between">
                                    <div className="flex items-center gap-3"><LayoutTemplate size={16} /> Front-end dev</div>
                                    <ChevronDown size={14} className="text-gray-400" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Center Content */}
                <div className="flex-1 flex flex-col p-8 overflow-y-auto bg-white relative">
                    {/* Path Header */}
                    <div className="flex justify-between items-start mb-8">
                        <div className="max-w-xl">
                            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-4 border border-green-100">
                                <BookOpen size={24} />
                            </div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Back-end developer learning path</h2>
                            <p className="text-sm text-gray-500 mb-4">
                                Start from <span className="text-[#008cba] font-medium">server basics, node.js, express, databases, deployment.</span> Focused path generated by AI based on your form.
                            </p>
                            <div className="flex items-center gap-3">
                                <button className="px-5 py-2 bg-[#008cba] hover:bg-[#007aa3] text-white text-sm font-medium rounded-lg transition-colors shadow-sm flex items-center gap-2">
                                    <PlayCircle size={16} /> Start learning
                                </button>
                                <button className="px-5 py-2 bg-white text-gray-700 border border-gray-200 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
                                    Edit preference
                                </button>
                            </div>
                        </div>

                        {/* Current skill card */}
                        <div className="bg-orange-50/50 border border-orange-100/50 p-4 rounded-xl w-64 shadow-sm">
                            <h4 className="text-sm font-semibold text-slate-800 mb-4">Your current skill</h4>
                            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
                                <div><p className="text-gray-500 mb-1">Deadline</p><p className="font-semibold text-slate-800">3 months</p></div>
                                <div><p className="text-gray-500 mb-1">Learning goal</p><p className="font-semibold text-slate-800">Back-end dev</p></div>
                                <div><p className="text-gray-500 mb-1">Available Time</p><p className="font-semibold text-slate-800">1-2 Hours/day</p></div>
                                <div><p className="text-gray-500 mb-1">Learning Style</p><p className="font-semibold text-slate-800">Video + Hands-on</p></div>
                                <div><p className="text-gray-500 mb-1">Current level</p><p className="font-semibold text-slate-800">Beginner</p></div>
                                <div><p className="text-gray-500 mb-1">Preferred tools</p><p className="font-semibold text-slate-800">VS Code, Git</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-between items-center px-4 py-2 border border-gray-100 rounded-full mb-6 bg-gray-50/50 shadow-sm text-sm font-medium text-gray-500">
                        <span className="bg-white px-6 py-2 rounded-full text-slate-800 shadow-sm border border-gray-100">Curriculums</span>
                        <span className="px-4 hover:text-slate-800 cursor-pointer">Syntax & tools</span>
                        <span className="px-4 hover:text-slate-800 cursor-pointer">Project-based</span>
                        <span className="px-4 hover:text-slate-800 cursor-pointer">Assessment</span>
                        <span className="px-4 hover:text-slate-800 cursor-pointer">Tutorials</span>
                    </div>

                    {/* Two-col layout for Curriculum vs Stats */}
                    <div className="flex gap-6">
                        {/* Curriculum List */}
                        <div className="w-2/3 space-y-4">
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                <div className="bg-white flex justify-between items-center p-4 cursor-pointer">
                                    <h3 className="font-bold text-slate-800 tracking-tight">Fundamentals</h3>
                                    <ChevronDown size={18} className="text-gray-400 rotate-180" />
                                </div>
                                <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col gap-4">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <h4 className="font-semibold text-slate-800 text-sm mb-2">Module overview</h4>
                                        <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                                            Learn the core concepts of programming, terminal commands, Git, and basic data types - the foundation for every back-end developer.
                                        </p>
                                        <div className="flex gap-2">
                                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 text-sky-600 border border-sky-100 rounded text-[10px] font-medium"><LayoutTemplate size={12}/> 4 Modules</span>
                                            <span className="flex items-center gap-1.5 px-2.5 py-1 bg-sky-50 text-sky-600 border border-sky-100 rounded text-[10px] font-medium"><Target size={12}/> 12 days</span>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between hover:border-blue-200 cursor-pointer transition-colors">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-500 flex items-center justify-center shrink-0"><BookOpen size={16} /></div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm mb-1">Programming basics</h4>
                                                <p className="text-xs text-gray-400">Introduction to logic, syntax, and how code works.</p>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">3 days</span>
                                    </div>
                                    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-start justify-between opacity-60">
                                        <div className="flex gap-4 items-start">
                                            <div className="w-8 h-8 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center shrink-0"><LayoutDashboard size={16} /></div>
                                            <div>
                                                <h4 className="font-semibold text-slate-800 text-sm mb-1">Terminal & CLI</h4>
                                                <p className="text-xs text-gray-400">Navigating folders, running commands, and using basic tools.</p>
                                            </div>
                                        </div>
                                        <span className="text-[11px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded">2 days</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Percentage Chart Card */}
                        <div className="w-1/3 bg-white border border-gray-100 rounded-xl p-5 shadow-sm h-fit">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-slate-800 text-sm">Percentage</h3>
                                <div className="flex gap-1 text-gray-400 cursor-pointer hover:text-gray-600">...</div>
                            </div>
                            <div className="relative w-36 h-36 mx-auto mb-8">
                                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="250" className="text-amber-400" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#38bdf8" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset={180}/>
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="282.7" strokeDashoffset="70" />
                                </svg>
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <span className="text-[10px] text-gray-400">Total of</span>
                                    <span className="text-sm font-bold text-slate-800">43 Sub-modules</span>
                                </div>
                            </div>
                            <div className="space-y-3 text-xs">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 rounded bg-sky-500"></div> Fundamentals</div>
                                    <div className="flex justify-between w-16 text-right"><span className="text-gray-500">4</span><span className="font-medium">10%</span></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 rounded bg-gray-800"></div> Back-end basics</div>
                                    <div className="flex justify-between w-16 text-right"><span className="text-gray-500">9</span><span className="font-medium">21%</span></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-slate-700"><div className="w-2 h-2 rounded bg-blue-400"></div> Database</div>
                                    <div className="flex justify-between w-16 text-right"><span className="text-gray-500">8</span><span className="font-medium">18%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right AI Chat Sidebar */}
                <div className="w-[300px] border-l border-gray-100 bg-gray-50/30 flex flex-col hidden xl:flex text-sm">
                    <div className="m-4 p-4 border border-blue-100 bg-white rounded-xl shadow-sm relative">
                        <div className="flex items-center justify-between mb-2">
                            <h4 className="font-bold flex items-center gap-2 text-slate-800 tracking-tight"><div className="w-5 h-5 bg-[#008cba] rounded text-white flex items-center justify-center"><LayoutDashboard size={12}/></div> Edopia AI</h4>
                            <span className="text-gray-300 hover:text-gray-500 cursor-pointer">✕</span>
                        </div>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            Our AI already trained to be your assistant in creating a comfortable learning flow, just tell it and see the results.
                        </p>
                    </div>
                    <div className="flex-1 overflow-y-auto px-4 pb-4 flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                                    <div className="w-5 h-5 bg-[#008cba] rounded text-white flex items-center justify-center"><LayoutDashboard size={10}/></div> Edopia AI • 10:25 AM
                        </div>
                        <div className="bg-white border text-gray-600 border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed max-w-[90%]">
                            Based on your input, here's your personalized learning goal : Back-End Developer
                        </div>
                        <div className="bg-white border text-gray-600 border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed max-w-[95%]">
                            I'll guide you through modules like programming basics, let's break it down :
                            <ul className="list-disc pl-4 mt-2 space-y-1">
                                <li>Fundamentals</li><li>Back-End Basics</li><li>Database</li><li>Authentication & Authorization</li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium self-end mt-2">
                            You • 10:28 AM <div className="w-5 h-5 bg-orange-400 rounded-full text-white flex items-center justify-center">HJ</div>
                        </div>
                        <div className="bg-[#f0f9ff] text-slate-700 border border-sky-100 p-3 rounded-2xl rounded-tr-none shadow-sm text-xs self-end max-w-[85%] text-right">
                            Sound good! It's awesome
                        </div>
                        <div className="bg-[#f0f9ff] text-slate-700 border border-sky-100 p-3 rounded-2xl rounded-tr-none shadow-sm text-xs self-end max-w-[95%] text-right">
                            But AI, I think the Fundamentals section is too short. Can we add Git and CLI usage?
                        </div>
                        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-medium">
                            <div className="w-5 h-5 bg-[#008cba] rounded text-white flex items-center justify-center"><LayoutDashboard size={10}/></div> Edopia AI • Now
                        </div>
                        <div className="bg-white border text-gray-600 border-gray-100 p-3 rounded-2xl rounded-tl-none shadow-sm text-xs leading-relaxed max-w-[90%] flex items-center gap-2">
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-75"></span>
                            <span className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
