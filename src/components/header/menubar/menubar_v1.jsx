'use client'
import React, { useState } from 'react'
import Menu_item_without_dropdown from './Menu_item_without_dropdown';
import Menu_item_with_dropdown from './Menu_item_with_dropdown';
import Nav_btn from '../Nav_btn';
import Link from 'next/link';

const menuItems = [
    { menuId: 1, label: 'Home', href: '/' },
    {
        menuId: 2, label: 'About', href: '#',
        dropdown: [
            { menuId: 2.1, label: 'About us', href: '#' },
            { menuId: 2.2, label: 'Our Activities', href: 'our-activity' },
            { menuId: 2.3, label: 'Success Stories', href: 'success-story' },
            { menuId: 2.4, label: 'Achieved awards', href: 'awards' },
            { menuId: 2.5, label: 'President Leadership', href: 'our-leadership' },
        ]
    },
    {
        menuId: 3, label: 'Cources',
        href: '#',
        dropdown: [
            { menuId: 3.1, label: 'Cource 1', href: '#' },
            { menuId: 3.2, label: 'Cource 2', href: '#' },
            { menuId: 3.3, label: 'Cource 3', href: '#' },
        ]
    },
    { menuId: 4, label: 'gallery', href: '/gallery' },
    { menuId: 5, label: 'Contact', href: '/contact' },
];

const Menubar_v1 = () => {

    const [is_Mobile_Menu_Open, set_Is_Mobile_Menu_Open] = useState(false);
    console.log(`is_Mobile_Menu_Open = ${is_Mobile_Menu_Open}`)
    return (
        <>
            {/* <!-- Mobile Menu Button (Hidden on larger screens) --> */}
            <div className="lg:hidden">
                <button id="menu-toggle" className="flex text-xl text-darkred hover:text-ngo-primary focus:outline-none transition-colors duration-300"
                    onClick={() => {
                        set_Is_Mobile_Menu_Open(!is_Mobile_Menu_Open);
                        console.log(`is_Mobile_Menu_Open = ${is_Mobile_Menu_Open}`)
                    }
                    } >
                    <svg className="max-xxs:w-6 w-6 xxs:w-8 xxs:h-8 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            {/* <!-- Desktop Navigation (Hidden on smaller screens) --> */}
            <nav className="hidden lg:block">
                <ul className="flex text-lg font-semibold justify-center">
                    {menuItems.map((item, index) => (
                        item.dropdown ? (
                            <Menu_item_with_dropdown key={item.menuId} menuItem={item}></Menu_item_with_dropdown>
                        ) : (
                            <Menu_item_without_dropdown key={item.menuId} menuItem={item}></Menu_item_without_dropdown>
                        )
                    ))}
                </ul>
            </nav>

            <div className="hidden lg:flex">
                <Nav_btn></Nav_btn>
            </div>


            {is_Mobile_Menu_Open &&
                <>
                    {/* <!-- Mobile Menu (Hidden by default) --> */}
                    <nav className="w-full lg:hidden bg-orange-50 border-t border-gray-200 transition-height duration-300 ease-in-out rounded-lg">
                        <ul className="px-4 pt-4 pb-6 text-xl flex lg:flex-col flex-wrap gap-x-12 lg:gap-x-4 gap-y-4 justify-evenly lg:justify-start items-center">
                            {menuItems.map((item, index) => (
                                item.dropdown ? (
                                    <li key={item.menuId}>
                                        <Link href={item.href} id={`${item.label.toLowerCase()}-dropdown-toggle`} className="block py-2 text-xl text-darkred hover:text-ngo-primary capitalize">
                                            {item.label}
                                        </Link>
                                        {/* <!-- Mobile Dropdown --> */}
                                        <ul id={`${item.label.toLowerCase()}-dropdown`} className="hidden pl-4">
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subItem.menuId}>
                                                    <Link href={subItem.href} className="block py-2 text-xl text-darkred hover:text-ngo-primary capitalize">
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li key={item.menuId}>
                                        <Link href={item.href} className="block py-2 text-xl text-darkred hover:text-ngo-primary capitalize">
                                            {item.label}
                                        </Link>
                                    </li>
                                )
                            ))}
                            <li className=''>
                                <Nav_btn></Nav_btn>
                            </li>
                        </ul>
                    </nav>
                </>
            }
        </>
    )
}

export default Menubar_v1