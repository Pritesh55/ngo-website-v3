import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Phone, Send } from 'lucide-react';
import Contact_us_forms from '../forms/contact_us_forms';

const Contact_us_Main_Section = () => {


    return (
        <section className="py-20 px-4 bg-glow-fresh border-t border-slate-100 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* Page Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Contact Us
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We would love to hear from you. Reach out or visit our office!
                    </p>
                </div>

                {/* 2-Column Responsive Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Column 2: Google Map Embedded */}
                    <div className="lg:col-span-7 rounded-2xl overflow-hidden shadow-xs border border-slate-200 min-h-[450px] lg:min-h-full">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41528.645895209265!2d72.52121495126643!3d23.07334879453813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834433dac7e3%3A0x6098b80bc73d2bdd!2sMANAV%20KALYAN%20TRUST!5e0!3m2!1sen!2sin!4v1780737913925!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '450px' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                        ></iframe>
                    </div>

                    {/* Column 1: Contact Info & Form */}
                    <div className="lg:col-span-5 flex flex-col gap-6">

                        {/* Office & Info Cards - Designed like Rising Milestones Banners */}
                        <div className="bg-linear-to-br from-amber-50 to-slate-50 rounded-2xl border-2 border-amber-200/80 p-6 space-y-6 shadow-xs">
                            <div className="flex items-start gap-4">
                                <div className="p-2.5 bg-amber-100/80 rounded-lg flex-shrink-0 text-amber-800">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Our Office</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        <strong>MANAV KALYAN TRUST</strong><br />
                                        427 - 4th floor, Kalasagar Shopping Mall,<br />
                                        Near Satadhar cross road, Ghatlodiya,<br />
                                        Ahmedabad, Gujarat 380061
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 pt-5 border-t border-amber-200/40">
                                <div className="p-2.5 bg-amber-100/80 rounded-lg flex-shrink-0 text-amber-800">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-1">Call or Email</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-1">
                                        <span className="font-semibold text-slate-700">Phone:</span> (079) 27496640
                                    </p>
                                    <p className="text-slate-600 text-sm leading-relaxed">
                                        <span className="font-semibold text-slate-700">Email:</span> mktahmedabad1986@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Contact Form Card */}
                        <Card className="bg-white border-slate-200 p-6 shadow-xs rounded-2xl flex-1 hover:border-amber-300 transition-all duration-300">
                            <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">Send Message</h3>

                            <Contact_us_forms></Contact_us_forms>

                        </Card>
                    </div>



                </div>
            </div>
        </section>
    );
};

export default Contact_us_Main_Section;