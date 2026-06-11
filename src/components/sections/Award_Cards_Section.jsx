
import React from 'react'
import { Card } from '@/components/ui/card';
import { Award, Star } from 'lucide-react';
import Link from 'next/link';
import Awards_list from './awards/awards_list';
import Section_header from './common/section_header';

const Award_Cards_Section = () => {

    const award_section_header_info = {
        id: 8,
        icon: <Star className="w-4 h-4 text-amber-600" />,
        subTitle: 'Awards & Accolades',
        title: 'Awards & Accolades',
        description: 'Recognition of distinguished service and transformative impact in social development and business empowerment.',
    }

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
        <section className="py-20 px-4 bg-glow-warm border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <Section_header section_header_info={award_section_header_info}></Section_header>

                {/* Awards List */}
                <Awards_list></Awards_list>



                <div className="bg-linear-to-r from-amber-50 via-slate-50 to-amber-50 rounded-xl border border-amber-200 p-8">
                    <div className="flex items-start gap-4">
                        <Star className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                A Legacy of Excellence
                            </h3>


                            <div className="flex flex-col gap-y-4 mx-auto mb-10 w-full max-w-5xl">
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    Manav Kalyan Trust's work has received recognition from numerous institutions
                                    and organisations over the years. We appreciate their trust and confidence in
                                    our abilities by bestowing such an honour upon us. It motivates us, gives us hope
                                    that we are on the right track, and makes us aware of the enormous
                                    responsibility we have to the society.
                                </p>

                                <p className="text-lg text-slate-600 leading-relaxed">
                                    These awards and recognitions reflect decades of dedicated service to women's economic empowerment, social development, and business excellence. Each honor represents the tangible impact of MKT's initiatives and the transformative lives changed through our programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Award_Cards_Section