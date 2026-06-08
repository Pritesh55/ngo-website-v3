import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const Hero_btns = () => {
    return (

        <>
            <Link href="/our-activity" className="group px-8 py-4 bg-linear-to-r from-orange-500 to-darkred text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 flex items-center gap-2 cursor-pointer">
                Explore Our Impact
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link href="#our_cources" className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 cursor-pointer">
                Learn More
            </Link>
        </>
    )
}

export default Hero_btns