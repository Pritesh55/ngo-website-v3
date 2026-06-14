

import { Card } from '@/components/ui/card';
import { Award, Star } from 'lucide-react';
import Link from 'next/link';
import Awards_list from './awards/awards_list';
import Section_header from './common/section_header';
import Image from 'next/image';


export function AwardsSection() {

    const awards = [
        {
            year: '2009-10',
            title: 'Award of Excellence',
            issuer: 'Manav Kalyan Trust',
            description: 'Recognition for exceptional performance and leadership in organizational excellence.',
            category: 'Excellence',
            image: 'https://web.archive.org/web/20170113210356im_/http://mktngo.org/sliders/award-3.jpg'
        },
        {
            year: '2012',
            title: 'National Social Development Award',
            issuer: 'Government Recognition',
            description: 'Honored as Managing Trustee of Manav Kalyan Trust for outstanding contributions to social development.',
            category: 'Social Impact',
            image: 'https://web.archive.org/web/20161025205329im_/http://mktngo.org/sliders/New%20Picture%20(6).png'
        },
        {
            year: '2012',
            title: 'Chief Minister’s Award for Excellence workin Health & Medicine',
            issuer: 'Ministry Recognition',
            description: 'Awarded for outstanding contributions to the field of health and medicine as an institution.',
            category: 'Health & Medicine',
            image: 'https://web.archive.org/web/20161025212304im_/http://mktngo.org/sliders/New%20Picture%20(4).png'
        },

        {
            year: '2012',
            title: 'International Status Award for Intellectual activity',
            issuer: 'International Organization',
            description: 'Awarded for intellectual activity and contributions to international business development initiatives.',
            category: 'Intellectual activity',
            image: 'https://web.archive.org/web/20161026025740im_/http://mktngo.org/sliders/New%20Picture%20(7).png'
        },

    ];

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
            award_imgURL: '/images/awards/03-Award-of-Excellence.webp',
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

    const award_section_header_info = {
        id: 8,
        icon: <Star className="w-4 h-4 text-amber-600" />,
        subTitle: 'Awards & Accolades',
        title: 'Awards & Accolades',
        description: 'Recognition of distinguished service and transformative impact in social development and business empowerment.',
    }


    return (
        <section className="py-20 px-4 bg-glow-warm border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                <Section_header section_header_info={award_section_header_info}></Section_header>


                {/* CSS Columns Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 mb-10 [column-fill:_balance]">
                    {awards.map((award, index) => (
                        <div key={index} className="break-inside-avoid mb-6 flex justify-center w-full">
                            <Card
                                className="group hover:shadow-lg transition-all duration-300 border-slate-200 hover:border-amber-300 bg-linear-to-br from-white to-slate-50 overflow-hidden flex flex-col w-full max-w-[360px]"
                            >
                                {award.image && (
                                    <div className="h-48 w-full overflow-hidden border-b border-slate-200 bg-slate-50 flex-shrink-0">

                                        <Link href={award.image}>
                                            <Image
                                                src={award.image}
                                                alt={award.title}
                                                width={300}
                                                height={192}
                                                className="w-full h-full object-fill object-center transition-transform duration-500 group-hover:scale-[1.02]"
                                            />
                                        </Link>
                                    </div>
                                )}
                                <div className="flex-1 p-6 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start justify-between mb-3">
                                            <div className="flex-1">
                                                <p className="text-xs font-bold text-amber-600 capitalize tracking-wider mb-1">
                                                    {award.year}
                                                </p>
                                                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                                                    {award.title}
                                                </h3>
                                            </div>
                                            <Award className="w-5 h-5 text-amber-500 flex-shrink-0 ml-2 mt-1" />
                                        </div>
                                        <p className="text-sm text-amber-700 font-semibold mb-2">
                                            {award.issuer}
                                        </p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {award.description}
                                        </p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-200 flex items-center justify-between mt-4">
                                        <span className="inline-block px-2 py-1 text-xs font-semibold bg-amber-100 text-amber-700 rounded">
                                            {award.category}
                                        </span>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>

                <div className=" mx-auto text-center mb-10 w-full">
                    <p className="text-xl text-slate-600 leading-relaxed">
                        Manav Kalyan Trust's work has received recognition from numerous institutions
                        and organisations over the years. We appreciate their trust and confidence in
                        our abilities by bestowing such an honour upon us. It motivates us, gives us hope
                        that we are on the right track, and makes us aware of the enormous
                        responsibility we have to the society.
                    </p>
                </div>

                {/* Awards List */}
                <Awards_list></Awards_list>

                <div className="bg-linear-to-r from-amber-50 via-slate-50 to-amber-50 rounded-xl border border-amber-200 p-8">
                    <div className="flex items-start gap-4">
                        <Star className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                A Legacy of Excellence
                            </h3>
                            <p className="text-slate-700 leading-relaxed">
                                These awards and recognitions reflect decades of dedicated service to women's economic empowerment, social development, and business excellence. Each honor represents the tangible impact of MKT's initiatives and the transformative lives changed through our programs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
