import React from 'react'
import Menubar_v1 from '../header/menubar/menubar_v1'
import Mkt_Company_Logo from '../header/logo/Mkt_Company_Logo'

const Header_of_full_website = () => {

    return (
        <>
            <div className="w-full flex justify-center flex-wrap text-base bg-amber-500">This website is now under construction..</div>
            <header className="w-full 2xl:container bg-linear-to-b from-amber-50/80 to-yellow-50/40 py-4 pr-2 sm:pr-0">
                <div className=" flex items-center justify-evenly xxs:justify-between gap-x-4 gap-y-5 sm:pl-4 pr-4 2xl:px-0 flex-wrap">

                    <Mkt_Company_Logo></Mkt_Company_Logo>

                    <Menubar_v1></Menubar_v1>
                </div>


            </header>
        </>
    )
}

export default Header_of_full_website