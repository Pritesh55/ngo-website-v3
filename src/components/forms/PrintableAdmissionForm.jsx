import React from 'react'
import Image from 'next/image'
import {
  Calendar,
  MapPin,
  GraduationCap,
  User,
  ShieldCheck,
  Info,
  BookOpen
} from 'lucide-react'

// Course mapping helper for consistent naming
const COURSE_MAP = {
  'fashion designer': {
    name: 'Fashion Designer',
    duration: '6 Months (570 Hours)',
  },
  'boutique manager': {
    name: 'Boutique Manager',
    duration: '6 Months (600 Hours)',
  },
  'purchase coordinator electronics': {
    name: 'Purchase Coordinator - Electronics',
    duration: '6 Months (510 Hours)',
  },
}

export default function PrintableAdmissionForm({ student }) {
  if (!student) return null

  // Resolve course name and duration
  const rawCourse = (student.course_name || '').toLowerCase()
  let courseDisplayName = student.course_name || '-'
  let courseDuration = student.course_duration || '6 Months'

  if (COURSE_MAP[rawCourse]) {
    courseDisplayName = COURSE_MAP[rawCourse].name
    if (!student.course_duration) {
      courseDuration = COURSE_MAP[rawCourse].duration
    }
  }

  // Format Aadhaar with spaces
  const formatAadhaar = (num) => {
    if (!num) return '-'
    const clean = num.replace(/\D/g, '')
    if (clean.length === 12) {
      return clean.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')
    }
    return num
  }

  // Safe education history rows
  const eduHistory = Array.isArray(student.education_history) ? student.education_history : []

  return (
    <div className="printable-admission-form font-sans bg-white text-slate-900 border-2 border-slate-900 max-w-4xl mx-auto rounded-xl overflow-hidden print:border print:border-slate-800 print:shadow-none print:m-0 print:p-0 print:rounded-none print:max-w-none print:w-full">
      {/* ============================================================ */}
      {/* HEADER SECTION (Date, Place, Logos, Passport Photo) */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-white print:p-3 print:border-b-2">
        {/* Date & Place bar */}
        <div className="flex justify-between items-center text-xs font-bold text-slate-700 border-b border-slate-200 pb-2 mb-3 print:pb-1.5 print:mb-2.5">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-rose-700 print:text-black" />
            <span>Date:</span>
            <span className="bg-slate-100 px-2.5 py-0.5 rounded border border-slate-300 font-mono text-slate-900 print:border-slate-400 print:bg-transparent">
              {student.application_date || student.created_at?.slice(0, 10) || '04/10/2026'}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-rose-700 print:text-black" />
            <span>Place:</span>
            <span className="bg-slate-100 px-2.5 py-0.5 rounded border border-slate-300 font-mono text-slate-900 print:border-slate-400 print:bg-transparent">
              {student.application_place || 'Ahmedabad'}
            </span>
          </div>
        </div>

        {/* Logos & Photo Row (Top Baseline-Aligned 3-Column Layout) */}
        <div className="flex items-start justify-between gap-3 sm:gap-4 print:gap-3">
          {/* Left: GSDM Official Header Logo (State Emblem of India + Gujarat Skill Development Mission) */}
          <div className="w-[30%] sm:w-[28%] print:w-[28%] shrink-0 pt-1 flex items-start justify-start">
            <div className="w-full max-w-[210px] h-18 sm:h-22 print:h-16 relative flex items-center justify-start">
              <Image
                src="/images/partners-logo/gsdm-official-header.png"
                alt="State Emblem of India & Gujarat Skill Development Mission"
                width={200}
                height={88}
                priority
                loading="eager"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </div>

          {/* Center: MKT Branding & Official Titles */}
          <div className="text-center flex-1 flex flex-col items-center justify-start px-2 pt-0.5">
            {/* Center MKT Sunburst Logo */}
            <div className="w-18 h-12 sm:w-22 sm:h-13 print:w-16 print:h-10 relative mb-1 flex items-center justify-center">
              <Image
                src="/Mkt-logo.svg"
                alt="Manav Kalyan Trust Logo"
                width={70}
                height={46}
                priority
                loading="eager"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-wider text-slate-700 print:text-black leading-tight">
              NGKRM SCHEME – GSDM
            </h3>
            <h1 className="font-serif text-xl sm:text-2xl lg:text-3xl font-black text-rose-900 print:text-black tracking-tight leading-tight my-0.5">
              Manav Kalyan Trust
            </h1>
            <div className="inline-block mt-1 px-4 py-0.5 sm:px-6 sm:py-1 border-2 border-slate-900 rounded-md bg-slate-50 font-black text-xs sm:text-sm tracking-widest text-slate-900 uppercase shadow-2xs print:border-black print:bg-white print:shadow-none">
              ADMISSION FORM
            </div>
          </div>

          {/* Right: Passport Photo Box (Standard 3.5cm x 4.5cm Indian Photo Aspect) */}
          <div className="w-[26%] sm:w-[24%] print:w-[24%] shrink-0 flex justify-end pt-1">
            <div className="w-28 h-36 sm:w-32 sm:h-40 print:w-26 print:h-34 border-2 border-slate-900 rounded-lg flex flex-col items-center justify-center p-1 text-center bg-slate-50 print:bg-white overflow-hidden shadow-2xs print:shadow-none">
              {student.passport_photo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={student.passport_photo_url}
                  alt="Student Passport Photo"
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-400 p-2">
                  <User className="w-8 h-8 text-slate-400 mb-1" />
                  <span className="text-[9px] font-bold text-slate-700 leading-tight">
                    Affix Passport Photo
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Form No. & Registration No. */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-300 print:mt-2 print:pt-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs sm:text-sm text-slate-800">Form No.:</span>
            <span className="bg-amber-50/80 border border-amber-300 print:border-slate-800 text-rose-900 print:text-black font-bold px-3 py-1 rounded text-xs sm:text-sm font-mono tracking-wider">
              {student.form_no || '-'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-xs sm:text-sm text-slate-800">Registration No.:</span>
            <span className="bg-indigo-50/80 border border-indigo-300 print:border-slate-800 text-indigo-950 print:text-black font-bold px-3 py-1 rounded text-xs sm:text-sm font-mono tracking-wider">
              {student.registration_no || '-'}
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 01. COURSE SELECTION & SCHEDULING */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-slate-50/50 print:bg-white print:p-3 space-y-3">
        <h2 className="text-sm font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
          <GraduationCap className="w-4 h-4 text-rose-700 print:text-black" />
          <span>Course Selection &amp; Scheduling</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white border border-slate-300 print:border-slate-400 p-2.5 rounded-lg">
            <span className="block text-[11px] font-bold text-slate-500 uppercase">01) Course Name</span>
            <span className="font-bold text-slate-900 text-sm">{courseDisplayName}</span>
          </div>
          <div className="bg-emerald-50/60 print:bg-white border border-emerald-300 print:border-slate-400 p-2.5 rounded-lg">
            <span className="block text-[11px] font-bold text-emerald-800 print:text-slate-600 uppercase">02) Course Duration</span>
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-950 print:text-slate-900 text-sm">{courseDuration}</span>
              <span className="text-[10px] bg-emerald-200 text-emerald-800 print:border print:border-slate-400 px-1.5 py-0.2 rounded font-semibold">Free of Cost</span>
            </div>
          </div>
          <div className="bg-white border border-slate-300 print:border-slate-400 p-2.5 rounded-lg">
            <span className="block text-[11px] font-bold text-slate-500 uppercase">03) Time Slot</span>
            <span className="font-bold text-slate-900 text-sm">{student.time_slot || '-'}</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 02. PERSONAL DETAILS */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-white print:p-3 space-y-3">
        <h2 className="text-sm font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
          <User className="w-4 h-4 text-rose-700 print:text-black" />
          <span>Personal Details</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="col-span-2 sm:col-span-3 bg-slate-50 print:bg-white p-2.5 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Full Name (In Block Letters)</span>
            <span className="font-bold text-slate-900 text-sm tracking-wide">{student.full_name || '-'}</span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Date of Birth &amp; Age</span>
            <span className="font-bold text-slate-900 font-mono">
              {student.date_of_birth || '-'} {student.calculated_age ? `(${student.calculated_age} Yrs)` : ''}
            </span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Gender</span>
            <span className="font-bold text-slate-900">{student.gender || '-'}</span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Marital Status</span>
            <span className="font-bold text-slate-900">{student.marital_status || '-'}</span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Father&apos;s Name</span>
            <span className="font-bold text-slate-900">{student.fathers_name || '-'}</span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Mother&apos;s Name</span>
            <span className="font-bold text-slate-900">{student.mothers_name || '-'}</span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Father&apos;s Occupation</span>
            <span className="font-bold text-slate-900">{student.fathers_occupation || '-'}</span>
          </div>

          <div className="bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Cast / Category</span>
            <span className="font-bold text-slate-900">{student.category || '-'}</span>
          </div>

          <div className="col-span-2 sm:col-span-2 bg-slate-50 print:bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Student Aadhaar Number</span>
            <span className="font-bold text-slate-900 font-mono tracking-widest">{formatAadhaar(student.aadhaar_no)}</span>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 03. CONTACT & POSTAL ADDRESS */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-slate-50/50 print:bg-white print:p-3 space-y-3">
        <h2 className="text-sm font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
          <MapPin className="w-4 h-4 text-rose-700 print:text-black" />
          <span>Contact &amp; Postal Address</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Student Phone (WhatsApp)</span>
            <span className="font-bold text-slate-900 font-mono">{student.contact_number || '-'}</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Father / Guardian Phone</span>
            <span className="font-bold text-slate-900 font-mono">{student.father_number || '-'}</span>
          </div>
          <div className="bg-white p-2 rounded-lg border border-slate-200 print:border-slate-400 col-span-2 sm:col-span-1">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Email Address</span>
            <span className="font-bold text-slate-900 truncate block">{student.email || '-'}</span>
          </div>

          <div className="col-span-2 sm:col-span-3 bg-white p-2.5 rounded-lg border border-slate-200 print:border-slate-400">
            <span className="block text-[10px] font-bold text-slate-500 uppercase">Postal Address</span>
            <p className="font-bold text-slate-900 leading-snug">
              {[
                student.flat_society,
                student.street_road,
                student.landmark ? `Near ${student.landmark}` : null,
                student.area_village,
                student.city,
                student.state ? `${student.state} - ${student.pincode || ''}` : student.pincode,
              ]
                .filter(Boolean)
                .join(', ') || '-'}
            </p>
          </div>

          {!student.same_as_postal && student.permanent_address && (
            <div className="col-span-2 sm:col-span-3 bg-white p-2.5 rounded-lg border border-slate-200 print:border-slate-400">
              <span className="block text-[10px] font-bold text-slate-500 uppercase">Permanent Address</span>
              <p className="font-bold text-slate-900 leading-snug">
                {student.permanent_address} {student.permanent_pincode ? `(PIN: ${student.permanent_pincode})` : ''}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* ============================================================ */}
      {/* 04. EDUCATION QUALIFICATION & EXAM HISTORY */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-white print:p-3 space-y-3">
        <h2 className="text-sm font-bold text-slate-900 capitalize tracking-wide flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-rose-700 print:text-black" />
          <span>Education Qualification &amp; Exam History</span>
        </h2>

        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold bg-slate-50 print:bg-white p-2.5 rounded-lg border border-slate-200 print:border-slate-400">
          <div>
            <span className="text-slate-500 mr-1.5">Qualification:</span>
            <span className="font-bold text-slate-900">{student.education_level || '-'}</span>
          </div>
          {student.below_10th_standard && (
            <div>
              <span className="text-slate-500 mr-1.5">Standard Passed:</span>
              <span className="font-bold text-slate-900">{student.below_10th_standard}</span>
            </div>
          )}
        </div>

        {/* Education History Table */}
        <div className="border border-slate-900 rounded overflow-hidden">
          <table className="w-full text-xs text-left border-collapse">
            <thead className="bg-slate-100 print:bg-slate-200 font-bold text-slate-900 border-b border-slate-900">
              <tr>
                <th className="p-2 border-r border-slate-900 w-1/2">Exam Passed</th>
                <th className="p-2 border-r border-slate-900 w-1/3">Board / University</th>
                <th className="p-2 text-center w-28">Year of Passing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-300 print:divide-slate-400 bg-white">
              {eduHistory.length > 0 ? (
                eduHistory.map((row, idx) => (
                  <tr key={idx}>
                    <td className="p-2 border-r border-slate-900 font-semibold">{row.exam || '-'}</td>
                    <td className="p-2 border-r border-slate-900">{row.board || '-'}</td>
                    <td className="p-2 text-center font-mono font-bold">{row.year || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 border-r border-slate-900 font-semibold">{student.education_level || '10th Pass'}</td>
                  <td className="p-2 border-r border-slate-900">GSEB</td>
                  <td className="p-2 text-center font-mono font-bold">2022</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 05. PHYSICAL DOCUMENTS CHECKLIST */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-amber-50/50 print:bg-white print:p-3 space-y-2">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-amber-800 print:text-black shrink-0 mt-0.5" />
          <div>
            <h3 className="text-xs font-bold capitalize text-amber-950 print:text-black tracking-wider">
              Physical Required Documents (To bring at Training Center)
            </h3>
            <p className="text-[11px] text-amber-900 print:text-slate-700">
              Candidate must carry original and photocopies of the following 7 documents:
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[11px] font-semibold text-slate-800 pt-1 list-decimal list-inside">
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded">4 Passport Photos</li>
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded">Aadhaar Card Xerox</li>
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded">Voter ID Card</li>
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded">Marksheet / Certificate</li>
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded">School Leaving Cert.</li>
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded">Bank Passbook Xerox</li>
          <li className="bg-white print:border print:border-slate-300 p-1.5 rounded col-span-2">Marriage Cert. (if married)</li>
        </ol>
      </div>

      {/* ============================================================ */}
      {/* 06. TERMS AND CONDITIONS */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 border-b-2 border-slate-900 bg-slate-50/60 print:bg-white print:p-3 space-y-2">
        <h2 className="text-xs font-bold text-slate-900 capitalize tracking-wide flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-rose-700 print:text-black" />
          <span>Terms and Conditions</span>
        </h2>
        <div className="text-[10px] text-slate-700 print:text-black leading-relaxed space-y-1">
          <p>1. The candidate must be a resident of Gujarat with minimum 90% attendance mandatory.</p>
          <p>2. The candidate must attend all practical sessions, assessments, and examinations as scheduled.</p>
          <p>3. The course is completely free of cost under NGKRM Scheme – GSDM. No fees are payable.</p>
          <p>4. The candidate must submit all required documents before final admission confirmation.</p>
          <p>5. Any misconduct or false information may lead to immediate cancellation of admission.</p>
        </div>
      </div>

      {/* ============================================================ */}
      {/* 07. DECLARATION & PHYSICAL SIGNATURES */}
      {/* ============================================================ */}
      <div className="p-4 sm:p-6 space-y-4 bg-white print:p-3">
        <div className="bg-rose-50/60 print:bg-white border border-rose-200 print:border-slate-400 p-3 rounded-lg text-xs text-slate-800">
          <p className="font-semibold leading-normal">
            ✓ <strong>Declaration:</strong> I hereby declare that the information given in this application form is true to the best of my knowledge and belief. I have read all rules and regulations and promise to abide by them.
          </p>
        </div>

        {/* Physical Signatures Row */}
        <div className="grid grid-cols-2 gap-6 pt-2">
          <div className="border border-slate-400 rounded-lg p-3 text-center bg-slate-50 print:bg-white space-y-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase block">
              Signature of Parents / Guardians
            </span>
            <div className="h-12 border-b border-dashed border-slate-400 flex items-end justify-center text-[10px] text-slate-400 pb-1">
              (Sign physically upon verification)
            </div>
          </div>

          <div className="border border-slate-400 rounded-lg p-3 text-center bg-slate-50 print:bg-white space-y-2">
            <span className="text-[11px] font-bold text-slate-700 uppercase block">
              Signature of Applicant
            </span>
            <div className="h-12 border-b border-dashed border-slate-400 flex items-end justify-center text-[10px] text-slate-400 pb-1">
              (Sign physically upon verification)
            </div>
          </div>
        </div>

        {/* Footer Date & Place */}
        <div className="flex justify-between items-center text-[11px] text-slate-600 border-t border-slate-300 pt-2 font-mono">
          <span>Date: <strong>{student.application_date || student.created_at?.slice(0, 10) || '04/10/2026'}</strong></span>
          <span>Place: <strong>{student.application_place || 'Ahmedabad'}</strong></span>
        </div>
      </div>
    </div>
  )
}
