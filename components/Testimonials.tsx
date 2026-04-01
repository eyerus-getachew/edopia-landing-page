export default function Testimonials() {
    return (
        <div className="py-24 md:py-28 bg-[#eef2f7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-16 md:mb-20">
                    <p className="text-xs text-[#0ea5c6] font-medium mb-4 tracking-[0.2em] flex items-center justify-center gap-2">
                        <span className="font-light opacity-90" aria-hidden>|</span>
                        TESTIMONIALS
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-medium text-[#1a2f4a] max-w-3xl mx-auto leading-[1.2]">
                        What learners and educators are saying about Edopia
                    </h2>
                </div>
                {/* Carousel-style row: side cards peek + center focus */}
                <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen flex items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 min-h-[420px]">
                    {/* Left peek */}
                    <div
                        className="hidden sm:block relative w-[120px] md:w-[160px] lg:w-[200px] h-[260px] md:h-[300px] lg:h-[320px] rounded-r-2xl lg:rounded-r-3xl overflow-hidden shrink-0 opacity-70 blur-[1.5px] scale-[0.95] shadow-lg pointer-events-none"
                        aria-hidden
                    >
                        <img
                            src="/learner.png"
                            alt=""
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Main card — full-bleed photo */}
                    <div className="relative w-full max-w-[820px] h-[340px] sm:h-[380px] md:h-[420px] rounded-[28px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(15,23,42,0.3)] z-10 transition-transform duration-500 hover:scale-[1.02]">
                        <img
                            src="/learner.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                            aria-hidden

                        />

                        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10 md:p-12">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                                <div className="text-left max-w-xl">
                                    <p className="text-sm text-white/90 mb-3 font-medium">
                                        Rafael Sarah • Junior Backend Developer
                                    </p>
                                    <p className="text-base sm:text-lg md:text-[1.15rem] text-white leading-relaxed italic font-normal">
                                        “Edopia helped me skip the guesswork. The AI recommended a learning plan tailored to my current skills and daily schedule.”
                                    </p>
                                </div>
                                <div className="text-left sm:text-right shrink-0 pt-4 sm:pt-0">
                                    <p className="text-5xl sm:text-6xl md:text-7xl font-semibold text-white tracking-tight">
                                        +45%
                                    </p>
                                    <p className="text-sm text-white/80 mt-2">Faster progress</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right peek */}
                    <div
                        className="hidden sm:block relative w-[120px] md:w-[160px] lg:w-[200px] h-[260px] md:h-[300px] lg:h-[320px] rounded-l-2xl lg:rounded-l-3xl overflow-hidden shrink-0 opacity-70 blur-[1.5px] scale-[0.95] shadow-lg pointer-events-none"
                        aria-hidden
                    >
                        <img
                            src="/learner.png"
                            alt=""
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
