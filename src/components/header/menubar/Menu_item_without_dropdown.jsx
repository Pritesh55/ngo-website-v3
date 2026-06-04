import React from 'react'

const Menu_item_without_dropdown = ({ menuItem }) => {
    return (
        <li className='px-4 xl:px-6 py-2 hover:bg-orange-50'>
            <a href={menuItem.href} className="text-lg xl:text-xl text-lightred hover:text-ngo-primary transition-colors duration-300 capitalize">
                {menuItem.label}
            </a>
        </li>
    )
}

export default Menu_item_without_dropdown