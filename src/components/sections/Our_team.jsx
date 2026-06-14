import { Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Section_header from './common/section_header'
import Image from 'next/image'

const Our_team = () => {

    const Our_Team_Section_Header_info = {
        id: 8,
        icon: <Users className="w-4 h-4 text-amber-600" />,
        subTitle: 'OUR TEAM',
        title: 'Meet Our Dedicated Team',
        description: 'Our enthusiastic and dedicated members who work tirelessly for positive social change.',
    }


    return (
        <>
            <section className="bg-glow-warm py-24 border-b border-slate-100 relative overflow-hidden">
                <div className="px-4 sm:px-0 mx-auto">
                    <Section_header section_header_info={Our_Team_Section_Header_info}></Section_header>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                name: 'Mrs. Savitriben Patel',
                                role: 'President & Managing Trustee',
                                gujRole: 'પ્રમુખ અને વ્યવસ્થાપક ટ્રસ્ટી',
                                image: '/images/G04-other-activities-of-precident-Mkt/img4.jpg',
                                theme: 'from-orange-50/80 to-red-50/40',
                                border: 'border-orange-200'
                            },
                            {
                                name: 'Dipikaben Patel',
                                role: 'Counselor & Assistant Center Coordinator',
                                gujRole: 'કાઉન્સેલર અને મદદનીશ કેન્દ્ર સંચાલક',
                                image: '/images/Team/dipikaben-patel.jpeg',
                                theme: 'from-blue-50/80 to-indigo-50/40',
                                border: 'border-blue-200'
                            },
                            {
                                name: 'Mahendrasinh Rathod',
                                role: 'MIS coordinator',
                                gujRole: 'કો-ઓર્ડિનેટર આસિસ્ટન્ટ અને કમ્પ્યુટર ઓપરેટર',
                                image: '/images/Team/Mahendrasingh-Rathod.jpeg',
                                theme: 'from-emerald-50/80 to-teal-50/40',
                                border: 'border-emerald-200'
                            },
                            {
                                name: 'Hansaben Prajapati',
                                role: 'Trainer & Teacher',
                                gujRole: 'તાલીમાર્થી શિક્ષક (ટ્રેનર)',
                                image: '/images/Team/Hansaben-Prajapati.jpeg',
                                theme: 'from-pink-50/80 to-rose-50/40',
                                border: 'border-pink-200'
                            },
                            {
                                name: 'Poonamben Solanki',
                                role: 'Sewing Machine Teacher',
                                gujRole: 'સીવણ વર્ગ શિક્ષિકા',
                                image: '/images/Team/poonamben-solanki.jpeg',
                                theme: 'from-amber-50/80 to-yellow-50/40',
                                border: 'border-amber-200'
                            }
                        ].map((member, idx) => (
                            <div
                                key={idx}
                                className={`bg-linear-to-br ${member.theme} border ${member.border} rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full`}
                            >
                                <div>
                                    {/* Profile Image placeholder */}
                                    <div className="h-56 w-full overflow-hidden bg-slate-100 relative border-b border-slate-150">
                                        <Link href={`${member.image}`}>
                                            <Image
                                                src={`${member.image}`}
                                                alt={member.name}
                                                width={410}
                                                height={224}
                                                className="w-full h-full object-cover object-center transition-transform duration-500 scale-[1] hover:scale-[1.04]"
                                            />
                                        </Link>

                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-bold text-red-700 capitalize tracking-wider">
                                            {member.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Our_team