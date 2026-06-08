import Link from 'next/link';
import React from 'react'

const Menu_item_with_dropdown = ({ menuItem: menuItem_Array }) => {

  console.log(menuItem_Array);

  return (
    <>
      <li className="group relative px-4 xl:px-6 py-2 hover:bg-orange-50">
        <Link href={menuItem_Array.href} className="text-lg xl:text-xl text-lightred hover:text-ngo-primary transition-colors duration-300 capitalize">
          {menuItem_Array.label}
        </Link>
        {/* <!-- Dropdown Menu --> */}
        <ul className="absolute z-[99] left-6 mt-1.5 hidden group-hover:block bg-white shadow-md py-2  rounded-md w-max transition-all duration-300">
          {menuItem_Array.dropdown.map((subItem, subIndex) => {
            const SubIcon = subItem.icon;
            return (
              <li key={subItem.menuId}>
                <Link href={subItem.href} className="flex items-center gap-2 px-4 py-2 text-lightred hover:bg-orange-50 hover:text-ngo-primary transition-colors duration-250 capitalize">
                  {SubIcon && <SubIcon className="w-4.5 h-4.5 text-ngo-primary" />}
                  <span>{subItem.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </li>
    </>
  )
}

export default Menu_item_with_dropdown