'use client'
import React from 'react'
import Link from 'next/link'
import { ChevronRight, GraduationCap } from 'lucide-react'

const courses = [
  {
    name: 'સીવણ મશીન ઓપરેટર (Sewing Machine Operator)',
    duration: '૩ મહિના (3 Months)',
    fee: '3000 રૂપિયા (3 મહિનાનાં)',
    description: 'અમારો આ સઘન તાલીમ કાર્યક્રમ મહિલાઓને ઔદ્યોગિક સીવણ મશીનો પર કુશળતાપૂર્વક કામ કરવા અને આત્મનિર્ભર બનવામાં મદદ કરે છે.',
    image: '/images/courses/img8.jpg',
    link: '/courses/sewing-machine',
    theme: 'from-orange-50/80 to-red-50/40',
    border: 'border-orange-200 hover:border-orange-300',
    tagClass: 'border-orange-200 bg-orange-100/60 text-orange-700',
    btnClass: 'from-orange-500 to-darkred text-white hover:shadow-red-500/20'
  },
  {
    name: 'સરકારી યોજના માર્ગદર્શન અને સહાય (Govt Schemes Guidance)',
    duration: 'કાયમી સેવા (Ongoing)',
    fee: 'વિના મૂલ્યે (Free)',
    description: 'અમે ગરીબ અને જરૂરિયાતમંદ મહિલાઓને વિવિધ લક્ષી સરકારી કલ્યાણકારી યોજનાઓનો લાભ અપાવવાનું કામ કરીએ છીએ જેમ કે મહિલા સ્વાવલંબન, વ્હાલી દીકરી યોજના, વગેરે.',
    image: '/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg',
    link: '/courses/government-schemes',
    theme: 'from-emerald-50/80 to-teal-50/40',
    border: 'border-emerald-250 hover:border-emerald-350',
    tagClass: 'border-emerald-200 bg-emerald-100/60 text-emerald-700',
    btnClass: 'from-emerald-500 to-teal-600 text-white hover:shadow-teal-500/20'
  },
  {
    name: 'ડેટા એન્ટ્રી ઓપરેટર (Domestic Data Entry Operator)',
    duration: '૨ મહિના (2 Months)',
    fee: 'Rs. 4000 + GST',
    description: 'MS Office, Table, Charts, અને બેઝિક કોમ્પ્યુટર ટ્રેનિંગનો યુનિવર્સિટી સર્ટિફાઈડ કોર્સ. (૮ ધોરણ પાસ પછી પ્રવેશ)',
    image: '/images/Certified cources/WhatsApp Image 2026-06-08 at 12.21.11 PM.jpeg',
    link: '/courses/mkt-institute#data-entry',
    theme: 'from-violet-50/80 to-purple-50/40',
    border: 'border-violet-200 hover:border-violet-300',
    tagClass: 'border-violet-200 bg-violet-100/60 text-violet-750',
    btnClass: 'from-violet-500 to-purple-600 text-white hover:shadow-purple-500/20'
  },
  {
    name: 'વેબ ડેવલપર (Web Developer Course)',
    duration: '૩ મહિના (3 Months)',
    fee: 'Rs. 6670 + GST',
    description: 'HTML, CSS, Bootstrap, JavaScript, Jquery, અને React શીખીને આધુનિક વેબસાઈટો બનાવવાની સંપૂર્ણ તાલીમ. (૧૨ ધોરણ પાસ પછી પ્રવેશ)',
    image: '/images/G06-Skill-traiinng-v2/img11.jpg',
    link: '/courses/mkt-institute#web-developer',
    theme: 'from-sky-50/80 to-cyan-50/40',
    border: 'border-sky-200 hover:border-sky-300',
    tagClass: 'border-sky-200 bg-sky-100/60 text-sky-750',
    btnClass: 'from-sky-500 to-cyan-600 text-white hover:shadow-cyan-500/20'
  },
  {
    name: 'ફેશન ડિઝાઇનર (Fashion Designer Course)',
    duration: '૩ મહિના (3 Months)',
    fee: 'Rs. 9500 + GST',
    description: 'Crocky with Design Garment, Stitching, Photoshop, CorelDRAW, ભરતકામ, અને પ્રિન્ટિંગ ક્ષેત્રે કારકિર્દી બનાવવાની તક. (૧૦ ધોરણ પાસ પછી પ્રવેશ)',
    image: '/images/G06-Skill-traiinng-v2/img17.jpg',
    link: '/courses/mkt-institute#fashion-designer',
    theme: 'from-pink-50/80 to-rose-50/40',
    border: 'border-pink-200 hover:border-pink-300',
    tagClass: 'border-pink-200 bg-pink-100/60 text-pink-750',
    btnClass: 'from-pink-500 to-rose-600 text-white hover:shadow-rose-500/20'
  },
  {
    name: 'મહિલા બાળ વિકાસ માટેની વિવિધ યોજનાઓ (Women & Child Schemes)',
    duration: 'કાયમી સેવા (Ongoing)',
    fee: 'વિના મૂલ્યે (Free)',
    description: 'સંકટ મોચન, વિધવા સહાય, ગંગા સ્વરૂપા પુનઃલગ્ન આર્થિક સહાય જેવી કલ્યાણકારી સરકારી યોજનાઓ માટે રજૂ કરવાના જરૂરી આધાર-પુરાવાઓની યાદી અને માર્ગદર્શન.',
    image: '/images/courses/Benifite-to-woman-by-gevenments-schemes/district-women-child-officer-schemes.jpg',
    link: '/courses/women-child-schemes',
    theme: 'from-rose-50/80 to-orange-50/40',
    border: 'border-rose-200 hover:border-rose-300',
    tagClass: 'border-rose-200 bg-rose-100/60 text-rose-700',
    btnClass: 'from-rose-500 to-orange-600 text-white hover:shadow-rose-500/20'
  }
];

