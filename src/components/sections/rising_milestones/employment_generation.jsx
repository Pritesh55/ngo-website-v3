import Rising_milestone_heading from '@/components/bmols/Rising_milestone_heading';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export function EmploymentGenerationSection({ Employment_generation_activity_data }) {
    if (!Employment_generation_activity_data) return null;

    return (
        <div className="mb-16">
            <Rising_milestone_heading {...Employment_generation_activity_data} />

            <div className="grid md:grid-cols-2 gap-8">
                <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-teal-200/60 rounded-xl">
                    {Employment_generation_activity_data.activity_images.map((src, idx) => (
                        <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-teal-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                            <Link href={src}>
                                <Image
                                    src={src}
                                    alt={`Women Empowerment ${idx + 1}`}
                                    width={190}
                                    height={140}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                        </div>
                    ))}
                </div>

                <div className='h-full flex flex-col justify-center'>
                    <h4 className="text-xl font-bold text-slate-900 mb-4">
                        {Employment_generation_activity_data.projects_heading}
                    </h4>
                    <ul className="space-y-3">
                        {Employment_generation_activity_data.initiatives.map((initiative, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-700">
                                <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 flex-shrink-0" />
                                <span className="leading-relaxed font-medium">{initiative}</span>
                            </li>
                        ))}
                    </ul>
                </div>


            </div>

            {Employment_generation_activity_data.bottom_description && (
                <Card className="bg-linear-to-r from-teal-50 via-slate-50 to-teal-50 border-teal-200 p-6 mt-12 mb-20">
                    <p className="text-slate-700 leading-relaxed">
                        {Employment_generation_activity_data.bottom_description}
                    </p>
                </Card>
            )}
        </div>
    );
}
