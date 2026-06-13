'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

const courses = [
  {
    name: 'Sewing Machine Operator',
    category: 'fee-based',
    duration: '3 Months',
    fee: 'Rs. 3000 (For 3 Months)',
    description: 'Our intensive training program helps women work proficiently on industrial sewing machines and achieve self-reliance.',
    image: '/images/courses/img8.jpg',
    link: '/courses/sewing-machine',
    theme: 'from-orange-50/80 to-red-50/40',
    border: 'border-orange-200 hover:border-orange-350',
    tagClass: 'border-orange-200 bg-orange-100/60 text-orange-700',
    btnClass: 'from-orange-500 to-darkred text-white hover:shadow-red-500/20'
  },

  {
    name: 'Government Schemes Implementation and Support',
    category: 'govt-schemes',
    duration: 'Ongoing',
    fee: 'Free of Cost',
    description: 'We work to provide benefits from various government welfare schemes to the poor and needy, along with necessary guidance.',
    image: '/images/Certified cources/woman-child-development.png',
    link: '/courses/government-schemes',
    theme: 'from-emerald-50/80 to-teal-50/40',
    border: 'border-emerald-250 hover:border-emerald-350',
    tagClass: 'border-emerald-200 bg-emerald-100/60 text-emerald-700',
    btnClass: 'from-emerald-500 to-teal-600 text-white hover:shadow-teal-500/20'
  },
  {
    name: 'Domestic Data Entry Operator',
    category: 'fee-based',
    duration: '2 Months',
    fee: 'Rs. 4000 + GST',
    description: 'University certified course in MS Office, Tables, Charts, and basic computer training. (Admission eligibility: Grade 8 pass)',
    image: '/images/Certified cources/data_entry_course.png',
    link: '/courses/mkt-institute#data-entry',
    theme: 'from-violet-50/80 to-purple-50/40',
    border: 'border-violet-200 hover:border-violet-350',
    tagClass: 'border-violet-200 bg-violet-100/60 text-violet-750',
    btnClass: 'from-violet-500 to-purple-600 text-white hover:shadow-purple-500/20'
  },
  {
    name: 'Web Developer Course',
    category: 'fee-based',
    duration: '3 Months',
    fee: 'Rs. 6670 + GST',
    description: 'Complete training in building modern websites by learning HTML, CSS, Bootstrap, JavaScript, jQuery, and React. (Admission eligibility: Grade 12 pass)',
    image: '/images/G06-Skill-traiinng-v2/web_developer_course.png',
    link: '/courses/mkt-institute#web-developer',
    theme: 'from-sky-50/80 to-cyan-50/40',
    border: 'border-sky-200 hover:border-sky-350',
    tagClass: 'border-sky-200 bg-sky-100/60 text-sky-750',
    btnClass: 'from-sky-500 to-cyan-600 text-white hover:shadow-cyan-500/20'
  },
  {
    name: 'Fashion Designer Course',
    category: 'fee-based',
    duration: '3 Months',
    fee: 'Rs. 9500 + GST',
    description: 'Career opportunities in garment design, stitching, Photoshop, CorelDRAW, embroidery, and printing. (Admission eligibility: Grade 10 pass)',
    image: '/images/G06-Skill-traiinng-v2/fashion_designer_course.png',
    link: '/courses/mkt-institute#fashion-designer',
    theme: 'from-pink-50/80 to-rose-50/40',
    border: 'border-pink-200 hover:border-pink-350',
    tagClass: 'border-pink-200 bg-pink-100/60 text-pink-750',
    btnClass: 'from-pink-500 to-rose-600 text-white hover:shadow-rose-500/20'
  },
  {
    name: 'Sewing Machine Operator',
    category: 'govt-schemes',
    duration: '3 Months',
    fee: 'FREE',
    description: 'Our intensive training program helps women work proficiently on industrial sewing machines and achieve self-reliance.',
    image: '/images/courses/img8.jpg',
    link: '/courses/sewing-machine-free',
    theme: 'from-orange-50/80 to-red-50/40',
    border: 'border-orange-200 hover:border-orange-350',
    tagClass: 'border-orange-200 bg-orange-100/60 text-orange-700',
    btnClass: 'from-orange-500 to-darkred text-white hover:shadow-red-500/20'
  },
];

export function Our_Cource_Cards_Section() {
  const [activeTab, setActiveTab] = useState('fee-based')

  const filteredCourses = courses.filter(course => course.category === activeTab)

  return (
    <section id="our_cources" className="bg-glow-warm py-16 md:py-24 px-6 sm:px-8 border-b border-slate-100 relative overflow-hidden from-60% to-100%">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center pb-8 md:pb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
            <GraduationCap className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">OUR COURSES</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            Skill Development Program
          </h2>
          <p className="text-base md:text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed font-semibold">
            Vocational courses and government scheme guidance for women and youth to achieve economic independence and self-reliance.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center gap-3 mb-12 border-b border-slate-200 pb-4 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('fee-based')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer border ${activeTab === 'fee-based'
              ? 'bg-linear-to-r from-orange-500 to-darkred text-white border-transparent shadow-md shadow-red-500/10'
              : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
              }`}
          >
            01) Fee based
          </button>
          <button
            onClick={() => setActiveTab('govt-schemes')}
            className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer border ${activeTab === 'govt-schemes'
              ? 'bg-linear-to-r from-orange-500 to-darkred text-white border-transparent shadow-md shadow-red-500/10'
              : 'bg-white text-slate-600 hover:bg-slate-50 border-slate-200'
              }`}
          >
            02) Government Schemes based
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-16 gap-6 mx-auto">
          {filteredCourses.map((course, idx) => (
            <div
              key={idx}
              className={`bg-linear-to-br ${course.theme} border ${course.border} rounded-2xl p-4 md:p-5 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 w-full`}
            >
              <div>
                {/* Course Photo */}
                <div className="h-44 md:h-60 w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-50 mb-4 relative">
                  <Link href={course.image}>
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </Link>
                </div>

                {/* Course Meta Tags */}
                <div className="flex flex-wrap gap-2.5 mb-4 justify-between text-xs font-bold">
                  <span className={`px-2.5 py-1 rounded-full border ${course.tagClass}`}>
                    Duration: {course.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded-full border border-red-200 bg-red-100/50 text-red-750">
                    Fee: {course.fee}
                  </span>
                </div>

                {/* Course Name */}
                <h3 className="text-base md:text-lg font-bold text-slate-900 leading-snug mb-2 min-h-[2.5rem] flex items-center">
                  {course.name}
                </h3>

                {/* Course Description */}
                <p className="text-slate-650 text-xs md:text-sm leading-relaxed mb-4 font-semibold line-clamp-4">
                  {course.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/50 flex gap-3 items-center justify-between">
                <Link
                  href={course.link}
                  className="inline-flex items-center justify-center px-3 py-2.5 border border-slate-350 text-slate-700 font-extrabold rounded-xl hover:bg-slate-50 transition-all text-xs md:text-sm cursor-pointer flex-1 text-center"
                >
                  Details
                </Link>

                <Link
                  href={`https://wa.me/919974025126?text=Join%20now`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-3 py-2.5 bg-[#25D366] text-white font-extrabold rounded-xl hover:shadow-md hover:bg-[#20ba59] transition-all text-xs md:text-sm capitalize cursor-pointer flex-1"
                >
                  <img
                    src="/icons/whatsapp-color-svgrepo-com.svg"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  Join Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Our_Cource_Cards_Section
