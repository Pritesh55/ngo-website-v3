import Rising_milestone_heading from '@/components/bmols/Rising_milestone_heading';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function ScienceInnovationSection({ Science_Innovation_activity_data }) {
    if (!Science_Innovation_activity_data) return null;

    return (
        <section className="pt-20 px-4 bg-glow-candy border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <Rising_milestone_heading {...Science_Innovation_activity_data} />

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 border border-purple-200/60 rounded-xl">
                        {Science_Innovation_activity_data.activity_images.map((src, idx) => (
                            <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-purple-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                <Link href={src}>
                                    <Image
                                        src={src}
                                        alt={`Science and Innovation ${idx + 1}`}
                                        width={190}
                                        height={140}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6">
                            {Science_Innovation_activity_data.projects_heading}
                        </h4>
                        <ul className="space-y-3">
                            {Science_Innovation_activity_data.projects.map((project, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed font-medium">{project}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {Science_Innovation_activity_data.bottom_description && (
                    <Card className="bg-linear-to-r from-purple-50 to-slate-50 border-purple-200 p-6 mb-20">
                        <p className="text-slate-700 leading-relaxed">
                            {Science_Innovation_activity_data.bottom_description}
                        </p>
                    </Card>
                )}
            </div>
        </section>
    );
}
