import { Users } from 'lucide-react'
import React from 'react'

const Our_team = () => {
    return (
        <>
            <section className="bg-glow-warm py-24 border-b border-slate-100 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
                            <Users className="w-4 h-4 text-orange-700" />
                            <span className="text-xs font-bold text-orange-700 tracking-wider">અમારો સ્ટાફ (OUR TEAM)</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Meet Our Dedicated Team
                        </h2>
                        <p className="text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed font-semibold">
                            અમારા ઉત્સાહી અને સમર્પિત સભ્યો જેઓ સમાજના સકારાત્મક પરિવર્તન માટે અવિરત કાર્યરત છે.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                        {[
                            {
                                name: 'Mrs. Savitriben Patel',
                                role: 'President & Managing Trustee',
                                gujRole: 'પ્રમુખ અને વ્યવસ્થાપક ટ્રસ્ટી',
                                image: '/images/G04-other-activities-of-precident-Mkt/img11.jpg',
                                theme: 'from-orange-50/80 to-red-50/40',
                                border: 'border-orange-200'
                            },
                            {
                                name: 'Dipikaben Patel',
                                role: 'Counselor & Assistant Center Coordinator',
                                gujRole: 'કાઉન્સેલર અને મદદનીશ કેન્દ્ર સંચાલક',
                                image: '/images/G01-Aatmnirbhar/img11.jpg',
                                theme: 'from-blue-50/80 to-indigo-50/40',
                                border: 'border-blue-200'
                            },
                            {
                                name: 'Mahendrasinh Rathod',
                                role: 'Co-ordinator Assistant & Computer Operator',
                                gujRole: 'કો-ઓર્ડિનેટર આસિસ્ટન્ટ અને કમ્પ્યુટર ઓપરેટર',
                                image: '/images/G05-Skill-Traiing-Programs/img14.jpg',
                                theme: 'from-emerald-50/80 to-teal-50/40',
                                border: 'border-emerald-200'
                            },
                            {
                                name: 'Hansaben Prajapati',
                                role: 'Trainer & Teacher',
                                gujRole: 'તાલીમાર્થી શિક્ષક (ટ્રેનર)',
                                image: '/images/G05-Skill-Traiing-Programs/img11.jpg',
                                theme: 'from-pink-50/80 to-rose-50/40',
                                border: 'border-pink-200'
                            },
                            {
                                name: 'Poonamben Solanki',
                                role: 'Sewing Machine Teacher',
                                gujRole: 'સીવણ વર્ગ શિક્ષિકા',
                                image: '/images/courses/img8.jpg',
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
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.04]"
                                        />
                                    </div>
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-900 leading-snug mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-xs font-bold text-red-700 capitalize tracking-wider mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-xs md:text-sm text-slate-650 font-bold leading-relaxed border-t border-slate-200/50 pt-3">
                                            {member.gujRole}
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