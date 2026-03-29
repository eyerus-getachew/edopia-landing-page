export default function Testimonials() {
    return (
        <div className="py-24 md:py-28 bg-[#eef2f7]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-14 md:mb-16">
                    <p className="text-sm text-[#008cba] font-medium tracking-wide mb-3 flex items-center justify-center gap-2">
                        <span className="font-light opacity-90" aria-hidden>|</span>
                        TESTIMONIALS
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold text-[#1a2f4a] max-w-3xl mx-auto leading-tight">
                        What learners and educators are saying about Edopia
                    </h2>
                </div>

                {/* Carousel-style row: side cards peek + center focus */}
                <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 min-h-[min(380px,70vh)]">
                    {/* Left peek */}
                    <div
                        className="hidden sm:block relative w-[100px] md:w-[140px] lg:w-[180px] h-[240px] md:h-[280px] lg:h-[300px] rounded-2xl lg:rounded-3xl overflow-hidden shrink-0 opacity-55 blur-[3px] scale-[0.92] shadow-md pointer-events-none"
                        aria-hidden
                    >
                        <img
                            src="/learner.png"
                            alt=""
                            className="w-full h-full object-cover object-center"
                        />
                    </div>

                    {/* Main card — full-bleed photo */}
                    <div className="relative w-full max-w-[640px] h-[300px] sm:h-[340px] md:h-[380px] rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(15,23,42,0.25)] z-10">
                        <img
                            src="/learner.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                        <div
                            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
                            aria-hidden
                        />

                        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10">
                            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                                <div className="text-left max-w-xl">
                                    <p className="text-sm text-white/90 mb-3 font-medium">
                                        Rafael Sarah • Junior Backend Developer
                                    </p>
                                    <p className="text-base sm:text-lg md:text-xl text-white leading-relaxed italic font-normal">
                                        “Edopia helped me skip the guesswork. The AI recommended a learning plan tailored to my current skills and daily schedule.”
                                    </p>
                                </div>
                                <div className="text-left sm:text-right shrink-0 pt-2 sm:pt-0">
                                    <p className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                                        +45%
                                    </p>
                                    <p className="text-sm text-white/85 mt-1">Faster progress</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right peek */}
                    <div
                        className="hidden sm:block relative w-[100px] md:w-[140px] lg:w-[180px] h-[240px] md:h-[280px] lg:h-[300px] rounded-2xl lg:rounded-3xl overflow-hidden shrink-0 opacity-55 blur-[3px] scale-[0.92] shadow-md pointer-events-none"
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
