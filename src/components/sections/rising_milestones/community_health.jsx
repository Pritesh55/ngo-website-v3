import Rising_milestone_heading from '@/components/bmols/Rising_milestone_heading';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function CommunityHealthSection({ Community_Health_activity_data }) {
    if (!Community_Health_activity_data) return null;

    return (
        <section className="pt-20 px-4 bg-glow-cool border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <Rising_milestone_heading {...Community_Health_activity_data} />

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6">
                            {Community_Health_activity_data.projects_heading}
                        </h4>
                        <ul className="flex flex-col space-y-4">
                            {Community_Health_activity_data.projects.map((project, idx) => {
                                const IconComponent = project.icon;
                                return (
                                    <li key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors">
                                        <div className="p-2 bg-blue-100 rounded flex-shrink-0">
                                            {IconComponent && <IconComponent className="w-5 h-5 text-blue-600" />}
                                        </div>
                                        <span className="text-slate-700 font-medium leading-relaxed pt-0.5">{project.name}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 border border-blue-200/60 rounded-xl">
                        {Community_Health_activity_data.activity_images.map((src, idx) => (
                            <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-blue-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                <Link href={src}>
                                    <Image
                                        src={src}
                                        alt={`Community Health ${idx + 1}`}
                                        width={190}
                                        height={140}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

                {Community_Health_activity_data.bottom_description && (
                    <Card className="bg-linear-to-r from-blue-50 via-slate-50 to-blue-50 border-blue-200 p-6 mb-20">
                        <p className="text-slate-700 leading-relaxed">
                            {Community_Health_activity_data.bottom_description}
                        </p>
                    </Card>
                )}
            </div>
        </section>
    );
}
