import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Mkt_Company_Logo = () => {


    var logo_img_width_tw = 36;
    var logo_img_width_Mobile_tw = 24;

    var ml_for_logo_name_tw = 36;
    var ml_for_logo_name_Mobile_tw = 24;

    return (
        <>
            <div className="relative py-4 max-xxs:pr-2 max-xs:pr-4 xl:pr-8 hover:bg-orange-50 rounded-lg">
                {/* // Logo */}
                <Link href="/" className="flex items-center gap-x-0 text-ngo-primary" >
                    {/* <Sun_Icon_SVG></Sun_Icon_SVG> */}
                    <Image src={`/Mkt-logo.svg`} width={144} height={100} alt="logo" className="filter-to-logo-red absolute h-auto max-xxs:w-24 xxs:w-28 md:w-32 md:h-20 xl:w-36 xl:h-24"></Image>
                    <div className="flex flex-col  font-bold max-xxs:ml-24 xxs:ml-28 md:ml-32 xl:ml-36 text-darkred">
                        <span className="max-xxs:text-sm text-base  sm:text-lg md:text-xl xl:text-2xl">
                            Manav Kalyan Trust
                        </span>
                        <span className="max-xxs:text-xs text-sm sm:text-md md:text-lg xl:text-xl text-darkred tracking-wider">
                            Ahmedabad
                        </span>
                    </div>
                </Link>
            </div>




        </>
    )
}

export default Mkt_Company_Logo