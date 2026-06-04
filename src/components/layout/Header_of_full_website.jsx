import React from 'react'
import Menubar_v1 from '../header/menubar/menubar_v1'
import Mkt_Company_Logo from '../header/logo/Mkt_Company_Logo'

const Header_of_full_website = () => {
    
    return (
        <>
            <header className="bg-white py-4 sticky top-0 z-50 @container-8xl pr-2 sm:pr-0">
                <div className=" mx-auto flex items-center justify-between gap-x-4 gap-y-5 sm:px-4 flex-wrap">

                    <Mkt_Company_Logo></Mkt_Company_Logo>

                    <Menubar_v1></Menubar_v1>
                </div>


            </header>
        </>
    )
}

export default Header_of_full_website