import Link from 'next/link'
import React from 'react'

const Nav_btn = () => {
    return (
        <Link href="/donate"
            className="bg-[rgba(202,12,12)] hover:bg-[rgb(255,0,17)] text-white text-lg  px-6 xl:px-8 py-2 transition-colors duration-300 font-medium border-2 border-transparent rounded-2xl">
            Donate
        </Link>
    )
}

export default Nav_btn