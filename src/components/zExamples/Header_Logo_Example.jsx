import React from 'react'
import Sun_Icon_SVG from './Sun_Icon_SVG'
import Link from 'next/link'


const Header_Logo = () => {
    return (
        // Logo 
        <Link href="#" className="flex items-center text-ngo-primary hover:text-ngo-secondary" >
            <Sun_Icon_SVG></Sun_Icon_SVG>
            <span className="text-2xl font-bold">
                NGO
            </span>
        </Link>
    )
}

export default Header_Logo