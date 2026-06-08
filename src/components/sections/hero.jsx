
import Link from 'next/link';
import Hero_btns from '../btns/hero_btns';


export function HeroSection() {
    return (
        <section className="relative flex items-center justify-center px-4 py-20 bg-linear-to-br from-orange-50 to-red-50">
            <div className="relative z-10 max-w-6xl mx-auto text-center">
                {/* Logo/Brand */}
                <div className="mb-8 inline-block">
                    <div className="px-4 py-2 rounded-full border border-orange-200 bg-orange-100/50 backdrop-blur-sm">
                        <p className="text-sm font-semibold text-red-700">
                            MANAV KALYAN TRUST • EMPOWERING ENTREPRENEURS
                        </p>
                    </div>
                </div>

                {/* Main Headline */}
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                    Transforming Dreams Into
                    <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent"> Thriving Enterprises</span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Dedicated to empowering women and minority entrepreneurs across India. We provide mentorship, training, and support to transform visionary ideas into sustainable, profitable businesses that create jobs and change communities.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                    <Hero_btns></Hero_btns>
                </div>

                {/* Stats Banner */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {[
                        { number: '500+', label: 'Entrepreneurs Supported' },
                        { number: '1000+', label: 'Jobs Created' },
                        { number: '20 Yrs+', label: 'Social Impact' },
                        { number: '5 Continents', label: 'Global Reach' },
                    ].map((stat, i) => (
                        <div key={i} className="p-4 rounded-lg bg-white/70 border border-orange-100 backdrop-blur-sm shadow-xs">
                            <p className="text-2xl md:text-3xl font-bold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent mb-1">
                                {stat.number}
                            </p>
                            <p className="text-sm text-slate-600">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <Link href="#our_cources" className="flex justify-center animate-bounce">
                    <div className="text-slate-500">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </Link>
            </div>
        </section>
    );
}
