import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const socialLinks = [
    {
        name: 'Facebook',
        icon: (
            <svg className="w-5 h-5 text-blue-600 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.85z" />
            </svg>
        ),
        href: 'https://www.facebook.com/profile.php?id=100094336174551',
        hoverClass: 'hover:border-blue-300 hover:bg-blue-50'
    },
    {
        name: 'Instagram',
        icon: (
            <svg className="w-5 h-5 text-pink-600 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
        href: 'https://www.instagram.com/manavkalyantrust_1986',
        hoverClass: 'hover:border-pink-300 hover:bg-pink-50'
    },
    {
        name: 'WhatsApp',
        icon: (
            <svg className="w-5 h-5 text-[#25D366] fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.378 3.472 2.238 2.24 3.466 5.216 3.464 8.385-.004 6.535-5.33 11.859-11.861 11.859-2.002-.001-3.97-.509-5.713-1.479L0 24zm6.59-4.846c1.6.95 3.16 1.455 4.703 1.456 5.405 0 9.803-4.394 9.806-9.799.002-2.618-1.012-5.08-2.859-6.93C16.402 2.03 13.932 1.015 11.86 1.015c-5.409 0-9.809 4.397-9.813 9.803-.001 1.636.433 3.23 1.258 4.643l-.995 3.635 3.737-.98zM17.18 14.8c-.29-.145-1.72-.85-1.985-.946-.266-.097-.46-.144-.654.145-.19.29-.737.946-.906 1.137-.167.19-.335.213-.625.069-1.394-.697-2.3-1.21-3.21-2.78-.24-.415.24-.385.69-.77.12-.1.24-.24.36-.36.12-.12.16-.2.24-.34.08-.14.04-.26-.02-.38-.06-.12-.654-1.577-.897-2.153-.235-.567-.478-.49-.654-.498-.17-.008-.363-.01-.555-.01-.19 0-.5.07-.76.36-.26.29-1 1.02-1 2.49 0 1.47 1.07 2.89 1.21 3.08.14.19 2.1 3.21 5.09 4.51.71.31 1.27.5 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.335z" />
            </svg>
        ),
        href: 'https://wa.me/9194260620683?text=Join%20now',
        hoverClass: 'hover:border-emerald-300 hover:bg-emerald-50'
    },
    {
        name: 'Google Map',
        icon: <MapPin className="w-5 h-5 text-red-650" />,
        href: 'https://www.google.com/maps/place/MANAV+KALYAN+TRUST/@23.0720672,72.5124606,13z/data=!4m6!3m5!1s0x395e834433dac7e3:0x6098b80bc73d2bdd!8m2!3d23.0747676!4d72.535598!16s%2Fg%2F11ddwgd7wq?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D',
        hoverClass: 'hover:border-red-300 hover:bg-red-50'
    }
];

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
                            <p className="text-xs font-semibold text-slate-500 capitalize tracking-widest mt-1">
                                Empowering Communities
                            </p>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                            Empowering entrepreneurs and transforming lives through sustainable business development and social impact programs.
                        </p>
                        <div className="flex gap-3 mt-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-white border border-slate-200 transition-all flex items-center justify-center shadow-xs cursor-pointer hover:scale-105 ${social.hoverClass}`}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-4">
                        <h4 className="text-slate-900 font-bold text-base capitalize tracking-wider mb-4">Programs</h4>
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
                        <h4 className="text-slate-900 font-bold text-base capitalize tracking-wider mb-4">Resources</h4>
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
                        <h4 className="text-slate-900 font-bold text-base capitalize tracking-wider mb-4">Get In Touch</h4>
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
                                <span className="pt-1">
                                    94260 620683
                                </span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="p-2 bg-amber-100/80 rounded-lg text-amber-600 flex-shrink-0">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="pt-1">mktahmedabad1986@gmail.com</span>
                            </div>
                            <div className="pt-2">
                                <a
                                    href="https://wa.me/9194260620683?text=Join%20now"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition-all font-bold shadow-xs hover:shadow-md text-xs md:text-sm cursor-pointer"
                                >
                                    <img
                                        src="/icons/whatsapp-color-svgrepo-com.svg"
                                        alt="WhatsApp"
                                        className="w-4 h-4 object-contain brightness-0 invert"
                                    />
                                    Join now on WhatsApp
                                </a>
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
                        <Link href="#" className="hover:text-red-700 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="hover:text-red-700 transition-colors">
                            Terms & Conditions
                        </Link>
                        <Link href="#" className="hover:text-red-700 transition-colors flex items-center gap-1 group">
                            Sitemap
                            <ExternalLink className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
