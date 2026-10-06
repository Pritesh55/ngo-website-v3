'use client'
import React from 'react'
import Link from 'next/link'
import {
  Clock,
  Calendar,
  Award,
  GraduationCap,
  Users,
  CheckCircle2,
  FileText,
  Phone,
  MapPin,
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Briefcase,
  Layers,
  Coins,
  Check,
  FileCheck,
  ArrowRight
} from 'lucide-react'

export default function CourseDetailTemplate({ course }) {
  const {
    title,
    gujaratiTitle,
    categoryBadge = 'Government Certified Skill Course',
    description,
    gujaratiDescription,
    image,
    duration,
    durationHours,
    fee = 'Free of Cost (રૂ. 0/-)',
    qualification,
    ageLimit,
    stipend = 'Provided by Government after certification',
    placement = '100% Placement Assistance',
    syllabus = [],
    batchTimings = [
      {
        shift: 'Batch 1 (Morning / સવારની બેચ)',
        time: '07:30 AM to 11:30 AM',
        hours: '4 Hours Daily',
        desc: 'Ideal for early learners and those managing daytime schedules.'
      },
      {
        shift: 'Batch 2 (Afternoon / બપોરની બેચ)',
        time: '11:30 AM to 03:30 PM',
        hours: '4 Hours Daily',
        desc: 'Focused practical and theory session for daytime trainees.'
      },
      {
        shift: 'Batch 3 (Evening / સાંજની બેચ)',
        time: '03:30 PM to 07:30 PM',
        hours: '4 Hours Daily',
        desc: 'Suitable for students and working candidates.'
      }
    ],
    documents = [
      { id: 1, guj: '૦૪ પાસપોર્ટ સાઈઝ ફોટો', eng: '4 Passport size photographs' },
      { id: 2, guj: 'આધાર કાર્ડની કલર ઝેરોક્ષ', eng: 'Aadhaar card color xerox' },
      { id: 3, guj: 'શાળા છોડ્યાનું પ્રમાણપત્ર (LC)', eng: 'School Leaving Certificate (LC)' },
      { id: 4, guj: 'માર્કશીટ', eng: 'Marksheet of qualifying examination' },
      { id: 5, guj: 'બેંક પાસબુક પ્રથમ પાનાની નકલ', eng: 'Copy of bank passbook first page (for stipend credit)' },
      { id: 6, guj: 'લગ્ન નોંધણી પ્રમાણપત્ર (માત્ર પરિણીત મહિલાઓ માટે)', eng: 'Marriage registration certificate (for married women only)' }
    ]
  } = course

  const encodedMessage = encodeURIComponent(`Hello Manav Kalyan Trust, I would like to inquire about admission for "${title}".`)
  const courseParam = encodeURIComponent(course.courseId || course.slug || title || '')
  const admissionUrl = `/admission-form?course=${courseParam}`

  return (
    <div className="w-full text-slate-800 antialiased font-sans">

      {/* ── BREADCRUMB BAR (Light Amber Theme Header Scheme) ── */}
      <div className="bg-amber-50/50 border-b border-orange-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <Link href="/" className="hover:text-darkred transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-300 shrink-0" />
            <Link href="/our-courses" className="hover:text-darkred transition-colors">Courses</Link>
            <ChevronRight className="w-3.5 h-3.5 text-orange-300 shrink-0" />
            <span className="text-darkred font-semibold ">{title}</span>
          </nav>
        </div>
      </div>

      {/* ── SECTION 1: HERO & OVERVIEW (Light Amber/Yellow Gradient matching Header) ── */}
      <section className="bg-linear-to-b from-amber-50/80 via-orange-50/40 to-white border-b border-orange-100 pt-8 pb-12 sm:pb-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column: Heading & Key Details */}
            <div className="lg:col-span-7 space-y-5">

              {/* Badges in Brand Header Scheme */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-100/70 text-darkred border border-orange-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-red-700" />
                  {categoryBadge}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  100% Free (રૂ. 0/-)
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-100/60 text-amber-900 border border-amber-200">
                  <Coins className="w-3.5 h-3.5 text-amber-700" />
                  Government Stipend
                </span>
              </div>

              {/* Title & Subtitle in Brand Scheme */}
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-darkred tracking-tight leading-tight">
                  {title}
                </h1>
                {gujaratiTitle && (
                  <>
                    {/* <p className="text-lg sm:text-xl font-semibold text-slate-700 mt-1.5">
                      {gujaratiTitle}
                    </p> */}
                  </>

                )}
              </div>

              {/* Descriptions */}
              <div className="space-y-2 text-slate-650 text-sm sm:text-base leading-relaxed">
                <p>{description}</p>
                {gujaratiDescription && (
                  <>
                    {/* <p className=" border-orange-300 pl-3">
                      {gujaratiDescription}
                    </p> */}
                  </>

                )}
              </div>


              {/* Clean Key Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
                <div className="bg-white rounded-xl p-3 border border-orange-200/80 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Duration (અવધિ)</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">{duration}</span>
                  {durationHours && <span className="text-[11px] text-slate-500 block">{durationHours}</span>}
                </div>
                <div className="bg-white rounded-xl p-3 border border-orange-200/80 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Course Fee (કોર્સ ફી)</span>
                  <span className="text-sm font-bold text-darkred mt-0.5 block">{fee}</span>
                  <span className="text-[11px] text-emerald-700 font-semibold block">સંપૂર્ણ મફત</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-orange-200/80 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Qualification (લાયકાત)</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block " title={qualification}>{qualification}</span>
                  <span className="text-[11px] text-slate-500 block">ન્યૂનતમ લાયકાત</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-orange-200/80 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Age Limit (ઉંમર)</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">{ageLimit}</span>
                  <span className="text-[11px] text-slate-500 block">જરૂરી ઉંમર</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-orange-200/80 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Stipend (સ્ટાઈપેન્ડ)</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">After Certification</span>
                  <span className="text-[11px] text-slate-500 block">સરકાર તરફથી</span>
                </div>
                <div className="bg-white rounded-xl p-3 border border-orange-200/80 shadow-xs">
                  <span className="text-[11px] font-semibold text-slate-500 block uppercase tracking-wider">Placement (પ્લેસમેન્ટ)</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5 block">{placement}</span>
                  <span className="text-[11px] text-emerald-700 font-semibold block">૧૦૦% સહાય</span>
                </div>
              </div>

              {/* Action Buttons in Logo / Header Theme */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href={admissionUrl}
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 hover:from-emerald-700 hover:to-teal-800 text-white font-extrabold text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Apply Online (ઓનલાઇન પ્રવેશ અરજી)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={`https://wa.me/919974025126?text=${encodedMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm rounded-xl shadow-xs transition-colors"
                >
                  <img
                    src="/icons/whatsapp-color-svgrepo-com.svg"
                    alt="WhatsApp"
                    className="w-4 h-4 object-contain brightness-0 invert"
                  />
                  WhatsApp
                </Link>

                <a
                  href="tel:9974025126"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-linear-to-r from-orange-500 to-darkred hover:from-orange-600 hover:to-red-900 text-white font-semibold text-sm rounded-xl shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  9974025126
                </a>

                <a
                  href="tel:7859814126"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white hover:bg-orange-50/60 text-slate-800 font-semibold text-sm rounded-xl border border-orange-200 shadow-xs transition-colors"
                >
                  <Phone className="w-4 h-4 text-darkred" />
                  7859814126
                </a>
              </div>

            </div>

            {/* Right Column: Visual Card */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-orange-200/80 p-4 shadow-xs">

                {/* Course Image */}
                <div className="rounded-xl overflow-hidden bg-orange-50/30 border border-orange-100 flex items-center justify-center aspect-4/3 relative">
                  <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain p-2"
                  />
                </div>

                {/* Trust Highlights in Theme */}
                <div className="mt-4 pt-3 border-t border-orange-100 space-y-2 text-xs text-slate-650">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Free Course (કોર્સ ફી: રૂ. 0/- પૂર્ણ મફત)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Government Stipend after Certification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% Job Placement Assistance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-darkred font-medium">Manav Kalyan Trust • Ahmedabad</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-orange-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Admissions Status:</span>
                  <span className="font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Open for Registration
                  </span>
                </div>

                <Link
                  href={admissionUrl}
                  className="mt-3.5 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                >
                  <FileCheck className="w-4 h-4" />
                  <span>Apply Online Now (અહીંથી અરજી કરો)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 2: BATCH TIMINGS (Light Warm Glow Background) ── */}
      <section className="bg-linear-to-b from-amber-50/50 via-yellow-50/35 to-amber-50/30 py-12 px-4 sm:px-6 border-b border-amber-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-2 mb-6 pb-3 border-b border-amber-200/50">
            <div>
              <span className="text-xs font-bold text-amber-900 uppercase tracking-wider bg-amber-100/70 border border-amber-200/80 px-2.5 py-0.5 rounded-full inline-block mb-1">
                બેચ સમયપત્રક
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Batch Timings (સમયપત્રક)
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-700 bg-white/90 border border-amber-200 px-3 py-1 rounded-full shadow-xs">
              4 Hours Daily (દૈનિક ૪ કલાક)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {batchTimings.map((batch, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-amber-200/80 shadow-xs flex flex-col justify-between hover:border-amber-400 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-darkred">{batch.shift}</span>
                    <span className="text-[11px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-100">
                      {batch.hours}
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2 mt-1">
                    <Clock className="w-4 h-4 text-orange-600 shrink-0" />
                    {batch.time}
                  </div>
                  {/* <p className="text-xs text-slate-600 mt-2.5 leading-relaxed font-medium">
                    {batch.desc}
                  </p> */}
                </div>
                <div className="mt-4 pt-3 border-t border-amber-100 text-[11px] font-semibold text-emerald-700 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Open for Admission
                  </span>
                  <Link
                    href={admissionUrl}
                    className="text-emerald-700 hover:text-emerald-900 font-bold hover:underline"
                  >
                    Apply Online →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: CURRICULUM (Cool Breeze Glow Background) ── */}
      {syllabus && syllabus.length > 0 && (
        <section className="bg-glow-cool py-12 px-4 sm:px-6 border-b border-sky-100/70">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6 pb-3 border-b border-sky-100/80">
              <span className="text-xs font-bold text-sky-900 uppercase tracking-wider bg-sky-100/70 border border-sky-200 px-2.5 py-0.5 rounded-full inline-block mb-1">
                કોર્સ અભ્યાસક્રમ
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                What You Will Learn (અભ્યાસક્રમ વિગત)
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
                Comprehensive hands-on training curriculum designed for industry readiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {syllabus.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-2xl p-5 border border-sky-200/70 shadow-xs flex items-start gap-3.5 hover:border-sky-300 transition-colors"
                >
                  <span className="w-7 h-7 rounded-xl bg-sky-100 text-sky-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── SECTION 4: DOCUMENTS REQUIRED (Warm Rose/Peach Light Background) ── */}
      <section className="bg-linear-to-br from-orange-50/50 via-rose-50/30 to-amber-50/40 py-12 px-4 sm:px-6 border-b border-orange-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 pb-3 border-b border-orange-200/50">
            <span className="text-xs font-bold text-red-900 uppercase tracking-wider bg-rose-100/70 border border-rose-200 px-2.5 py-0.5 rounded-full inline-block mb-1">
              પ્રવેશ પ્રક્રિયા
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-darkred">
              એડમિશન માટેના જરૂરી પુરાવા (Documents Required)
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
              પોસ્ટર મુજબ નીચે આપેલા અસલ અને ઝેરોક્ષ દસ્તાવેજો એડમિશન સમયે સાથે લાવવા:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {documents.map((doc) => (
              <div
                key={doc.id}
                className="bg-white rounded-2xl p-4 border border-orange-200/70 shadow-xs flex items-start gap-3 hover:border-orange-300 transition-colors"
              >
                <span className="w-6 h-6 rounded-full bg-linear-to-br from-orange-500 to-darkred text-white text-xs font-bold flex items-center justify-center shrink-0 shadow-xs">
                  {doc.id}
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    {doc.guj}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">
                    {doc.eng}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Important Stipend Note in Theme */}
          <div className="mt-6 p-4 rounded-2xl bg-white border border-orange-200 text-xs text-slate-700 leading-relaxed shadow-xs flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold text-darkred">મહત્વપૂર્ણ નોંધ:</span> સરકાર તરફથી મળવાપાત્ર સ્ટાઈપેન્ડ સીધા બેંક ખાતામાં જમા થતું હોવાથી બેંક પાસબુકના પ્રથમ પાનાની સ્પષ્ટ નકલ જમા કરાવવી જરૂરી છે.
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TRAINING VENUE & MAP (Fresh Garden Light Background) ── */}
      <section className="bg-glow-fresh py-12 px-4 sm:px-6 border-b border-emerald-100/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Center Info */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-full inline-block mb-1">
                  તાલીમ કેન્દ્ર સ્થળ
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Manav Kalyan Trust (માનવ કલ્યાણ ટ્રસ્ટ)
                </h2>
              </div>

              <div className="space-y-3 text-sm text-slate-650">
                <div className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-emerald-150 shadow-xs">
                  <MapPin className="w-5 h-5 text-darkred shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">સરનામું (Poster Address):</p>
                    <p className="mt-1 font-semibold text-slate-800">
                      ૪૨૭, ચોથો માળ, કલાસાગર શોપિંગ મોલ, સાંઈબાબા મંદિર સામે, સત્તાધાર ક્રોસ રોડ પાસે, ઘાટલોડિયા, અમદાવાદ-૩૮૦૦૬૧.
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      427, 4th Floor, Klasagar Shopping Mall, Opp. Saibaba Temple, Near Sattadhar Cross Road, Ghatlodiya, Ahmedabad-380061.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-emerald-150 shadow-xs">
                  <Phone className="w-5 h-5 text-orange-600 shrink-0" />
                  <div>
                    <p className="font-bold text-slate-900">સંપર્ક નંબર (Phone Numbers):</p>
                    <div className="flex items-center gap-4 mt-1 text-sm font-bold">
                      <a href="tel:9974025126" className="text-darkred hover:underline">9974025126</a>
                      <span className="text-slate-300 font-normal">|</span>
                      <a href="tel:7859814126" className="text-darkred hover:underline">7859814126</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <Link
                  href="https://www.google.com/maps/place/MANAV+KALYAN+TRUST/@23.0720672,72.5124606,13z/data=!4m6!3m5!1s0x395e834433dac7e3:0x6098b80bc73d2bdd!8m2!3d23.0747676!4d72.535598!16s%2Fg%2F11ddwgd7wq?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-darkred bg-white hover:bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 shadow-xs transition-colors"
                >
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  Open in Google Maps (રૂબરૂ મુલાકાત)
                </Link>
              </div>
            </div>

            {/* Embedded Map */}
            <div className="lg:col-span-6 h-64 sm:h-80 rounded-2xl overflow-hidden border border-emerald-200/80 shadow-xs">
              <iframe
                title="Manav Kalyan Trust Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14683.748729577933!2d72.5252984871582!3d23.074767599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e834433dac7e3%3A0x6098b80bc73d2bdd!2sMANAV%20KALYAN%20TRUST!5e0!3m2!1sen!2sin!4v1718000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 6: BOTTOM INQUIRY CTA (Harmonious with Website Footer) ── */}
      <section className="bg-linear-to-r from-orange-600 via-red-700 to-darkred text-white py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-[11px] uppercase tracking-widest font-bold text-amber-200 bg-white/10 px-3 py-1 rounded-full inline-block">
              મર્યાદિત બેઠકો • એડમિશન ચાલુ છે
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              આજે જ સંપર્ક કરો અને પ્રવેશ મેળવો!
            </h2>
            <p className="text-xs sm:text-sm text-orange-100 font-medium">
              100% મફત તાલીમ • સરકાર તરફથી પ્રમાણપત્ર અને Pass થયાં પછી સ્ટાઈપેન્ડ • ૧૦૦% જોબ પ્લેસમેન્ટ Assistance.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href={admissionUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <FileCheck className="w-4 h-4" />
              Apply Online (ઓનલાઇન અરજી કરો)
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={`https://wa.me/919974025126?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-4 h-4 object-contain brightness-0 invert"
              />
              Join via WhatsApp
            </Link>
            <a
              href="tel:9974025126"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white hover:bg-orange-50 text-darkred font-bold text-xs sm:text-sm rounded-xl shadow-md transition-colors"
            >
              <Phone className="w-4 h-4 text-darkred" />
              Call 9974025126
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
