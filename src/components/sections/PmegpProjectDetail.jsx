'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle,
  Target,
  Users,
  Briefcase,
  TrendingUp,
  Coins,
  Building,
  FileText,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckSquare,
  Square,
  MapPin,
  Calendar,
  Image as ImageIcon,
  Info,
  ShieldAlert,
  DollarSign,
  Layers
} from 'lucide-react'

export default function PmegpProjectDetail({ project }) {
  // Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Interactive Checklist State for Eligibility Conditions
  const [checkedCriteria, setCheckedCriteria] = useState({})

  // Toggle checklist item
  const toggleCriteria = (index) => {
    setCheckedCriteria(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null || !project) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') {
        const newIndex = (lightboxIndex - 1 + project.images.length) % project.images.length
        setLightboxIndex(newIndex)
        setActiveImageIndex(newIndex)
      }
      if (e.key === 'ArrowRight') {
        const newIndex = (lightboxIndex + 1) % project.images.length
        setLightboxIndex(newIndex)
        setActiveImageIndex(newIndex)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxIndex, project])

  const eligibilityCriteria = [
    "Any individual applicant above 18 years of age.",
    "No income ceiling for setting up projects under the PMEGP scheme.",
    "For manufacturing projects costing above Rs. 10 Lakh and service projects above Rs. 5 Lakh, the applicant must possess at least an VIII standard pass educational qualification.",
    "Financial assistance is strictly available only for new projects sanctioned specifically under PMEGP.",
    "Self Help Groups (SHGs) are eligible (including those belonging to BPL, provided they have not availed benefits under any other government scheme).",
    "Institutions registered under the Societies Registration Act, 1860.",
    "Production Co-operative Societies.",
    "Charitable Trusts are fully eligible for financial assistance."
  ]

  const objectives = [
    {
      title: "Self-Employment & Venture Creation",
      desc: "Generate continuous employment opportunities in rural as well as urban areas of the country through setting up of new self-employment ventures, projects, and micro enterprises.",
      icon: <Briefcase className="w-6 h-6 text-violet-750" />
    },
    {
      title: "Youth and Artisan Mobilization",
      desc: "Bring together widely dispersed traditional artisans and rural/urban unemployed youth, providing them with self-employment opportunities at their regional locations.",
      icon: <Users className="w-6 h-6 text-indigo-750" />
    },
    {
      title: "Arresting Rural Migration",
      desc: "Provide continuous and sustainable employment to a large segment of traditional artisans and rural/urban unemployed youth to help arrest migration to urban areas.",
      icon: <MapPin className="w-6 h-6 text-purple-750" />
    },
    {
      title: "Enhancing Earning Capacity",
      desc: "Increase the wage earning capacity of artisans and contribute significantly to accelerating the growth rate of rural and urban employment.",
      icon: <TrendingUp className="w-6 h-6 text-pink-750" />
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24 text-slate-800 font-sans">
      {/* Hero Banner Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700 text-white overflow-hidden shadow-md">
        {/* Abstract shapes overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] opacity-60" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-8 transition-all duration-200 shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="flex items-center gap-2 mb-4">
            <span className="px-3.5 py-1 bg-violet-500/90 text-white text-xs font-black rounded-full border border-violet-400 uppercase tracking-widest shadow-xs">
              Project #{project.id}
            </span>
            <span className="px-3.5 py-1 bg-white/25 text-white text-xs font-bold rounded-full border border-white/10 backdrop-blur-xs">
              {project.supportType}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 drop-shadow-sm">
            Prime Minister’s <br className="hidden md:inline" />
            <span className="text-violet-200">Employment Generation Programme (PMEGP)</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-violet-50/90 max-w-3xl leading-relaxed font-medium">
            A major credit-linked subsidy programme of the Government of India designed to establish micro enterprises in rural and urban areas, merging PMRY and REGP.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        {/* Intro Block & Implementing Agencies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Scheme Overview Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="p-1.5 bg-violet-100 text-violet-700 rounded-lg"><Info className="w-5 h-5" /></span>
                The Scheme
              </h2>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold mb-4 text-justify">
                The Government of India approved the introduction of the **Prime Minister’s Employment Generation Programme (PMEGP)** by merging two prominent schemes: the *Prime Minister’s Rojgar Yojana (PMRY)* and the *Rural Employment Generation Programme (REGP)*. 
              </p>
              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold text-justify">
                Administered by the **Ministry of Micro, Small and Medium Enterprises (MoMSME)**, PMEGP functions as a central sector scheme. The Government subsidy is routed by the National Nodal Agency through identified banks for direct credit into the bank accounts of beneficiaries and entrepreneurs.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-150 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <Building className="w-5 h-5 text-violet-650 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Administered By</h4>
                  <p className="text-xs font-black text-slate-800">Ministry of MSME</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-indigo-650 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Nodal Agency</h4>
                  <p className="text-xs font-black text-slate-800">KVIC (National)</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-purple-650 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Target Locations</h4>
                  <p className="text-xs font-black text-slate-800">Rural & Urban Areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Implementing Flow Grid */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100 flex items-center gap-2">
                <Building className="w-5 h-5 text-violet-700" />
                Implementing Agencies
              </h3>
              <p className="text-slate-500 text-xs font-bold mb-5 leading-relaxed">
                PMEGP is executed via a structured framework spanning national, state, and district levels:
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-800 flex items-center justify-center font-bold text-xs mt-0.5">1</span>
                  <div>
                    <h5 className="text-xs md:text-sm font-extrabold text-slate-850">National Level Nodal</h5>
                    <p className="text-xs text-slate-550 font-bold leading-normal">Khadi and Village Industries Commission (KVIC)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-850 flex items-center justify-center font-bold text-xs mt-0.5">2</span>
                  <div>
                    <h5 className="text-xs md:text-sm font-extrabold text-slate-850">State Level Nodal</h5>
                    <p className="text-xs text-slate-550 font-bold leading-normal">State KVIC Directorates & State Khadi and Village Industries Boards (KVIBs)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-800 flex items-center justify-center font-bold text-xs mt-0.5">3</span>
                  <div>
                    <h5 className="text-xs md:text-sm font-extrabold text-slate-850">District Level & Finance</h5>
                    <p className="text-xs text-slate-550 font-bold leading-normal">District Industries Centres (DICs), Commercial Banks, and Partner Institutions</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-slate-50 rounded-xl border border-slate-150 text-[11px] font-semibold text-slate-550 leading-relaxed text-justify">
              <strong>Collaborating Partners:</strong> Reputed NGOs, autonomous institutions, Self Help Groups, National Small Industries Corporation (NSIC), and empanelled Udyami Mitras under RGUMY.
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <section className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              Program Objectives
            </h2>
            <p className="text-slate-500 font-bold text-sm">
              The primary targets are aimed at employment generation and uplifting the traditional artisan base.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objectives.map((obj, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg hover:border-violet-300 transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-violet-50 border border-violet-100 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {obj.icon}
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-slate-900 mb-2 leading-tight">
                    {obj.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-semibold">
                    {obj.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eligibility Conditions & Exclusions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Eligibility Criteria Checklist */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
            <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-4">
              <div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 flex items-center gap-2">
                  <span className="p-1 bg-violet-50 text-violet-700 rounded-lg"><ShieldCheck className="w-5 h-5" /></span>
                  Beneficiary Eligibility
                </h2>
                <p className="text-slate-500 text-xs font-bold mt-1">
                  Candidates and institutions must satisfy the following conditions. Check them off to track:
                </p>
              </div>
              <button
                onClick={() => setCheckedCriteria({})}
                className="text-xs text-slate-400 hover:text-violet-600 font-extrabold cursor-pointer border border-slate-200 px-2.5 py-1.5 rounded-lg hover:border-violet-200 transition-all"
              >
                Reset
              </button>
            </div>

            <div className="space-y-2.5">
              {eligibilityCriteria.map((criteria, idx) => {
                const isChecked = !!checkedCriteria[idx]
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCriteria(idx)}
                    className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all duration-150 cursor-pointer select-none ${isChecked
                      ? 'bg-violet-50/50 border-violet-250 text-slate-900 font-bold'
                      : 'bg-white border-slate-150 text-slate-650 hover:bg-slate-50/50 hover:border-slate-350'
                      }`}
                  >
                    <button className="flex-shrink-0 mt-0.5" aria-label="Toggle criteria">
                      {isChecked ? (
                        <CheckSquare className="w-4.5 h-4.5 text-violet-650 fill-violet-50" />
                      ) : (
                        <Square className="w-4.5 h-4.5 text-slate-350" />
                      )}
                    </button>
                    <span className="text-xs md:text-sm font-semibold leading-relaxed">
                      {criteria}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Exclusions warning card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-rose-50/50 border-2 border-rose-250 rounded-3xl p-6 md:p-8 shadow-xs relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-200/20 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg md:text-xl font-black text-rose-950 mb-4 flex items-center gap-2">
                <ShieldAlert className="w-5.5 h-5.5 text-rose-700" />
                Exclusion Criteria
              </h3>
              <p className="text-xs md:text-sm font-bold text-rose-900/90 leading-relaxed mb-4 text-justify">
                Specific units and activities are strictly excluded from obtaining credit or subsidies under the PMEGP scheme:
              </p>
              
              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-bold text-rose-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-650 mt-2 flex-shrink-0" />
                  <span><strong>Existing Units:</strong> Units set up under PMRY, REGP, or other government schemes of India/States.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs md:text-sm font-bold text-rose-950">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-650 mt-2 flex-shrink-0" />
                  <span><strong>Prior Subsidies:</strong> Any business units that have already availed of Government Subsidy under any other central or state scheme.</span>
                </li>
              </ul>
            </div>

            {/* Quick summary notes card */}
            <div className="bg-violet-50/50 border border-violet-100 rounded-3xl p-6 shadow-xs">
              <h4 className="text-sm font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                <Info className="w-4.5 h-4.5 text-violet-750" />
                Education Criteria Rule
              </h4>
              <p className="text-xs text-slate-600 font-semibold leading-relaxed text-justify">
                Applicants must be at least VIII Standard Pass for setting up manufacturing projects valued above <strong>Rs. 10 Lakhs</strong> or service/business units valued above <strong>Rs. 5 Lakhs</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Loan Limits and Quantum of Financial Assistance Table */}
        <section className="bg-white border border-slate-200 rounded-4xl p-6 md:p-8 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-100 pb-5 mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-2 flex items-center gap-2.5">
                <Coins className="w-5.5 h-5.5 text-violet-750" />
                Financial Assistance & Subsidies
              </h2>
              <p className="text-slate-500 font-semibold text-sm">
                Quantum of funding and beneficiary contribution metrics under the PMEGP framework:
              </p>
            </div>
            
            {/* Quick Limit Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3.5 py-1.5 bg-violet-50 text-violet-850 text-xs font-black rounded-lg border border-violet-100">
                Max Mfg Cost: Rs. 25 Lakh
              </span>
              <span className="px-3.5 py-1.5 bg-indigo-50 text-indigo-850 text-xs font-black rounded-lg border border-indigo-100">
                Max Service Cost: Rs. 10 Lakh
              </span>
            </div>
          </div>

          {/* Pricing Grid details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Manufacturing Limits */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-gradient-to-br from-violet-50/40 to-slate-50/10">
              <span className="text-[10px] tracking-wider font-extrabold uppercase text-violet-600">Sector Limits</span>
              <h4 className="text-lg font-black text-slate-850 mb-2 mt-1">Manufacturing Projects</h4>
              <p className="text-xs md:text-sm font-semibold text-slate-600 leading-relaxed mb-4">
                Setting up factories, production mills, clothing, or engineering fabrication projects.
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-violet-700">Rs. 25 Lakh</span>
                <span className="text-xs font-bold text-slate-450">Maximum Cost</span>
              </div>
            </div>

            {/* Service Limits */}
            <div className="border border-slate-200 rounded-3xl p-6 bg-gradient-to-br from-indigo-50/40 to-slate-50/10">
              <span className="text-[10px] tracking-wider font-extrabold uppercase text-indigo-600">Sector Limits</span>
              <h4 className="text-lg font-black text-slate-850 mb-2 mt-1">Service & Business Sector</h4>
              <p className="text-xs md:text-sm font-semibold text-slate-600 leading-relaxed mb-4">
                Consultancies, retail outlets, dry cleaners, cyber cafes, repair workshops, and transport services.
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-black text-indigo-700">Rs. 10 Lakh</span>
                <span className="text-xs font-bold text-slate-450">Maximum Cost</span>
              </div>
            </div>
          </div>

          {/* Subsidy Matrix Table */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-left text-xs md:text-sm">
              <thead className="bg-slate-100 text-slate-700 font-extrabold border-b border-slate-200">
                <tr>
                  <th className="p-4 md:p-5 font-black">Categories of Beneficiaries</th>
                  <th className="p-4 md:p-5 text-center font-black">Beneficiary's Contribution</th>
                  <th className="p-4 md:p-5 text-center font-black" colSpan="2">
                    Rate of Subsidy (of project cost)
                    <div className="flex justify-around border-t border-slate-200 mt-2 pt-1 font-bold text-[10px]">
                      <span>Urban Rate</span>
                      <span>Rural Rate</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-250 font-semibold text-slate-800">
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 md:p-5">
                    <span className="font-extrabold text-slate-900 block">General Category</span>
                    <span className="text-[10px] text-slate-400 block font-normal">All General Applicants</span>
                  </td>
                  <td className="p-4 md:p-5 text-center font-extrabold text-slate-650">10%</td>
                  <td className="p-4 md:p-5 text-center text-indigo-700 font-extrabold bg-indigo-50/20">15%</td>
                  <td className="p-4 md:p-5 text-center text-emerald-700 font-extrabold bg-emerald-50/20">25%</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="p-4 md:p-5">
                    <span className="font-extrabold text-slate-900 block">Special Category</span>
                    <span className="text-[10px] text-slate-400 block font-normal">SC / ST / OBC / Minorities / Women, Ex-servicemen, Physically handicapped, NER, Hill and Border areas</span>
                  </td>
                  <td className="p-4 md:p-5 text-center font-extrabold text-slate-650">05%</td>
                  <td className="p-4 md:p-5 text-center text-indigo-700 font-extrabold bg-indigo-50/20">25%</td>
                  <td className="p-4 md:p-5 text-center text-emerald-700 font-extrabold bg-emerald-50/20">35%</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Table notes */}
          <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-500 space-y-2 leading-relaxed">
            <p>1. The balance amount of the total project cost is provided by Commercial Banks as a term loan.</p>
            <p>2. Subsidy rates vary heavily based on unit location (Urban vs. Rural). Setting up units in Rural areas qualifies for the highest subsidy rate of 35% under the Special Category.</p>
          </div>
        </section>

        {/* Contact Block */}
        <section className="bg-violet-50/40 border border-violet-100 rounded-3xl p-6 md:p-8 shadow-xs mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-violet-650 text-white flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 mb-1">District Industries Centre</h3>
                <p className="text-xs md:text-sm font-semibold text-slate-600 leading-relaxed max-w-lg">
                  For assistance, project identification, eligibility certificates, and program queries, entrepreneurs should get in touch with their respective District Industries Centre (DIC).
                </p>
              </div>
            </div>
            
            <a
              href="#our-projects" 
              onClick={(e) => {
                e.preventDefault()
                window.open("https://msme.gov.in/", "_blank")
              }}
              className="px-6 py-3 bg-violet-650 hover:bg-violet-700 text-white text-xs font-black rounded-xl transition-colors flex items-center gap-2 flex-shrink-0 cursor-pointer shadow-xs"
            >
              Visit Official MoMSME Portal
            </a>
          </div>
        </section>

        {/* Gallery / Carousel Section */}
        {project.images && project.images.length > 0 && (
          <section className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 mb-6 gap-3">
              <h3 className="text-lg md:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <ImageIcon className="w-6 h-6 text-violet-700" />
                Project Gallery
              </h3>
              <span className="text-xs font-extrabold text-slate-400">
                Showing {project.images.length} photos of Entrepreneurship batches
              </span>
            </div>

            {/* Main Image Display Box */}
            <div className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-2xl border border-slate-150 bg-slate-50 mb-6 group">
              <img
                src={project.images[activeImageIndex]}
                alt="Entrepreneurship development program batch overview"
                className="w-full h-full object-cover object-center transition-transform duration-500"
              />
              {/* Overlay controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-sm md:text-base font-black">PMEGP Entrepreneurship Development Program</h4>
                  <p className="text-xs text-slate-200/90 font-medium font-bold">Image {activeImageIndex + 1} of {project.images.length}</p>
                </div>
              </div>

              {/* Prev / Next buttons inside the image display */}
              <button
                onClick={() => {
                  const newIdx = (activeImageIndex - 1 + project.images.length) % project.images.length
                  setActiveImageIndex(newIdx)
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => {
                  const newIdx = (activeImageIndex + 1) % project.images.length
                  setActiveImageIndex(newIdx)
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center cursor-pointer transition-colors shadow-xs"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Thumbnail Row */}
            <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-thin">
              {project.images.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx)
                    setLightboxIndex(idx)
                  }}
                  className={`relative w-24 h-18 rounded-xl overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all duration-200 ${activeImageIndex === idx
                    ? 'border-violet-650 scale-[1.03] shadow-md'
                    : 'border-slate-200 hover:border-slate-350'
                    }`}
                >
                  <img src={imgUrl} alt={`Batch thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors" />
                </button>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-center items-center p-4 select-none">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/85 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
            aria-label="Close lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation - Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              const newIndex = (lightboxIndex - 1 + project.images.length) % project.images.length
              setLightboxIndex(newIndex)
              setActiveImageIndex(newIndex)
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Main Image Container */}
          <div className="w-full max-w-5xl max-h-[80vh] flex justify-center items-center relative" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[lightboxIndex]}
              alt="Batch full view"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>

          {/* Navigation - Next */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              const newIndex = (lightboxIndex + 1) % project.images.length
              setLightboxIndex(newIndex)
              setActiveImageIndex(newIndex)
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Metadata Footer */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white/80 text-sm font-bold bg-black/60 px-4 py-2 rounded-full border border-white/10">
            Photo {lightboxIndex + 1} of {project.images.length}
          </div>
        </div>
      )}
    </div>
  )
}
