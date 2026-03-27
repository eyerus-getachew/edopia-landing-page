export default function Testimonials() {
    return (
        <div className="py-20 bg-[#eef2f7]">

            {/* Container */}
            <div className="max-w-6xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-xs text-blue-500 tracking-widest mb-2">
                        TESTIMONIALS
                    </p>

                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 max-w-2xl mx-auto">
                        What learners and educators are saying about Edopia
                    </h2>
                </div>

                {/* Cards Row */}
                <div className="flex items-center justify-center gap-6">

                    {/* LEFT (blurred preview) */}
                    <div className="w-[180px] h-[300px] rounded-2xl overflow-hidden opacity-40 blur-sm">
                        <img
                            src="/testimonials/1.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* MAIN CARD — gray strip + quote panel with learner photo as bg */}
                    <div className="flex w-[700px] h-[350px] rounded-2xl overflow-hidden shadow-lg bg-white">

                        <div className="w-[280px] shrink-0 h-full bg-gray-200" aria-hidden />

                        <div
                            className="relative flex flex-1 flex-col justify-between bg-gray-200 bg-cover bg-center p-8 min-w-0"
                            style={{ backgroundImage: "url('/learner.png')" }}
                        >
                            <div className="absolute inset-0 bg-gray-900/55" aria-hidden />
                            <div className="relative z-10 flex flex-1 flex-col justify-between">
                                <div>
                                    <p className="text-sm text-white/85 mb-2">
                                        Rafael Sarah • Junior Backend Developer
                                    </p>

                                    <p className="text-lg text-white leading-relaxed drop-shadow-sm">
                                        “Edopia helped me skip the guesswork. The AI recommended a learning plan tailored to my current skills and daily schedule.”
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-3xl font-semibold text-white">+45%</p>
                                    <p className="text-sm text-white/80">Faster progress</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT (blurred preview) */}
                    <div className="w-[180px] h-[300px] rounded-2xl overflow-hidden opacity-40 blur-sm">
                        <img
                            src="/testimonials/2.jpg"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}