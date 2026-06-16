import { Card } from '@/components/ui/card';
import { Globe, Users, Briefcase, Trophy, FolderOpen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Seminar_on_Women_Empowerment_Img from '../../../../public/images/president-activity-section/03_Seminar_on_Women_Empowerment.jpg'
import President_with_Narendra_Modi_Img from '../../../../public/images/G04-other-activities-of-precident-Mkt/img4.jpg'
import Meeting_with_shreelanka_chambers_Img from '../../../../public/images/president-activity-section/04-meeting-with-shreelanka-chambers.jpg'
import Shri_Sundersinh_Bhandari_Img from '../../../../public/images/president-activity-section/02-President-of-MKT-and-Shri-Sundersinh-Bhandari-Former-Governor-of-Gujarat-discussing-during-the-exhibiton-held-in-GCCI-at-Ahmedabad-during-2001-02.jpg'
import Meet_and_Greet_with_former_President_of_India_Img from '../../../../public/images/president-activity-section/06-Meet-and-Greet-with-former-President-of-India.jpg'
import Smriti_Irani_img from '../../../../public/images/president-activity-section/05--Business-woman-wings.jpg'
import Section_header from '../common/section_header';

export function President_Learship_Section() {
    const activities = [
        {
            image: President_with_Narendra_Modi_Img,
            imageExplanations: [
                'President of MKT and Current PM of India (Narendra Modi) (Former CM of Gujarat) are sharing stage during the Outstanding Business Performance Award Presentation Function in GCCI at Ahmedabad during 2001-02.',
            ],
            gradientClass: 'from-orange-50/80 to-red-50/40',
            borderClass: 'border-orange-100 hover:border-orange-300',
            iconBgClass: 'bg-orange-100/80 group-hover:bg-orange-200/80',
            iconColorClass: 'text-orange-600',
            tagBgClass: 'bg-orange-100/60 text-orange-700 border-orange-200',
        },
        {
            image: Meeting_with_shreelanka_chambers_Img,
            imageExplanations: [
                "Meeting with Sri Lanka Chamber of Commerce during visit to Sri Lanka for Business Development between India & Sri Lanka organized by GCCI, in 2003-2004"
            ],
            gradientClass: 'from-blue-50/80 to-indigo-50/40',
            borderClass: 'border-blue-100 hover:border-blue-300',
            iconBgClass: 'bg-blue-100/80 group-hover:bg-blue-200/80',
            iconColorClass: 'text-blue-600',
            tagBgClass: 'bg-blue-100/60 text-blue-700 border-blue-200',
        },
        {
            image: Shri_Sundersinh_Bhandari_Img,
            imageExplanations: [
                'President of MKT and Shri Sundersinh Bhandari, Former Governor of Gujarat discussing during the exhibition held in GCCI at Ahmedabad during 2001-02',
                // 'Felicitation of Smt Savitriben Patel by Business women wing GCCI in the presence of Smt Smriti Irani Member of parliament and Present Union Minister.',

            ],

            gradientClass: 'from-emerald-50/80 to-teal-50/40',
            borderClass: 'border-emerald-100 hover:border-emerald-300',
            iconBgClass: 'bg-emerald-100/80 group-hover:bg-emerald-200/80',
            iconColorClass: 'text-emerald-600',
            tagBgClass: 'bg-emerald-100/60 text-emerald-700 border-emerald-200',
        },
        {
            image: Seminar_on_Women_Empowerment_Img,
            imageExplanations: [
                'Seminar on Women Empowerment through Emerging Business Opportunity in Small and Medium Enterprise organized by our president of MKT, Inaugurated by Shri Sureshchandra Mehta, Former Industry Minister and address by Shri Hashmukhbhai Aadhiya IAS, Industry Commissioner during 2001-02.',
            ],
            gradientClass: 'from-orange-50/80 to-red-50/40',
            borderClass: 'border-orange-100 hover:border-orange-300',
            iconBgClass: 'bg-orange-100/80 group-hover:bg-orange-200/80',
            iconColorClass: 'text-orange-600',
            tagBgClass: 'bg-orange-100/60 text-orange-700 border-orange-200',
        },
        {
            image: Smriti_Irani_img,
            imageExplanations: [
                'Felicitation of Smt Savitriben Patel by Business women wing GCCI in the presence of Smt Smriti Irani Member of parliament and Present Union Minister.',
            ],

            gradientClass: 'from-emerald-50/80 to-teal-50/40',
            borderClass: 'border-emerald-100 hover:border-emerald-300',
            iconBgClass: 'bg-emerald-100/80 group-hover:bg-emerald-200/80',
            iconColorClass: 'text-emerald-600',
            tagBgClass: 'bg-emerald-100/60 text-emerald-700 border-emerald-200',
        },
        {
            image: Meet_and_Greet_with_former_President_of_India_Img,
            imageExplanations: [
                'A high-level meet and greet session with the former President of India, discussing social and youth innovation projects During Year 2011- 2012.'
            ],
            gradientClass: 'from-amber-50/80 to-yellow-50/40',
            borderClass: 'border-amber-100 hover:border-amber-300',
            iconBgClass: 'bg-amber-100/80 group-hover:bg-amber-200/80',
            iconColorClass: 'text-amber-600',
            tagBgClass: 'bg-amber-100/60 text-amber-700 border-amber-200',
        },
    ];

    const leadership_header_info = {
        id: 1,
        icon: <Users className="w-4 h-4 text-blue-700" />,
        subTitle: 'President Leadership',
        title: 'President Leadership',
        description: 'Smt. Shree Savitriben Patel, Managing Trustee of Manav Kalyan Trust, has played a transformative role in championing women entrepreneurship and business development across India and internationally..',
    }
    return (
        <section className="py-20 px-4 bg-glow-candy border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto ">
                <div className="">
                    <Section_header section_header_info={leadership_header_info}></Section_header>

                    <p className='text-start text-xl text-slate-600  mx-auto leading-relaxed '>
                        Smt. Shree Savitriben Patel, The managing trustee of the
                        Manav Kalyan Trust, Played a significant role as
                        chairperson of the GCCI business women wing and has
                        helped many women launch their own businesses. She also
                        held the role of the HRD committee for the GCCI. She has
                        also travelled extensively for business development in
                        numerous nations including the United States, China,
                        Kenya, Egypt, Sri Lanka, Malaysia, Thailand, and
                        Singapore to establish market ties for the entrepreneur
                        training programmes run by institute.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 xl:columns-2 gap-x-6 gap-y-6 space-y-8 p-4">
                    {activities?.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                            <Card
                                key={index}
                                className={`group hover:shadow-xl transition-all duration-300 bg-linear-to-br ${activity.gradientClass} ${activity.borderClass} overflow-hidden h-full flex flex-col`}
                            >
                                <div className="px-8 pt-4 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* image Container */}
                                        <div className="mb-4">
                                            {activity.image && (
                                                <>

                                                    <div className="w-full rounded-lg overflow-hidden border border-slate-200/60 bg-slate-50">

                                                        <Link href={activity.image}>
                                                            <Image
                                                                src={activity.image}
                                                                alt={`${activity.image}`}
                                                                className="w-full object-contain object-center transition-transform duration-300 hover:scale-[1.02]"
                                                            />
                                                        </Link>

                                                    </div>
                                                </>
                                            )
                                            }
                                        </div>

                                        {/* Image Explanation Paragraphs */}
                                        <div className="space-y-3 mb-4">
                                            {activity.imageExplanations.map((explanation, expIdx) => {
                                                const textColorClass = expIdx === 0 ? 'text-slate-800' : activity.iconColorClass;
                                                return (
                                                    <p key={expIdx} className={`text-base md:text-lg font-semibold ${textColorClass} bg-white/60 py-3 rounded-lg border border-slate-100/60 leading-relaxed`}>
                                                        {explanation}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>

                                </div>
                            </Card>
                        );
                    })}
                </div>

                <p className='py-8 text-start text-xl text-slate-600  mx-auto leading-relaxed'>
                    She participated in
                    the state-level NMAY
                    committee as well as
                    the Empower
                    Committee, which
                    was headed by the
                    industry minister. She
                    also participated in
                    numerous national
                    and international
                    conferences for
                    business
                    development.
                </p>

                <Card className="bg-linear-to-r from-orange-50 via-white to-red-50 border-orange-200 p-8 shadow-xs flex flex-col gap-4">
                    <h3 className="text-2xl font-bold text-slate-900">
                        Global Impact & Influence
                    </h3>
                    <p className="text-slate-700 leading-relaxed">
                        Through her work with MKT and GCCI, Smt. Savitriben Patel has established herself as a prominent figure in women's economic empowerment. She has participated in state-level NMAY committees and national/international conferences for business development, influencing policy and fostering entrepreneurial ecosystems.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Seminar on Women Empowerment
                        through Emerging Business
                        Opportunity in Small and Medium
                        Enterprise organized by our
                        president of MKT, Inaugurated by
                        Shri Sureshchandra Mehta, Former
                        Industry Minister and address by
                        Shri Hashmukhbhai Aadhiya IAS,
                        Industry Commissioner during
                        2001-02.

                    </p>
                    <p className="text-slate-700 leading-relaxed">
                        Her efforts have directly contributed to enabling hundreds of entrepreneurs to establish sustainable businesses, generating employment and economic value across multiple sectors.
                    </p>
                </Card>
            </div>
        </section>
    );
}
