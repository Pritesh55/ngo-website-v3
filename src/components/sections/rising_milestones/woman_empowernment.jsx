'use client';

import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

export function WomenEmpowermentSection() {
    const initiatives = [
        'SWA-SHAKTI',
        'Women Livelihood Restoration Project (WLRP)',
        'NORAD Project',
        'Workshops in rural Gujarat on women rights, societal issues and assistance',
        'Establishing common facility centers for women',
        'Skill development courses for women',
    ];

    const images = [
        '/images/Woman-Empowernment/02---pdf_20230112_160443_-046.jpg',
        '/images/Woman-Empowernment/02---pdf_20230112_160443_-047.jpg',
        '/images/Woman-Empowernment/02---pdf_20230112_160443_-048.jpg',
        '/images/Woman-Empowernment/02---pdf_20230112_160443_-049.jpg',
        '/images/Woman-Empowernment/02---pdf_20230112_160443_-050.jpg',
        '/images/Woman-Empowernment/02---pdf_20230112_160443_-051.jpg',
    ];

    return (
        <section className="py-20 px-4 bg-glow-fresh border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
                        Rising Milestones
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Transformative programs empowering communities through strategic initiatives
                    </p>
                </div>

                <div className="mb-16">
                    <div className="bg-linear-to-r from-teal-50 to-slate-50 rounded-xl border-2 border-teal-200 p-8 mb-8">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="p-3 bg-teal-100 rounded-lg flex-shrink-0 text-teal-700">
                                <Users className="w-8 h-8" />
                            </div>
                            <div className="flex-1">
                                <h3 className="max-xs:text-lg xs:text-xl sm:text-3xl font-bold text-teal-900 mb-3">Women Empowerment</h3>
                                <p className="text-lg text-teal-800 mb-4 leading-relaxed">
                                    The program's main objective is to upskill women in order to support them in becoming financially independent and raising their dignity in the process.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">Manav Kalyan Kendra Initiated Projects:</h4>
                            <ul className="space-y-3">
                                {initiatives.map((initiative, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-slate-700">
                                        <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                                        <span className="leading-relaxed font-medium">{initiative}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-teal-200/60 rounded-xl">
                            {images.map((src, idx) => (
                                <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-teal-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                    <img
                                        src={src}
                                        alt={`Women Empowerment ${idx + 1}`}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
