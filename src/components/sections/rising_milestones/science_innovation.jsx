import { Card } from '@/components/ui/card';
import { Lightbulb } from 'lucide-react';
import Link from 'next/link';

export function ScienceInnovationSection() {
    const projects = [
        'Information & Technology Awareness Project',
        'Vigyan Jatha Activity',
        'Disaster Management',
        'Vermi Composed Training',
    ];

    const images = [
        // '/images/Science-and-Innovation/02---pdf_20230112_160443_-063.jpg',
        'https://web.archive.org/web/20170318073615im_/http://mktngo.org/gallery/gallery%20-11.jpg',
        // '/images/Science-and-Innovation/02---pdf_20230112_160443_-064.jpg',
        'https://web.archive.org/web/20170318020629im_/http://mktngo.org/gallery/gl-16.jpg',
        // '/images/Science-and-Innovation/02---pdf_20230112_160443_-065.jpg',
        'https://web.archive.org/web/20170318070747im_/http://mktngo.org/gallery/gallery%20-%2041.jpg',
        // '/images/Science-and-Innovation/02---pdf_20230112_160443_-066.jpg',
        'https://web.archive.org/web/20170318073657im_/http://mktngo.org/gallery/gl-15.jpg',
    ];

    return (
        <section className="pt-20 px-4 bg-glow-candy border-b border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="bg-linear-to-r from-purple-50 to-slate-50 rounded-xl border-2 border-purple-200 p-8 mb-12">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0 text-purple-700">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <div className="flex-1">
                            <h3 className="max-xs:text-lg xs:text-xl sm:text-3xl font-bold text-purple-900 mb-3">Science & Innovation</h3>
                            <p className="text-lg text-purple-800 leading-relaxed">
                                Aimed at students/Youth to explore global Technology world for innovation and advancement in science and technology.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 border border-purple-200/60 rounded-xl">
                        {images.map((src, idx) => (
                            <div key={idx} className=" rounded-lg bg-slate-100 overflow-hidden border border-purple-100 relative group cursor-pointer hover:shadow-md transition-shadow">
                                <Link href={src}>
                                    <img
                                        src={src}
                                        alt={`Science and Innovation ${idx + 1}`}
                                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Link>

                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="text-xl font-bold text-slate-900 mb-6">Manav Kalyan Kendra Initiated Projects:</h4>
                        <ul className="space-y-3">
                            {projects.map((project, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-slate-700">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0" />
                                    <span className="leading-relaxed font-medium">{project}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Card className="bg-linear-to-r from-purple-50 to-slate-50 border-purple-200 p-6 mb-20">
                    <p className="text-slate-700 leading-relaxed">
                        By fostering scientific curiosity and technological awareness among youth, MKT bridges the gap between classroom learning and real-world innovation. Our programs inspire the next generation of scientists, engineers, and problem-solvers.
                    </p>
                </Card>
            </div>
        </section>
    );
}
