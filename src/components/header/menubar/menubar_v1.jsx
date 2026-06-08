'use client'
import React, { useState } from 'react'
import Menu_item_without_dropdown from './Menu_item_without_dropdown';
import Menu_item_with_dropdown from './Menu_item_with_dropdown';
import Nav_btn from '../Nav_btn';
import Link from 'next/link';
import { Home, Info, GraduationCap, Image, Phone } from 'lucide-react';

const menuItems = [
    { menuId: 1, label: 'Home', href: '/', icon: Home },
    {
        menuId: 2, label: 'About', href: '#', icon: Info,
        dropdown: [
            { menuId: 2.1, label: 'About us', href: '/about-us' },
            { menuId: 2.2, label: 'Our Activities', href: '/our-activity' },
            { menuId: 2.6, label: 'Our Partners', href: '/our-partners' },
            { menuId: 2.3, label: 'Success Stories', href: '/success-story' },
            { menuId: 2.4, label: 'Achieved awards', href: '/awards' },
            { menuId: 2.5, label: 'President Leadership', href: '/our-leadership' },
        ]
    },
    {
        menuId: 3, label: 'Courses', href: '#', icon: GraduationCap,
        dropdown: [
            { menuId: 3.1, label: 'સીવણ મશીન ઓપરેટર (Sewing)', href: '/courses/sewing-machine' },
            { menuId: 3.3, label: 'સરકારી યોજના માર્ગદર્શન (Govt Schemes)', href: '/courses/government-schemes' },
            { menuId: 3.4, label: 'MKT આઈટી કોર્ષ (MKT IT Courses)', href: '/courses/mkt-institute' },
        ]
    },
    { menuId: 4, label: 'gallery', href: '/gallery', icon: Image },
    { menuId: 5, label: 'Contact', href: '/contact', icon: Phone },
];

const Menubar_v1 = () => {

    const [is_Mobile_Menu_Open, set_Is_Mobile_Menu_Open] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const toggleMobileDropdown = (menuId) => {
        if (openMobileDropdown === menuId) {
            setOpenMobileDropdown(null);
        } else {
            setOpenMobileDropdown(menuId);
        }
    };

    console.log(`is_Mobile_Menu_Open = ${is_Mobile_Menu_Open}`)
    return (
        <>
            {/* <!-- Mobile Menu Button (Hidden on larger screens) --> */}
            <div className="lg:hidden">
                <button id="menu-toggle" className="flex text-xl text-darkred hover:text-ngo-primary focus:outline-none transition-colors duration-300"
                    onClick={() => {
                        set_Is_Mobile_Menu_Open(!is_Mobile_Menu_Open);
                        setOpenMobileDropdown(null); // Reset dropdown when toggling menu
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
                        <ul className="px-6 py-6 text-xl flex flex-col gap-y-4 justify-start items-start">
                            {menuItems.map((item, index) => {
                                const IconComp = item.icon;
                                return item.dropdown ? (
                                    <li key={item.menuId} className="w-full">
                                        <button 
                                            onClick={() => toggleMobileDropdown(item.menuId)}
                                            id={`${item.label.toLowerCase()}-dropdown-toggle`} 
                                            className="w-full flex items-center justify-between py-2 text-xl text-darkred hover:text-ngo-primary capitalize focus:outline-none"
                                        >
                                            <div className="flex items-center gap-3">
                                                {IconComp && <IconComp className="w-5.5 h-5.5 text-ngo-primary" />}
                                                <span>{item.label}</span>
                                            </div>
                                            <svg 
                                                className={`w-5 h-5 transition-transform duration-200 ${openMobileDropdown === item.menuId ? 'rotate-180' : ''} text-slate-500`} 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {/* <!-- Mobile Dropdown --> */}
                                        <ul 
                                            id={`${item.label.toLowerCase()}-dropdown`} 
                                            className={`${openMobileDropdown === item.menuId ? 'block' : 'hidden'} pl-8 border-l border-orange-200 space-y-1 mt-1 ml-2.5`}
                                        >
                                            {item.dropdown.map((subItem, subIndex) => (
                                                <li key={subItem.menuId}>
                                                    <Link 
                                                        href={subItem.href} 
                                                        onClick={() => set_Is_Mobile_Menu_Open(false)}
                                                        className="block py-2 text-lg text-slate-700 hover:text-ngo-primary capitalize"
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ) : (
                                    <li key={item.menuId} className="w-full">
                                        <Link 
                                            href={item.href} 
                                            onClick={() => set_Is_Mobile_Menu_Open(false)}
                                            className="w-full flex items-center gap-3 py-2 text-xl text-darkred hover:text-ngo-primary capitalize"
                                        >
                                            {IconComp && <IconComp className="w-5.5 h-5.5 text-ngo-primary" />}
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                            <li className='w-full flex justify-center pt-4 border-t border-orange-200/50 mt-2'>
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