'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  X,
  Sparkles,
  GraduationCap,
  FileCheck,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Award,
  Phone,
  ShieldCheck,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const NEW_COURSES = [
  {
    id: 'fashion-designer',
    title: 'Fashion Designer Course',
    gujaratiTitle: 'ફેશન ડિઝાઇનર કોર્સ',
    duration: '6 Months (570 Hours)',
    eligibility: '12th Pass or 3-Yr Diploma',
    age: '20+ Years',
    fee: '100% FREE (રૂ. 0/-)',
    image: '/images/courses/fashion_designer_cources/Fashion_designer_Course.png',
    link: '/courses/fashion-designer-cource',
    tagColor: 'from-rose-500 to-orange-500',
    borderColor: 'border-rose-200 hover:border-rose-500 hover:ring-2 hover:ring-rose-400/40 hover:shadow-lg hover:shadow-rose-500/10',
    hoverTitleColor: 'group-hover:text-rose-600',
    features: ['Garment Drafting & Stitching', 'Pattern Making & Croquis', 'Govt. Stipend & Placement'],
  },
  {
    id: 'boutique-manager',
    title: 'Boutique Manager Course',
    gujaratiTitle: 'બુટિક મેનેજર કોર્સ',
    duration: '6 Months (600 Hours)',
    eligibility: 'Graduate (UG Degree)',
    age: '23+ Years',
    fee: '100% FREE (રૂ. 0/-)',
    image: '/images/courses/Boutique_Manager_Course/Boutique_Manager_Course.png',
    link: '/courses/boutique-manager-cource',
    tagColor: 'from-amber-500 to-orange-600',
    borderColor: 'border-amber-200 hover:border-amber-500 hover:ring-2 hover:ring-amber-400/40 hover:shadow-lg hover:shadow-amber-500/10',
    hoverTitleColor: 'group-hover:text-amber-700',
    features: ['Boutique Store Operations', 'Visual Merchandising & Sourcing', 'Govt. Stipend & Placement'],
  },
  {
    id: 'purchase-coordinator',
    title: 'Purchase Coordinator - Electronics',
    gujaratiTitle: 'પરચેઝ કો-ઓર્ડિનેટર (ઇલેક્ટ્રોનિક્સ)',
    duration: '6 Months (510 Hours)',
    eligibility: '10th Pass (SSC)',
    age: '16+ Years',
    fee: '100% FREE (રૂ. 0/-)',
    image: '/images/courses/Purchase_Coordinator_Electronics/Purchase_Coordinator_Electronics.png',
    link: '/courses/purchase-coordinator-electronics-cource',
    tagColor: 'from-blue-600 to-cyan-600',
    borderColor: 'border-blue-200 hover:border-blue-500 hover:ring-2 hover:ring-blue-400/40 hover:shadow-lg hover:shadow-blue-500/10',
    hoverTitleColor: 'group-hover:text-blue-600',
    features: ['Electronics Hardware & Procurement', 'Vendor Management & ERP', 'Govt. Stipend & Placement'],
  },
]

