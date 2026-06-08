'use client'
import React, { useState, useEffect } from 'react'
import {
  CheckCircle,
  Calendar,
  Award,
  ChevronRight,
  Phone,
  Mail,
  BookOpen,
  FileCheck,
  MapPin,
  Sparkles,
  Clock,
  Coins,
  Percent,
  Tag,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ShieldCheck,
  Check,
  ZoomIn
} from 'lucide-react'
import Link from 'next/link'

const MktInstitutePage = () => {
  const [checkedDocs, setCheckedDocs] = useState({})
  const [activeTab, setActiveTab] = useState('all')

  const toggleDoc = (index) => {
    setCheckedDocs(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Handle anchor scroll focus on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const id = window.location.hash.substring(1)
      if (id === 'data-entry' || id === 'web-developer' || id === 'fashion-designer') {
        setActiveTab(id)
        setTimeout(() => {
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }, 100)
      }
    }
  }, [])

  const courses = [
    {
      id: 'data-entry',
      name: 'Domestic Data Entry Operator',
      nameGuj: 'ડોમેસ્ટિક ડેટા એન્ટ્રી ઓપરેટર',
      qualification: '8th Pass (૮ ધોરણ પાસ પછી)',
      duration: '2 Months (૨ મહિના)',
      fee: 'Rs. 4000 + GST',
      syllabus: [
        'MS Office (Word, Excel, PowerPoint)',
        'Tables & Excel Formulas',
        'Data Presentation & Charts',
        'Basic Computer Operations',
        'Speed Typing & Formatting'
      ],
      theme: 'bg-violet-600',
      cardBg: 'bg-violet-50/60',
      badgeColor: 'bg-violet-100 text-violet-800 border-violet-200',
      borderColor: 'border-violet-250',
      btnColor: 'from-violet-600 to-purple-700 hover:shadow-violet-500/20'
    },
    {
      id: 'web-developer',
      name: 'Web Developer',
      nameGuj: 'વેબ ડેવલપર તાલીમ',
      qualification: '12th Pass (૧૨ ધોરણ પાસ પછી)',
      duration: '3 Months (૩ મહિના)',
      fee: 'Rs. 6670 + GST',
      syllabus: [
        'HTML5 & CSS3 Structure & Styling',
        'Bootstrap Responsive Framework',
        'JavaScript Fundamentals & Logic',
        'jQuery DOM Manipulation',
        'React JS Component-based UI Development'
      ],
      theme: 'bg-sky-600',
      cardBg: 'bg-sky-50/60',
      badgeColor: 'bg-sky-100 text-sky-850 border-sky-200',
      borderColor: 'border-sky-250',
      btnColor: 'from-sky-600 to-cyan-700 hover:shadow-cyan-500/20'
    },
    {
      id: 'fashion-designer',
      name: 'Fashion Designer',
      nameGuj: 'ફેશન ડિઝાઇનર કોર્સ',
      qualification: '10th Pass (૧૦ ધોરણ પાસ પછી)',
      duration: '3 Months (૩ મહિના)',
      fee: 'Rs. 9500 + GST',
      syllabus: [
        'Crocky with Design Garment & Sketching',
        'Professional Stitching & Tailoring Techniques',
        'CorelDRAW Graphic Design for Patterns',
        'Adobe Photoshop Textures & Visuals',
        'Hand Embroidery & Machine Embroidery',
        'Tie & Dye & Fabric Printing Masterclass'
      ],
      theme: 'bg-pink-600',
      cardBg: 'bg-pink-50/60',
      badgeColor: 'bg-pink-100 text-pink-850 border-pink-200',
      borderColor: 'border-pink-250',
      btnColor: 'from-pink-600 to-rose-700 hover:shadow-rose-500/20'
    }
  ]

  const docs = [
    'આધારકાર્ડની કોપી (Copy of Aadhar Card)',
    'પાસપોર્ટ સાઈઝ ફોટો - ૨ (2 Passport Size Photos)',
    'લેટેસ્ટ માર્કશીટ (Latest Education Marksheet)'
  ]

  const steps = [
    { name: 'નોંધણી', desc: 'Registration & Verification' },
    { name: 'તાલીમ', desc: 'Hands-on Classroom Training' },
    { name: 'મૂલ્યાંકન', desc: 'Assessment & Examination' },
    { name: 'કૌશલ્ય પ્રમાણપત્ર', desc: 'University Certified Skill Certificate' }
  ]

  const benefits = [
    'યુનિવર્સિટીનું સર્ટિફિકેટ મેળવવાની સુવર્ણ તક.',
    'નોકરી અને પ્લેસમેન્ટ માટેનું ઉજ્જવળ ભવિષ્ય.',
    'પોતાનો ગૃહ ઉદ્યોગ કે વ્યવસાય સ્થાપવા માટે અમૂલ્ય તકો.',
    'સરકાર તરફથી મળતી ૫૦ લાખ સુધીની લોન સબસિડી માટે સરકારી અધિકારીઓ સાથે સીધો વાર્તાલાપ.',
    'સ્ટાર્ટઅપ અને પેટન્ટ રજીસ્ટ્રેશન માટે યુનિવર્સિટી દ્વારા વિશિષ્ટ માર્ગદર્શન.'
  ]

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">

      {/* <!-- HERO HEADER SECTION --> */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-indigo-950 via-slate-900 to-darkred text-white border-b border-orange-200/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_60%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-red-650/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Tag Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-xs">
            <GraduationCap className="w-4 h-4 text-orange-400" />
            <span className="text-xs md:text-sm font-bold tracking-wider text-orange-300">
              યુનિવર્સિટી સર્ટિફાઈડ કોર્ષ (UNIVERSITY CERTIFIED COURSES)
            </span>
          </div>

          {/* Main Titles */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-2 leading-tight tracking-tight">
            MKT Institute of Technology
          </h1>
          <h2 className="text-xl md:text-3xl text-orange-400 font-bold mb-6">
            (Organized by Manav Kalyan Trust)
          </h2>

          <p className="text-base md:text-xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed font-semibold">
            ૮ ધોરણ પાસ પછીના તમામ વર્ગના વિદ્યાર્થીઓ માટે ખાસ વ્યવસાયિક અને સ્વનિર્ભર તાલીમ આપતો આધુનિક શૈક્ષણિક કાર્યક્રમ.
          </p>

          {/* Address & Contact Card */}
          <div className="inline-block bg-white/5 border border-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 max-w-3xl text-left shadow-lg">
            <div className="flex gap-3.5 mb-4">
              <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-extrabold text-white text-base md:text-lg mb-1">તાલીમ કેન્દ્રનું સરનામું (Venue Address)</h3>
                <p className="text-sm md:text-base text-slate-200 leading-relaxed font-semibold">
                  ૪૨૭, ચોથો માળ, કલાસાગર શોપિંગ મોલ, સાંઈબાબા મંદિર સામે, સત્તાધાર ક્રોસ રોડ પાસે, ઘાટલોડિયા, અમદાવાદ - ૩૮૦૦૬૧.
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10 my-4" />

            <div className="flex flex-wrap items-center gap-4 text-sm font-bold">
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4.5 h-4.5 text-orange-400" />
                <span>સંપર્ક નંબરો :</span>
              </div>
              <div className="flex flex-wrap gap-2 text-white">
                <a href="tel:9974025126" className="hover:text-orange-400 transition-colors">૯૩૧૬૮૪૨૭૧૨</a> •
                <a href="tel:6355552491" className="hover:text-orange-400 transition-colors">૬૩૫૫૫૫૨૪૯૧</a> •
                <a href="tel:9714360243" className="hover:text-orange-400 transition-colors">૯૭૧૪૩૬૦૨૪૩</a> •
                <a href="tel:9714918134" className="hover:text-orange-400 transition-colors">૯૭૧૪૯૧૮૧૩૪</a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="https://wa.me/919974025126?text=Join%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-md hover:bg-[#20ba59] transition-all text-sm md:text-base cursor-pointer"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              વોટ્સએપ પૂછપરછ (Join Now)
            </Link>
            <Link
              href="tel:9974025126"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition-all text-sm md:text-base cursor-pointer shadow-sm"
            >
              <Phone className="w-5 h-5" />
              માર્ગદર્શન માટે કૉલ કરો
            </Link>
            <Link
              href="https://www.google.com/maps/place/MANAV+KALYAN+TRUST/@23.0720672,72.5124606,13z/data=!4m6!3m5!1s0x395e834433dac7e3:0x6098b80bc73d2bdd!8m2!3d23.0747676!4d72.535598!16s%2Fg%2F11ddwgd7wq?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-xl transition-all text-sm md:text-base cursor-pointer shadow-sm"
            >
              <MapPin className="w-5 h-5 text-emerald-700" />
              ઓફિસ મુલાકાત (Google Map)
            </Link>


          </div>
        </div>
      </section>

      {/* <!-- FILTER TABS --> */}
      <section className="bg-white border-b border-slate-200 sticky top-0 z-25 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center overflow-x-auto">
          <div className="flex gap-2 py-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm md:text-base transition-all cursor-pointer ${activeTab === 'all'
                ? 'bg-orange-600 text-white shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-650 border border-slate-200'
                }`}
            >
              તમામ કોર્સ (All Courses)
            </button>
            {courses.map(course => (
              <button
                key={course.id}
                onClick={() => {
                  setActiveTab(course.id)
                  const el = document.getElementById(course.id)
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm md:text-base whitespace-nowrap transition-all cursor-pointer ${activeTab === course.id
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-650 border border-slate-200'
                  }`}
              >
                {course.name}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs text-orange-600 font-bold bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
            <Percent className="w-4 h-4" />
            <span>10% Discount on full Payment together</span>
          </div>
        </div>
      </section>

      {/* <!-- COURSES LIST SECTION --> */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="space-y-12 md:space-y-16">
          {courses
            .filter(course => activeTab === 'all' || activeTab === course.id)
            .map(course => (
              <div
                key={course.id}
                id={course.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden scroll-mt-24 transition-all duration-300 hover:shadow-md"
              >
                {/* Course Header Banner */}
                <div className={`${course.theme} p-6 md:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6`}>
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>યુનિવર્સિટી પ્રમાણિત અભ્યાસક્રમ</span>
                    </span>
                    <h2 className="text-2xl md:text-4xl font-extrabold">{course.nameGuj}</h2>
                    <h3 className="text-lg md:text-xl text-slate-200 font-medium">{course.name}</h3>
                  </div>

                  <div className="bg-white/10 border border-white/25 rounded-2xl p-4 min-w-[200px] text-center backdrop-blur-xs">
                    <p className="text-xxs uppercase tracking-wider text-slate-200 font-bold">અભ્યાસ ફી (Course Fee)</p>
                    <p className="text-xl md:text-2xl font-black text-white">{course.fee}</p>
                    <p className="text-xxs text-orange-200 font-bold mt-1">સમયગાળો: {course.duration}</p>
                  </div>
                </div>

                {/* Course Body Grid */}
                <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">

                  {/* Left Column: Quick Specs */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className={`${course.cardBg} border ${course.borderColor} border-2 rounded-3xl p-6 shadow-xs space-y-5`}>

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl text-orange-600 flex-shrink-0 shadow-xs border border-orange-100">
                          <BookOpen className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">પ્રવેશ લાયકાત (Eligibility)</h4>
                          <p className="text-base font-extrabold text-slate-800 mt-0.5">{course.qualification}</p>
                        </div>
                      </div>

                      <div className="h-px bg-slate-200/50" />

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl text-orange-600 flex-shrink-0 shadow-xs border border-orange-100">
                          <Clock className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">સમયગાળો (Duration)</h4>
                          <p className="text-base font-extrabold text-slate-800 mt-0.5">{course.duration}</p>
                        </div>
                      </div>

                      <div className="h-px bg-slate-200/50" />

                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-white rounded-xl text-emerald-600 flex-shrink-0 shadow-xs border border-emerald-100">
                          <ShieldCheck className="w-5.5 h-5.5" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">સર્ટિફિકેશન</h4>
                          <p className="text-base font-extrabold text-emerald-700 mt-0.5">યુનિવર્સિટી સર્ટિફાઈડ સર્ટિફિકેટ</p>
                        </div>
                      </div>

                    </div>

                    {/* Note Box */}
                    <div className="bg-orange-50/50 border border-orange-200 rounded-2xl p-4 flex gap-3 text-xs md:text-sm font-semibold text-slate-700">
                      <Tag className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-slate-900">વિશેષ ડિસ્કાઉન્ટ ઓફર</p>
                        <p className="mt-0.5 text-slate-650">તમામ કોર્સની ફી એક સાથે ચૂકવવા પર <strong>૧૦% ડિસ્કાઉન્ટ</strong> મળવાપાત્ર રહેશે.</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Syllabus/Syllabus Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 md:p-8 flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-5 border-b border-slate-200 pb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                        અભ્યાસક્રમના મુખ્ય મુદ્દાઓ (Syllabus)
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.syllabus.map((item, idx) => (
                          <div key={idx} className="flex gap-2.5 items-start bg-white p-3.5 rounded-xl border border-slate-200 shadow-xxs">
                            <Check className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0 stroke-[3]" />
                            <span className="text-sm md:text-base font-bold text-slate-750">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <a
                        href={`https://wa.me/919974025126?text=I%20am%20interested%20in%2520${encodeURIComponent(course.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-md hover:bg-[#20ba59] transition-all text-sm md:text-base cursor-pointer flex-1 text-center"
                      >
                        <img
                          src="/icons/whatsapp-color-svgrepo-com.svg"
                          alt="WhatsApp"
                          className="w-5 h-5 object-contain brightness-0 invert"
                        />
                        વોટ્સએપ દ્વારા પ્રવેશ મેળવો (Apply Now)
                      </a>
                      <a
                        href="tel:9974025126"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-slate-350 text-slate-700 font-extrabold rounded-xl hover:bg-slate-100 transition-all text-sm md:text-base cursor-pointer"
                      >
                        કૉલ કરો
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
        </div>
      </section>

      {/* <!-- PROCESS STEPS (પગલાં) --> */}
      <section className="bg-glow-fresh py-12 md:py-20 px-4 border-y border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
            <Sparkles className="w-4 h-4 text-orange-700" />
            <span className="text-xs font-bold text-orange-700 tracking-wider">પ્રોસેસ સ્ટેપ્સ (STUDENT JOURNEY)</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-10 md:mb-14">પ્રવેશ અને સર્ટિફિકેશનના ૪ પગલાં</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs relative flex flex-col justify-between min-h-[160px] hover:scale-102 transition-transform">
                <div className="absolute -top-4 left-6 bg-linear-to-r from-orange-500 to-darkred text-white w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm shadow-md">
                  ૦{idx + 1}
                </div>
                <div className="pt-3 text-left">
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 mb-1">{step.name}</h3>
                  <p className="text-xs md:text-sm text-slate-500 font-semibold">{step.desc}</p>
                </div>

                {idx < 3 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 p-1.5 rounded-full text-slate-400">
                    <ChevronRight className="w-4.5 h-4.5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ADMISSION DOCUMENTS & PROMOTIONS --> */}
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

          {/* Left: Required Documents Checklist */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h3 className="font-extrabold text-xl md:text-2xl text-slate-900 mb-4 flex items-center gap-2.5">
              <FileCheck className="w-6.5 h-6.5 text-orange-600" />
              એડમિશન માટેના જરૂરી ડોક્યુમેન્ટ્સ
            </h3>
            <p className="text-xs text-slate-400 mb-5 italic font-bold">
              દસ્તાવેજો એકઠા કરતી વખતે નીચેની યાદીને ચેકલિસ્ટ તરીકે વાપરી શકો છો:
            </p>

            <div className="space-y-3">
              {docs.map((doc, idx) => {
                const isChecked = !!checkedDocs[idx]
                return (
                  <div
                    key={idx}
                    onClick={() => toggleDoc(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-150 flex items-center gap-3.5 cursor-pointer ${isChecked
                      ? 'bg-orange-50/50 border-orange-200 text-slate-800'
                      : 'bg-white hover:bg-slate-50 border-slate-200'
                      }`}
                  >
                    <div className={`w-6 h-6 rounded-md flex-shrink-0 border flex items-center justify-center transition-colors ${isChecked ? 'bg-orange-600 border-orange-600 text-white' : 'border-slate-350 bg-white'
                      }`}>
                      {isChecked && <Check className="w-4 h-4 stroke-[3]" />}
                    </div>
                    <span className={`text-sm md:text-base leading-relaxed ${isChecked ? 'line-through text-slate-400 font-medium' : 'font-extrabold text-slate-750'}`}>
                      ({idx + 1}) {doc}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 p-4 bg-red-50/50 border border-red-200 text-slate-700 rounded-2xl text-xs md:text-sm font-semibold flex items-start gap-2.5">
              <AlertCircle className="w-5 h-5 text-red-650 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-red-700">મહત્વની નોંધ :</strong>
                <p className="mt-0.5 text-slate-650 font-bold">યુનિવર્સિટી પરીક્ષા ફી (Exam Fee) અલગથી ચૂકવવાની રહેશે.</p>
              </div>
            </div>
          </div>

          {/* Right: Course Attractions */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h3 className="font-extrabold text-xl md:text-2xl text-slate-900 mb-6 flex items-center gap-2.5">
              <Award className="w-6.5 h-6.5 text-orange-600" />
              કોર્ષનું મુખ્ય આકર્ષણ અને ફાયદાઓ
            </h3>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="p-1.5 bg-orange-100 text-orange-700 rounded-lg flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-slate-700 text-sm md:text-base leading-relaxed font-extrabold">
                      {idx + 1}. {benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* <!-- BROCHURE LEAFLET DISPLAY --> */}
      <section className="bg-slate-100 py-12 md:py-20 px-4 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-slate-300 bg-white/50">
            <BookOpen className="w-4 h-4 text-slate-600" />
            <span className="text-xs font-bold text-slate-600 tracking-wider">સંબંધિત પત્રક અને બ્રોશર (OFFICIAL BROCHURE)</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8">અભ્યાસક્રમ વિગત પત્રક (Scan Image)</h2>

          <div className="bg-white rounded-3xl p-4 md:p-6 shadow-md border border-slate-200 inline-block max-w-full relative group">
            <div className="absolute top-6 right-6 bg-slate-900/80 text-white p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <ZoomIn className="w-5 h-5" />
            </div>
            <img
              src="/images/Certified cources/WhatsApp Image 2026-06-08 at 12.21.11 PM.jpeg"
              alt="MKT Institute of Technology certified courses brochure details"
              className="w-full h-auto rounded-2xl max-h-[700px] object-contain mx-auto shadow-xs border border-slate-100"
            />
          </div>
        </div>
      </section>

      {/* <!-- FOOTER BANNER CTA --> */}
      <section className="bg-glow-warm py-16 md:py-24 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
            આજે જ એડમિશન મેળવીને કારકિર્દી ઘડો!
          </h2>
          <p className="text-base md:text-lg text-slate-755 max-w-2xl mx-auto mb-10 leading-relaxed font-bold">
            લિમિટેડ બેઠકો ઉપલબ્ધ છે. નવી બેચ ટૂંક સમયમાં શરૂ થઈ રહી છે. તમારા ભવિષ્યને ઉજ્જવળ બનાવવા માટે આજે જ સંપર્ક કરી નોંધણી કરાવો.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/c?text=I%20want%20to%20register%20for%20MKT%20Institute%20courses"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg hover:bg-[#20ba59] transition-all text-sm md:text-base cursor-pointer"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              રજીસ્ટ્રેશન પૂછપરછ (WhatsApp)
            </a>
            <a
              href="tel:9974025126"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-linear-to-r from-orange-500 to-darkred text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/35 transition-all text-sm md:text-base cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              કોલ કરો : ૯૩૧૬૮૪૨૭૧૨
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

// Custom simple Lucide icon definition for AlertCircle fallback just in case
function AlertCircle(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export default MktInstitutePage
