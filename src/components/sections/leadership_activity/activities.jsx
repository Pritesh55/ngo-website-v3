import { Card } from '@/components/ui/card';
import { Globe, Users, Briefcase, Trophy } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function President_Learship_Section() {
    const activities = [
        {
            title: 'Women Entrepreneurship',
            description: 'Led the GCCI business women wing, empowering women to launch and grow their own businesses through mentorship and training.',
            icon: Briefcase,
            images: [
                '/images/G04-other-activities-of-precident-Mkt/img4.jpg',
                '/images/president-activity-section/03-Seminar-on-Women-Empowerment.jpg'
            ],
            imageExplanations: [
                'President of MKT and Current PM of India are sharing stage during the Outstanding Business Performance Award Presentation Function in GCCI at Ahmedabad during 2001-02.'
            ],
            details: ['GCCI Business Women Wing', 'Entrepreneur Training', 'Business Development Support'],
            gradientClass: 'from-orange-50/80 to-red-50/40',
            borderClass: 'border-orange-100 hover:border-orange-300',
            iconBgClass: 'bg-orange-100/80 group-hover:bg-orange-200/80',
            iconColorClass: 'text-orange-600',
            tagBgClass: 'bg-orange-100/60 text-orange-700 border-orange-200',
        },
        {
            title: 'International Expansion',
            description: 'Extensive travel across multiple nations to establish market ties and develop training programs for entrepreneur development.',
            icon: Globe,
            images: [
                '/images/president-activity-section/04-meeting-with-shreelanka-chambers.jpg'
            ],
            imageExplanations: [
                "Meeting with Sri Lanka Chamber of Commerce during visit to Sri Lanka for Business Development between India & Sri Lanka organized by GCCI, in 2003-2004"
            ],
            details: ['US, China, Kenya, Egypt', 'Sri Lanka, Malaysia, Thailand', 'Singapore & Beyond'],
            gradientClass: 'from-blue-50/80 to-indigo-50/40',
            borderClass: 'border-blue-100 hover:border-blue-300',
            iconBgClass: 'bg-blue-100/80 group-hover:bg-blue-200/80',
            iconColorClass: 'text-blue-600',
            tagBgClass: 'bg-blue-100/60 text-blue-700 border-blue-200',
        },
        {
            title: 'Committee Leadership',
            description: 'Served as chairperson of GCCI business women wing and HRD committee, driving strategic initiatives.',
            icon: Users,
            images: [
                '/images/president-activity-section/05--Business-woman-wings.jpg',
                '/images/president-activity-section/02-President-of-MKT-and-Shri-Sundersinh-Bhandari-Former-Governor-of-Gujarat-discussing-during-the-exhibiton-held-in-GCCI-at-Ahmedabad-during-2001-02.jpg'
            ],
            imageExplanations: [
                'Felicitation of Smt Savitriben Patel by Business women wing GCCI in the presence of Smt Smriti Irani Member of parliament and Present Union Minister.',
                'President of MKT and Shri Sundersinh Bhandari, Former Governor of Gujarat discussing during the exhibition held in GCCI at Ahmedabad during 2001-02'
            ],
            details: ['Business Women Wing Chair', 'HRD Committee Member', 'Strategic Planning'],
            gradientClass: 'from-emerald-50/80 to-teal-50/40',
            borderClass: 'border-emerald-100 hover:border-emerald-300',
            iconBgClass: 'bg-emerald-100/80 group-hover:bg-emerald-200/80',
            iconColorClass: 'text-emerald-600',
            tagBgClass: 'bg-emerald-100/60 text-emerald-700 border-emerald-200',
        },
        {
            title: 'Business Excellence',
            description: 'Participated in national and international conferences advancing business development and social initiatives.',
            icon: Trophy,
            images: [
                '/images/president-activity-section/06-Meet-and-Greet-with-former-President-of-India.jpg'
            ],
            imageExplanations: [
                'A high-level meet and greet session with the former President of India, discussing social and youth innovation projects During Year 2011- 2012.'
            ],
            details: ['National Conferences', 'International Forums', 'Business Development'],
            gradientClass: 'from-amber-50/80 to-yellow-50/40',
            borderClass: 'border-amber-100 hover:border-amber-300',
            iconBgClass: 'bg-amber-100/80 group-hover:bg-amber-200/80',
            iconColorClass: 'text-amber-600',
            tagBgClass: 'bg-amber-100/60 text-amber-700 border-amber-200',
        },
    ];

    return (
        <section className="py-20 px-4 bg-glow-candy border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto ">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        President Leadership
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Smt. Shree Savitriben Patel, Managing Trustee of Manav Kalyan Trust, has played a transformative role in championing women entrepreneurship and business development across India and internationally.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-12">
                    {activities.map((activity, index) => {
                        const Icon = activity.icon;
                        return (
                            <Card
                                key={index}
                                className={`group hover:shadow-xl transition-all duration-300 bg-linear-to-br ${activity.gradientClass} ${activity.borderClass} overflow-hidden h-full flex flex-col`}
                            >
                                <div className="p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`p-3 ${activity.iconBgClass} rounded-lg transition-colors`}>
                                                <Icon className={`w-6 h-6 ${activity.iconColorClass}`} />
                                            </div>
                                            <h3 className="text-xl font-semibold text-slate-900 pt-1">
                                                {activity.title}
                                            </h3>
                                        </div>

                                        {/* Images Container */}
                                        <div className="mb-4">
                                            {activity.images.length === 1 ? (
                                                <div className="h-48 w-full rounded-lg overflow-hidden border border-slate-200/60 bg-slate-50">

                                                    <Link href={activity.images[0]}>
                                                        <Image
                                                            src={activity.images[0]}
                                                            alt={activity.title}
                                                            width={280}
                                                            height={192}
                                                            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                                                        />
                                                    </Link>

                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-2 gap-3">
                                                    {activity.images.map((imgSrc, imgIdx) => (
                                                        <div key={imgIdx} className="h-48 rounded-lg overflow-hidden border border-slate-200/60 bg-slate-50">

                                                            <Link href={imgSrc}>
                                                                <Image
                                                                    src={imgSrc}
                                                                    alt={`${activity.title} ${imgIdx + 1}`}
                                                                    width={280}
                                                                    height={192}
                                                                    className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-[1.02]"
                                                                />
                                                            </Link>

                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Image Explanation Paragraphs */}
                                        <div className="space-y-3 mb-4">
                                            {activity.imageExplanations.map((explanation, expIdx) => {
                                                const textColorClass = expIdx === 0 ? 'text-slate-800' : activity.iconColorClass;
                                                return (
                                                    <p key={expIdx} className={`text-base md:text-lg font-semibold ${textColorClass} bg-white/60 p-3 rounded-lg border border-slate-100/60 leading-relaxed`}>
                                                        {explanation}
                                                    </p>
                                                );
                                            })}
                                        </div>

                                        <p className="text-slate-700 mb-4 leading-relaxed">
                                            {activity.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {activity.details.map((detail, idx) => (
                                            <span
                                                key={idx}
                                                className={`inline-block px-3 py-1 text-sm rounded-full border ${activity.tagBgClass}`}
                                            >
                                                {detail}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        );
                    })}
                </div>

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
