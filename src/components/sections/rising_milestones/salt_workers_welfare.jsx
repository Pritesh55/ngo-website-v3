import { Card } from '@/components/ui/card';
import { Home, Shield, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function SaltWorkersWelfareSection() {
    const projects = [
        {
            name: 'Namak Maidoor Awas Yojna',
            description: 'Housing scheme for salt Workers',
            icon: Home,
        },
        {
            name: 'Awareness Camps',
            description: 'Safety Measures of Salt Workers',
            icon: Shield,
        },
        {
            name: 'Community Support',
            description: 'Welfare and livelihood assistance',
            icon: Users,
        },
    ];

    const images = [
        '/images/salt-workers/02---pdf_20230112_160443_-067.jpg',
        '/images/salt-workers/02---pdf_20230112_160443_-068.jpg',
        '/images/salt-workers/02---pdf_20230112_160443_-069.jpg',
        '/images/salt-workers/02---pdf_20230112_160443_-070.jpg',
    ];

    return (
        <section className="py-20 px-4 bg-pink-green-yellow border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-linear-to-r from-cyan-50 to-slate-50 rounded-xl border-2 border-cyan-200 p-8 mb-12">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-cyan-100 rounded-lg shrink-0 text-cyan-700">
                            <Shield className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h3 className="max-xs:text-lg xs:max-xs:text-lg xs:text-xl sm:text-3xl font-bold text-cyan-900 mb-3">Welfare Activities for Salt Workers</h3>
                            <p className="max-xs:text-sm xs:max-xs:text-sm xs:text-base sm:text-lg text-cyan-800 leading-relaxed">
                                Special welfare activities are required to uplift the economic conditions of salt workers and ensure their dignity and safety.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Manav Kalyan Kendra Initiated Projects:</h4>
                        {projects.map((project, idx) => {
                            const IconComponent = project.icon;
                            return (
                                <Card
                                    key={idx}
                                    className="bg-linear-to-r from-cyan-50 to-slate-50 border-cyan-200 p-6 hover:shadow-lg transition-all hover:border-cyan-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-cyan-100 rounded-lg flex-shrink-0 text-cyan-600">
                                            <IconComponent className="w-6 h-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-bold text-slate-900 mb-1">{project.name}</h5>
                                            <p className="text-sm text-slate-600">{project.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 border border-cyan-200/60 rounded-xl">
                        {images.map((src, idx) => (
                            <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-cyan-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                <Link href={src}>
                                    <Image
                                        src={src}
                                        alt={`Salt Workers Welfare ${idx + 1}`}
                                        width={190}
                                        height={140}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>

                            </div>
                        ))}
                    </div>
                </div>

                <Card className="bg-linear-to-r from-cyan-50 via-slate-50 to-cyan-50 border-cyan-200 p-6 mb-20">
                    <p className="text-slate-700 leading-relaxed">
                        Salt workers, often among the most marginalized communities, require focused support for livelihood improvement, housing security, and workplace safety. MKT's comprehensive welfare programs address these critical needs through housing schemes and awareness initiatives.
                    </p>
                </Card>
            </div>
        </section>
    );
}