export default function NewCoursesAnnouncementModal() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(true)

  const handleViewCourses = (e) => {
    // Smooth scroll to courses section on the homepage
    const coursesSection = document.getElementById('our_cources')
    if (coursesSection) {
      e.preventDefault()
      coursesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="w-full bg-linear-to-b from-orange-50/60 via-amber-50/40 to-transparent py-3 sm:py-4 px-3 sm:px-6 lg:px-8 border-b border-orange-200/60 print:hidden">
      <div className="max-w-7xl mx-auto">
        {/* Collapsed Minimal Notification Strip */}
        {!isOpen ? (
          <div className="bg-gradient-to-r from-orange-600 via-rose-600 to-amber-600 text-white rounded-md p-2.5 sm:p-3 shadow-sm flex items-center justify-between gap-3 border border-orange-300/40">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="bg-yellow-400 text-slate-950 text-[10px] sm:text-xs font-black px-2 py-0.5 rounded-sm uppercase shrink-0">
                100% Free
              </span>
              <p className="text-xs sm:text-sm font-bold truncate">
                🎉 3 New Skill Courses Added: Fashion Designing, Boutique Management, Electronics Purchase Coordinator!
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsOpen(true)}
                className="bg-white/20 hover:bg-white text-white hover:text-slate-900 px-2.5 py-1 rounded-md text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>View Details</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <Link
                href="/admission-form"
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-2.5 py-1 rounded-md text-xs font-extrabold shadow-xs transition-colors"
              >
                Apply Online
              </Link>
            </div>
          </div>
        ) : (
          /* Full Section Popup Right Below Header - Clean Small Rounded-md Border (No animation) */
          <div className="relative bg-white rounded-md sm:rounded-lg shadow-sm border border-orange-200 overflow-hidden">
            {/* Top Close / Collapse Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-20 bg-white/20 hover:bg-white text-white hover:text-slate-900 w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center backdrop-blur-xs transition-colors shadow-xs cursor-pointer border border-white/30"
              aria-label="Collapse Announcement"
              title="Minimize Section"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2.5]" />
            </button>

            {/* Banner Header Strip - Optimized for Mobile & Desktop */}
            <div className="relative bg-gradient-to-r from-darkred via-rose-700 to-orange-600 text-white p-3.5 sm:p-5 md:p-6 overflow-hidden">
              {/* Subtle Decorative Ambient Glows */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-yellow-500/20 blur-xl pointer-events-none" />

              <div className="relative z-10 pr-7 sm:pr-10">
                {/* Announcement Tag Pill */}
                <div className="inline-flex items-center gap-1 sm:gap-1.5 bg-yellow-400 text-slate-950 px-2.5 py-0.5 sm:px-3 sm:py-0.5 rounded-sm text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1.5 sm:mb-2 shadow-xs">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current shrink-0" />
                  <span className="truncate">New Free Courses • નવી સુવર્ણ તક</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-base sm:text-2xl md:text-3xl font-extrabold text-white leading-snug sm:leading-tight drop-shadow-xs">
                  3 New Skill Development Courses Added — <span className="text-yellow-300">100% FREE!</span>
                </h2>
                {/* Gujarati Subtitle */}
                <p className="text-rose-100 text-[11px] sm:text-sm font-semibold mt-1 sm:mt-1.5 leading-normal">
                  માનવ કલ્યાણ ટ્રસ્ટ દ્વારા સરકાર માન્ય ૩ નવા વ્યાવસાયિક કોર્સ (બિલકુલ ફ્રી)
                </p>

                {/* Highlights Badges: 2x2 grid on mobile to eliminate tall vertical stacking, flex on desktop */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 sm:gap-2.5 mt-2.5 sm:mt-3 text-[10px] sm:text-xs font-bold text-white/95">
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-1 sm:px-2.5 rounded-md flex items-center gap-1 border border-white/20 truncate">
                    <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-300 shrink-0" />
                    <span className="truncate">100% Free Training</span>
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-1 sm:px-2.5 rounded-md flex items-center gap-1 border border-white/20 truncate">
                    <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-300 shrink-0" />
                    <span className="truncate">Govt. Certification</span>
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-1 sm:px-2.5 rounded-md flex items-center gap-1 border border-white/20 truncate">
                    <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300 shrink-0" />
                    <span className="truncate">Govt. Stipend</span>
                  </span>
                  <span className="bg-white/20 backdrop-blur-xs px-2 py-1 sm:px-2.5 rounded-md flex items-center gap-1 border border-white/20 truncate">
                    <GraduationCap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300 shrink-0" />
                    <span className="truncate">100% Placement</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Courses Cards Grid */}
            <div className="p-3 sm:p-5 md:p-6 bg-slate-50/70 space-y-3 sm:space-y-4">
              <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-600 font-semibold px-1 gap-2">
                <span className="truncate">Select a course to view syllabus or apply:</span>
                <span className="text-emerald-700 font-bold bg-emerald-100/70 px-2 py-0.5 rounded-sm shrink-0 text-[10px] sm:text-xs">
                  No Hidden Charges
                </span>
              </div>

              {/* 3 Courses Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
                {NEW_COURSES.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => router.push(course.link)}
                    role="link"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') router.push(course.link)
                    }}
                    className={`bg-white rounded-md border ${course.borderColor} p-3.5 sm:p-4 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between group relative`}
                  >
                    <div>
                      {/* Course Image Preview */}
                      <div className="h-36 sm:h-40 w-full rounded-md overflow-hidden bg-slate-100 mb-3 relative border border-slate-200">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-contain p-1"
                        />
                        <div className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm uppercase shadow-xs">
                          {course.fee}
                        </div>
                      </div>

                      {/* Course Titles */}
                      <h3 className={`font-bold text-slate-900 text-sm sm:text-base leading-snug ${course.hoverTitleColor} transition-colors`}>
                        {course.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs font-semibold text-rose-600 mb-2.5">
                        {course.gujaratiTitle}
                      </p>

                      {/* Course Meta Info */}
                      <div className="space-y-1.5 text-[11px] sm:text-xs text-slate-600 mb-3 bg-slate-50 p-2.5 rounded-md border border-slate-200/70">
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-500">Duration:</span>
                          <span className="font-bold text-slate-800">{course.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-500">Eligibility:</span>
                          <span className="font-bold text-slate-800">{course.eligibility}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-slate-500">Age:</span>
                          <span className="font-bold text-slate-800">{course.age}</span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <ul className="text-[11px] sm:text-xs text-slate-600 space-y-1 mb-3">
                        {course.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-emerald-600 font-bold shrink-0">✓</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Single Course Action */}
                    <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-slate-700 group-hover:text-rose-700 flex items-center gap-1 transition-colors">
                        Course Details <ExternalLink className="w-3 h-3" />
                      </span>
                      <Link
                        href="/admission-form"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs font-extrabold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors shadow-2xs"
                      >
                        Apply →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Informational Callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-md p-3 flex items-center gap-3 text-xs text-amber-900">
                <BookOpen className="w-5 h-5 text-amber-700 shrink-0" />
                <div>
                  <span className="font-bold">પ્રવેશ માટે જરૂરી માહિતી: </span>
                  દરેક બેચમાં મર્યાદિત બેઠકો ઉપલબ્ધ છે. ઉમેદવારો ઓનલાઇન ફોર્મ ભરીને તાત્કાલિક પોતાનું રજીસ્ટ્રેશન કરાવી શકે છે.
                </div>
              </div>
            </div>

            {/* Bottom Action Bar */}
            <div className="p-3 sm:p-4 bg-white border-t border-slate-200/80 shrink-0 flex flex-col md:flex-row items-center justify-between gap-3 shadow-2xs">
              {/* Left Contact/Address Info */}
              <div className="flex items-center gap-2 text-xs text-slate-600 max-md:text-center">
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>
                  Helpline: <strong className="text-slate-900 font-bold">9974025126 / 079-27488056</strong> (Ghatlodia, Ahmedabad)
                </span>
              </div>

              {/* Primary Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 w-full md:w-auto justify-end">
                {/* 1. View Courses Button */}
                <Link
                  href="/#our_cources"
                  onClick={handleViewCourses}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-md border-2 border-slate-300 hover:border-orange-500 text-slate-700 hover:text-orange-700 bg-slate-50 hover:bg-orange-50/50 font-bold text-xs sm:text-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  <BookOpen className="w-4 h-4 text-orange-600 shrink-0" />
                  <span>View All Courses (બધા કોર્સ જુઓ)</span>
                </Link>

                {/* 2. Apply Online Button (from Header) */}
                <Link
                  href="/admission-form"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs sm:text-sm shadow-sm transition-colors cursor-pointer whitespace-nowrap"
                >
                  <FileCheck className="w-4 h-4 shrink-0" />
                  <span>Apply Online (ઓનલાઇન અરજી)</span>
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

