export default function TrustedBy() {
    const logos = [
        "/logos/duolingo.png",
        "/logos/udemy.png",
        "/logos/coursera.png",
        "/logos/skillshare.png",
        "/logos/udacity.png",
    ];

    return (
        <div className="py-20 bg-white">

            {/* Title */}
            <p className="text-center text-gray-500 text-sm mb-10">
                Trusted by learners from
            </p>

            {/* Logo Grid */}
            <div className="flex justify-center gap-6 flex-wrap">

                {logos.map((logo, i) => (
                    <div
                        key={i}
                        className="w-40 h-28 bg-gray-50 border border-gray-200 rounded-2xl flex items-center justify-center hover:shadow-md transition px-6"
                    >
                        <img
                            src={logo}
                            alt="brand"
                            className="h-12 w-full object-contain opacity-70 grayscale"
                        />
                    </div>
                ))}

            </div>

        </div>
    );
}