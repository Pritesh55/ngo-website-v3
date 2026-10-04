import Link from 'next/link'
import React from 'react'
import { FileCheck } from 'lucide-react'

const Nav_btn = () => {
    return (
        <div className="flex items-center gap-2">
            <Link
                href="/admission-form"
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm xl:text-base px-3.5 xl:px-4 py-2 transition-colors duration-300 font-semibold rounded-xl flex items-center gap-1.5 shadow-xs"
            >
                <FileCheck className="w-4 h-4" />
                <span>Apply Online</span>
            </Link>
            <Link
                href="/donate"
                className="bg-[rgba(202,12,12)] hover:bg-[rgb(255,0,17)] text-white text-sm xl:text-base px-4 xl:px-6 py-2 transition-colors duration-300 font-medium rounded-xl"
            >
                Donate
            </Link>
        </div>
    )
}

export default Nav_btn