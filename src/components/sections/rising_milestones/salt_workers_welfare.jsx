import Rising_milestone_heading from '@/components/bmols/Rising_milestone_heading';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function SaltWorkersWelfareSection({ Salt_Workers_Welfare_activity_data }) {
    if (!Salt_Workers_Welfare_activity_data) return null;

    return (
        <section className="py-20 px-4 bg-pink-green-yellow border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <Rising_milestone_heading {...Salt_Workers_Welfare_activity_data} />

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="space-y-4">
                        <h4 className="text-xl font-bold text-slate-900 mb-6">
                            {Salt_Workers_Welfare_activity_data.projects_heading}
                        </h4>
                        {Salt_Workers_Welfare_activity_data.projects.map((project, idx) => {
                            const IconComponent = project.icon;
                            return (
                                <Card
                                    key={idx}
                                    className="bg-linear-to-r from-cyan-50 to-slate-50 border-cyan-200 p-6 hover:shadow-lg transition-all hover:border-cyan-300"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-cyan-100 rounded-lg flex-shrink-0 text-cyan-600">
                                            {IconComponent && <IconComponent className="w-6 h-6" />}
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
                        {Salt_Workers_Welfare_activity_data.activity_images.map((src, idx) => (
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

                {Salt_Workers_Welfare_activity_data.bottom_description && (
                    <Card className="bg-linear-to-r from-cyan-50 via-slate-50 to-cyan-50 border-cyan-200 p-6 mb-20">
                        <p className="text-slate-700 leading-relaxed">
                            {Salt_Workers_Welfare_activity_data.bottom_description}
                        </p>
                    </Card>
                )}
            </div>
        </section>
    );
}
