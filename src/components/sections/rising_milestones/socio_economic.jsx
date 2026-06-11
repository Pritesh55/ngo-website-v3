import { Card } from '@/components/ui/card';
import { BarChart3 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function SocioEconomicSection() {
    const programs = [
        'Entrepreneurship Development Programme',
        'Group Enterpreneur Development Programme',
        'Techno Rural Entrepreneur Development Programme',
        'Rural Employment Generating Programme',
        'Prime minister\'s Employment Generating Programme',
    ];

    const images = [
        '/images/socio-economic-development-activities/02---pdf_20230112_160443_-052.jpg',
        '/images/socio-economic-development-activities/02---pdf_20230112_160443_-053.jpg',
        '/images/socio-economic-development-activities/02---pdf_20230112_160443_-054.jpg',
        '/images/socio-economic-development-activities/02---pdf_20230112_160443_-055.jpg',
        // '/images/socio-economic-development-activities/02---pdf_20230112_160443_-056.jpg',
        'https://web.archive.org/web/20170318005732im_/http://mktngo.org/gallery/gl-6.jpg',
        '/images/socio-economic-development-activities/02---pdf_20230112_160443_-057.jpg',
    ];

    return (
        <section className="pt-20 px-4 bg-glow-warm border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-linear-to-r from-green-50 to-slate-50 rounded-xl border-2 border-green-200 p-8 mb-12">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-green-100 rounded-lg flex-shrink-0 text-green-700">
                            <BarChart3 className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h3 className="max-xs:text-lg xs:text-xl sm:text-3xl font-bold text-green-900 mb-3">Socio-Economic Development Activities</h3>
                            <p className="text-lg text-green-800 leading-relaxed">
                                Give someone the right employment opportunities if you want to empower them. Another crucial factor to think about is financial inclusion.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="grid grid-cols-3 gap-3 p-4 bg-slate-50 border border-green-200/60 rounded-xl">
                        {images.map((src, idx) => (
                            <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-green-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                <Link href={src}>
                                    <Image
                                        src={src}
                                        alt={`Socio-Economic Development ${idx + 1}`}
                                        width={190}
                                        height={140}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>

                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Manav Kalyan Kendra Initiated Programs:</h4>
                        <ul className="space-y-3">
                            {programs.map((program, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed font-medium">{program}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Card className="bg-linear-to-r from-green-50 to-slate-50 border-green-200 p-6 mb-20">
                    <p className="text-slate-700 leading-relaxed">
                        Through comprehensive entrepreneurship programs, MKT has fostered economic independence across rural and urban areas, enabling individuals to establish sustainable enterprises that generate employment and contribute to broader economic development.
                    </p>
                </Card>
            </div>
        </section>
    );
}
