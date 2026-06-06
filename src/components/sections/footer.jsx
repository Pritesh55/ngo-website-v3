import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full bg-linear-to-br from-orange-50 via-white to-red-50 border-t border-orange-100 pt-8 pb-4 px-6 sm:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-16 gap-12 mb-8">
                    {/* About */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div>
                            <h3 className="text-2xl font-bold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent">
                                Manav Kalyan Trust
                            </h3>
                            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mt-1">
                                Empowering Communities
                            </p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                            Empowering entrepreneurs and transforming lives through sustainable business development and social impact programs.
                        </p>
                        <div className="flex gap-3 mt-2">
                            {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                                <button
                                    key={social}
                                    className="w-10 h-10 rounded-full bg-white border border-orange-100 hover:border-orange-300 hover:bg-orange-50 transition-all flex items-center justify-center shadow-xs cursor-pointer animate-none hover:scale-105"
                                    aria-label={social}
                                >
                                    <span className="text-sm font-bold text-orange-600">{social[0]}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-4">
                        <h4 className="text-slate-900 font-bold text-base uppercase tracking-wider mb-4">Programs</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {[
                                'Women Entrepreneurship',
                                'Business Training',
                                'Market Development',
                                'Community Impact',
                            ].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-slate-600 hover:text-red-700 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full transition-transform group-hover:scale-125" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="lg:col-span-3">
                        <h4 className="text-slate-900 font-bold text-base uppercase tracking-wider mb-4">Resources</h4>
                        <ul className="space-y-3 text-sm font-medium">
                            {['Success Stories', 'Awards', 'News & Updates', 'Gallery'].map((link) => (
                                <li key={link}>
                                    <a
                                        href="#"
                                        className="text-slate-600 hover:text-red-700 transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full transition-transform group-hover:scale-125" />
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-5">
                        <h4 className="text-slate-900 font-bold text-base uppercase tracking-wider mb-4">Get In Touch</h4>
                        <div className="space-y-4 text-sm font-medium text-slate-600">
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-orange-100/80 rounded-lg text-orange-600 flex-shrink-0 mt-0.5">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="pt-0.5 leading-relaxed text-slate-600">
                                    <strong>MANAV KALYAN TRUST</strong><br />
                                    427 - 4th floor, Kalasagar Shopping Mall,<br />
                                    Near Satadhar cross road, Ghatlodiya,<br />
                                    Ahmedabad, Gujarat 380061
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-red-100/80 rounded-lg text-red-600 flex-shrink-0">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="pt-1">(079) 27496640</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-amber-100/80 rounded-lg text-amber-600 flex-shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="pt-1">mktahmedabad1986@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="h-2 bg-linear-to-r from-transparent via-orange-200 to-transparent mb-4" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between text-sm font-medium text-slate-500">
                    <p>© 2026 Manav Kalyan Trust. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-red-700 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-red-700 transition-colors">
                            Terms & Conditions
                        </a>
                        <a href="#" className="hover:text-red-700 transition-colors flex items-center gap-1 group">
                            Sitemap
                            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
