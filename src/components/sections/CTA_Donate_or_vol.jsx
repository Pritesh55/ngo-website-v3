import { ChevronRight, Heart, UserPlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CTA_Donate_or_vol = () => {
    return (
        <>
            <section className="bg-glow-cool py-24 border-t border-slate-100 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
                            <span className="text-xs font-bold text-orange-700 tracking-wider">06 — GET INVOLVED</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Help us place education, dignity &amp; opportunity in more hands
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Join our mission to empower communities, support rural entrepreneurs, and transform lives across Gujarat.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Donate Card */}
                        <div className="group hover:shadow-xl transition-all duration-300 bg-linear-to-br from-orange-50/80 to-red-50/40 border border-orange-200/80 rounded-3xl overflow-hidden flex flex-col h-full">
                            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-orange-100 rounded-xl text-orange-700">
                                            <Heart className="w-8 h-8" />
                                        </div>
                                        <span className="text-xs font-bold capitalize tracking-widest text-orange-850 bg-white border border-orange-200 px-3 py-1 rounded-full">
                                            Support the Trust
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3">
                                        Make a Donation
                                    </h3>
                                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                                        Your generous contributions directly fund skill development workshops, educational materials for children, and women's self-sufficiency projects.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Link href="/donate" className="group inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-orange-500 to-darkred text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all cursor-pointer text-sm">
                                        Donate Now
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Volunteer Card */}
                        <div className="group hover:shadow-xl transition-all duration-300 bg-linear-to-br from-blue-50/80 to-indigo-50/40 border border-blue-200/80 rounded-3xl overflow-hidden flex flex-col h-full">
                            <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-blue-100 rounded-xl text-blue-700">
                                            <UserPlus className="w-8 h-8" />
                                        </div>
                                        <span className="text-xs font-bold capitalize tracking-widest text-blue-850 bg-white border border-blue-200 px-3 py-1 rounded-full">
                                            Join Our Team
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 leading-snug mb-3">
                                        Become a Volunteer
                                    </h3>
                                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                                        Share your time, technical skills, or guidance to mentor local communities, support training courses, and expand our rural outreach.
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <Link href="https://wa.me/9974025126?text=Volunteer%20with%20Us" className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all cursor-pointer text-sm">
                                        Volunteer With Us
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 text-center text-sm italic text-slate-500 font-semibold">
                        Manav Kalyan Trust · Ahmedabad, Gujarat · since 1986
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA_Donate_or_vol