export function CoursesSection() {
  return (
    <section id="our_cources" className="bg-glow-warm py-12 md:py-20 px-4 border-b border-slate-100 relative overflow-hidden">
      <div className="mx-auto">

        {/* Section Heading */}
        <div className="text-center pb-10 md:pb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
            <GraduationCap className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold text-orange-700 tracking-wider">અમારા કોર્સ (OUR COURSES)</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            કૌશલ્ય વર્ધન કાર્યક્રમ
          </h2>
          <p className="text-base md:text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed font-semibold">
            મહિલાઓ અને યુવાનો માટે આર્થિક સ્વાતંત્ર્ય અને આત્મનિર્ભરતા મેળવવાના રોજગારલક્ષી અભ્યાસક્રમો.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className={`bg-linear-to-br ${course.theme} border ${course.border} rounded-3xl p-5 md:p-8 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 max-w-5xl`}
            >
              <div>
                {/* Course Photo */}
                <div className="h-48 md:h-72 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 mb-5 md:mb-6 relative">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>

                {/* Course Meta Tags */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-5 justify-between">
                  <span className={`inline-block px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base font-bold rounded-full border ${course.tagClass}`}>
                    સમયગાળો: {course.duration}
                  </span>
                  <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-base font-bold rounded-full border border-red-200 bg-red-100/50 text-red-700">
                    ફી: {course.fee}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-2 md:mb-3">
                  {course.name}
                </h3>

                {/* Course Description */}
                <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-5 md:mb-6 font-semibold">
                  {course.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/50 flex flex-col sm:flex-row gap-3 items-center justify-between">
                <Link
                  href={course.link}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-slate-350 text-slate-700 font-bold rounded-xl hover:bg-slate-105 transition-all text-xs md:text-sm cursor-pointer w-full sm:w-auto text-center"
                >
                  વિગત જુઓ (Details)
                </Link>

                <a
                  href={`https://wa.me/919426062083?text=Join%20now`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-md hover:bg-[#20ba59] transition-all text-xs md:text-sm capitalize tracking-wider cursor-pointer w-full sm:w-auto"
                >
                  <img
                    src="/icons/whatsapp-color-svgrepo-com.svg"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  જોડાઓ (Join Now)
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
export default CoursesSection
