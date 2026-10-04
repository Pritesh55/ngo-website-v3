'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

const courses = [
  {
    name: 'Fashion Designer Course',
    category: 'Free + Stipend',
    duration: '6 Months (570 Hours)',
    fee: '100% Free (રૂ. 0/-)',
    description: 'Comprehensive 6-month hands-on fashion designing training with free admission, government stipend after certification, and 100% job placement assistance.',
    image: '/images/courses/fashion_designer_cources/Fashion_designer_Course.png',
    link: '/courses/fashion-designer-cource',
    theme: 'from-orange-50/80 to-red-50/40',
    border: 'border-orange-200 hover:border-orange-350',
    tagClass: 'border-orange-200 bg-orange-100/60 text-orange-700',
    btnClass: 'from-orange-500 to-darkred text-white hover:shadow-red-500/20'
  },
  {
    name: 'Boutique Manager Course',
    category: 'Free + Stipend',
    duration: '6 Months (600 Hours)',
    fee: '100% Free (રૂ. 0/-)',
    description: 'Professional boutique management and merchandising course for graduates with free admission, government stipend after certification, and 100% placement support.',
    image: '/images/courses/Boutique_Manager_Course/Boutique_Manager_Course.png',
    link: '/courses/boutique-manager-cource',
    theme: 'from-amber-50/80 to-orange-50/40',
    border: 'border-amber-200 hover:border-amber-350',
    tagClass: 'border-amber-200 bg-amber-100/60 text-amber-800',
    btnClass: 'from-amber-600 to-red-600 text-white hover:shadow-red-500/20'
  },
  {
    name: 'Purchase Coordinator - Electronics',
    category: 'Free + Stipend',
    duration: '6 Months (510 Hours)',
    fee: '100% Free (રૂ. 0/-)',
    description: 'Electronics component procurement and inventory training for 10th pass candidates with free admission, government stipend, and 100% job placement assistance.',
    image: '/images/courses/Purchase_Coordinator_Electronics/Purchase_Coordinator_Electronics.png',
    link: '/courses/purchase-coordinator-electronics-cource',
    theme: 'from-blue-50/80 to-cyan-50/40',
    border: 'border-blue-200 hover:border-blue-350',
    tagClass: 'border-blue-200 bg-blue-100/60 text-blue-700',
    btnClass: 'from-blue-500 to-cyan-600 text-white hover:shadow-cyan-500/20'
  },
  {
    name: 'Sewing Machine Operator',
    category: 'Free + Stipend',
    duration: '03 Months',
    fee: 'Free of Cost',
    description: 'Our intensive training program helps women work proficiently on industrial sewing machines and achieve self-reliance.',
    image: '/images/courses/img8.jpg',
    link: '/courses/sewing-machine',
    theme: 'from-rose-50/80 to-pink-50/40',
    border: 'border-rose-200 hover:border-rose-350',
    tagClass: 'border-rose-200 bg-rose-100/60 text-rose-700',
    btnClass: 'from-rose-500 to-darkred text-white hover:shadow-red-500/20'
  },
  {
    name: 'Government Schemes Implementation and Support',
    category: 'govt-schemes',
    duration: 'Ongoing',
    fee: 'Free of Cost',
    description: 'We work to provide benefits from various government welfare schemes to the poor and needy, along with necessary guidance.',
    image: '/images/courses/Certified cources/woman-child-development.png',
    link: '/courses/government-schemes',
    theme: 'from-emerald-50/80 to-teal-50/40',
    border: 'border-emerald-250 hover:border-emerald-350',
    tagClass: 'border-emerald-200 bg-emerald-100/60 text-emerald-700',
    btnClass: 'from-emerald-500 to-teal-600 text-white hover:shadow-teal-500/20'
  },
];

import { useCMS } from '@/context/CMSContext'

export function Our_Cource_Cards_Section() {
  const { t, allContent } = useCMS()
  const coursesList = allContent?.courses || courses

  return (
    <section id="our_cources" className="bg-glow-warm py-16 md:py-24 px-6 sm:px-8 border-b border-slate-100 relative overflow-hidden from-60% to-100%">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center pb-8 md:pb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
            <GraduationCap className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold text-orange-700 tracking-wider uppercase">
              {t('coursesSection.subTitle') || 'OUR COURSES'}
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
            {t('coursesSection.title') || 'Skill Development Courses'}
          </h2>
          <p className="text-base md:text-lg text-slate-650 max-w-2xl mx-auto leading-relaxed font-semibold">
            {t('coursesSection.description') || 'Vocational courses and government scheme guidance for women and youth to achieve economic independence and self-reliance.'}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:gap-16 gap-6 mx-auto">
          {coursesList.map((course, idx) => (
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
                      className="w-full h-full object-contain transition-transform duration-500 hover:scale-[1.03]"
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
              <div className="pt-4 border-t border-slate-200/50 flex flex-wrap gap-2 items-center justify-between">
                <Link
                  href={course.link}
                  className="inline-flex items-center justify-center px-3 py-2 border border-slate-350 text-slate-700 font-extrabold rounded-xl hover:bg-slate-50 transition-all text-xs md:text-sm cursor-pointer flex-1 text-center"
                >
                  Details
                </Link>

                <Link
                  href="/admission-form"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-xl hover:shadow-md transition-all text-xs md:text-sm cursor-pointer flex-1 text-center"
                >
                  Apply Online
                </Link>

                <Link
                  href={`https://wa.me/919974025126?text=Join%20now`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#25D366] text-white font-extrabold rounded-xl hover:shadow-md hover:bg-[#20ba59] transition-all text-xs md:text-sm capitalize cursor-pointer flex-1"
                >
                  <img
                    src="/icons/whatsapp-color-svgrepo-com.svg"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  WhatsApp
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
