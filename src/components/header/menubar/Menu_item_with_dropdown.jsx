import React from 'react'

const Menu_item_with_dropdown = ({ menuItem:menuItem_Array }) => {

  console.log(menuItem_Array);

  return (
    <>
      <li className="group relative px-4 xl:px-6 py-2 hover:bg-orange-50">
        <a href={menuItem_Array.href} className="text-lg xl:text-xl text-lightred hover:text-ngo-primary transition-colors duration-300 capitalize">
          {menuItem_Array.label}
        </a>
        {/* <!-- Dropdown Menu --> */}
        <ul className="absolute left-6 mt-1.5 hidden group-hover:block bg-white shadow-md py-2  rounded-md w-48 transition-all duration-300">
          {menuItem_Array.dropdown.map((subItem, subIndex) => (
            <li key={subItem.menuId}>
              <a href={subItem.href} className="block px-4 py-2 text-lightred hover:bg-orange-50 capitalize">
                {subItem.label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </>
  )
}

export default Menu_item_with_dropdown