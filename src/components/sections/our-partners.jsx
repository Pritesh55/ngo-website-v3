import React from "react";

const partners = [
    { name: "PMKVY", logo: "/images/partners-logo/PMKVY-clean.webp" },
    { name: "NSDC", logo: "/images/partners-logo/nsdc-logo.webp" },
    { name: "MSDE", logo: "/images/partners-logo/msde-logo.jpg" },
    { name: "gsdc", logo: "/images/partners-logo/gsdc-logo.png" },
    { name: "DST", logo: "/images/partners-logo/dst-logo.jpg" },
    { name: "MWCDI", logo: "/images/partners-logo/MWCDI.png" },
    { name: "EDIA", logo: "/images/partners-logo/EDIA.png" },
    { name: "MOFPI", logo: "/images/partners-logo/MOFPI.png" },
];

export default function PartnerSection() {
    return (
        <section
            className="py-20 sm:py-24 border-y border-amber-100/40 relative overflow-hidden bg-pink-green-yellow"
        >
            {/* Ambient Background Glows */}
            <div className="absolute top-12 left-12 w-64 h-64 bg-amber-400/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-12 right-12 w-80 h-80 bg-rose-400/6 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-teal-400/6 rounded-full blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-3xl text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Trusted by Our Partners
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We're proud to partner with some of the most innovative companies
                        in India to deliver exceptional results.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex justify-center items-center p-6 bg-white/75 backdrop-blur-md border border-white/60 rounded-2xl shadow-xs hover:shadow-md hover:scale-[1.03] hover:border-amber-300/80 hover:bg-white transition-all duration-300 h-28 group"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="object-contain max-w-full max-h-full transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
