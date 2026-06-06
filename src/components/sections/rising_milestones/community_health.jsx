import { Card } from '@/components/ui/card';
import { Heart, Activity, Stethoscope } from 'lucide-react';

export function CommunityHealthSection() {
    const projects = [
        { name: 'NACP Project/AIDS Prevention (Tejaswini Saptah)', icon: Activity },
        { name: 'Rural Health Camps', icon: Stethoscope },
        { name: 'Eye Care Camps', icon: Heart },
    ];

    const images = [
        // '/images/Community-health-Programs/02---pdf_20230112_160443_-059.jpg',
        '/images/Community-health-Programs/02---pdf_20230112_160443_-059.jpg',
        '/images/Community-health-Programs/02---pdf_20230112_160443_-060.jpg',
        'https://web.archive.org/web/20170318125558im_/http://mktngo.org/gallery/gl-14.jpg',
        '/images/Community-health-Programs/02---pdf_20230112_160443_-062.jpg',
    ];

    return (
        <section className="pt-20 px-4 bg-glow-cool border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-linear-to-r from-blue-50 to-slate-50 rounded-xl border-2 border-blue-200 p-8 mb-12">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0 text-blue-700">
                            <Heart className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h3 className="max-xs:text-lg xs:text-xl sm:text-3xl font-bold text-blue-900 mb-3">Community Health Programme</h3>
                            <p className="text-lg text-blue-800 leading-relaxed">
                                The main aim of the health programme is to target the under-privileged families who lack the financial means to seek medical attention.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Manav Kalyan Kendra Initiated Projects:</h4>
                        <ul className="flex flex-col space-y-4">
                            {projects.map((project, idx) => {
                                const IconComponent = project.icon;
                                return (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                                        <div className="p-2 bg-blue-100 rounded flex-shrink-0">
                                            <IconComponent className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <span className="text-slate-700 font-medium leading-relaxed pt-0.5">{project.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 border border-blue-200/60 rounded-xl">
                        {images.map((src, idx) => (
                            <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-blue-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                <img
                                    src={src}
                                    alt={`Community Health ${idx + 1}`}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <Card className="bg-linear-to-r from-blue-50 via-slate-50 to-blue-50 border-blue-200 p-6 mb-20">
                    <p className="text-slate-700 leading-relaxed">
                        Through comprehensive health initiatives, MKT ensures that medical care reaches those most in need, particularly in rural areas where access to healthcare is limited. Our programs focus on preventive care, awareness, and treatment for vulnerable populations.
                    </p>
                </Card>
            </div>
        </section>
    );
}
