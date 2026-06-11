import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Awards_list = () => {

    const award_info_Array = [
        {
            id: 1,
            award_imgURL: 'https://web.archive.org/web/20161025212030im_/http://mktngo.org/sliders/New%20Picture.png',
            award_Name: 'Awarded by Government of Gujarat for excellent work in Gujarat',
        },
        {
            id: 2,
            award_imgURL: 'https://web.archive.org/web/20161026025749im_/http://mktngo.org/sliders/New%20Picture%20(1).png',
            award_Name: 'Awarded by Gujarat Chamber of Commerce & Development Industry for work in Gujarat',
        },
        {
            id: 3,
            award_imgURL: 'https://web.archive.org/web/20170113210356im_/http://mktngo.org/sliders/award-3.jpg',
            award_Name: 'Award of Excellence',
        },


        {
            id: 4,
            award_imgURL: 'https://web.archive.org/web/20170114010608im_/http://mktngo.org/sliders/award-1.jpg',
            award_Name: 'Excellence Award for National Social Development',
        },
        {
            id: 5,
            award_imgURL: 'https://web.archive.org/web/20161025212304im_/http://mktngo.org/sliders/New%20Picture%20(4).png',
            award_Name: 'Chief Minister’s Award for Excellence workin Health & Medicine',
        },
        {
            id: 6,
            award_imgURL: 'https://web.archive.org/web/20170113190254im_/http://mktngo.org/sliders/award-2.jpg',
            award_Name: 'Felicitation by Gujarat Chamber of Commerce for Chief Minister Award for Health & Medicine',
        },

        {
            id: 7,
            award_imgURL: 'https://web.archive.org/web/20161026025740im_/http://mktngo.org/sliders/New%20Picture%20(7).png',
            award_Name: 'International Status Award for Intellectual activity',
        },

        {
            id: 8,
            award_imgURL: 'https://web.archive.org/web/20161026025839im_/http://mktngo.org/sliders/4%20x%206----01-1.jpg',
            award_Name: 'Mother Teresa Sadbhavna Award',
        },

        {
            id: 9,
            award_imgURL: 'https://web.archive.org/web/20161025213507im_/http://mktngo.org/sliders/4%20x%206----021.jpg',
            award_Name: 'Indo Asia Achievers Award',
        },

        {
            id: 10,
            award_imgURL: 'https://web.archive.org/web/20161025205536im_/http://mktngo.org/sliders/4%20x%206----031.jpg',
            award_Name: 'Asia Pacific International Gold Star Award',
        },

    ];

    return (
        <>
            {/* Awards List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                {award_info_Array.map((award_info_Array, idx) => (
                    <div key={idx} className="group flex flex-col relative rounded-lg overflow-hidden border border-slate-200 bg-white shadow-xs hover:shadow-md transition-all duration-300 hover:border-amber-300">
                        <Link href={award_info_Array.award_imgURL}>
                            <Image
                                src={award_info_Array.award_imgURL}
                                alt={`Recognition document ${idx + 1}`}
                                width={420}
                                height={192}
                                className="w-full md:h-48 object-fill transition-transform duration-500 group-hover:scale-105"
                            />
                        </Link>

                        <div className="p-4">
                            <p className="text-base text-slate-700">{`${award_info_Array.id}) ${award_info_Array.award_Name}`}</p>
                        </div>


                    </div>
                ))}
            </div>


        </>
    )
}

export default Awards_list