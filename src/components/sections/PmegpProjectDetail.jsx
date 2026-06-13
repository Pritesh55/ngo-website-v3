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
      <section className={`relative py-12 md:py-20 bg-gradient-to-br ${project.theme} border-b ${project.border} overflow-hidden`}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-bold text-slate-700 hover:text-slate-900 bg-white/85 px-4 py-2 rounded-full border border-slate-200/50 mb-6 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3.5 py-1 rounded-full text-xs font-extrabold border ${project.tagClass}`}>
              Project #{project.id}
            </span>
            <span className="px-3.5 py-1 bg-white/60 text-slate-700 text-xs font-bold rounded-full border border-slate-200/50 backdrop-blur-xs">
              {project.supportType}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight capitalize mb-4">
            Prime Minister’s <br className="hidden md:inline" />
            <span className="text-slate-850">Employment Generation Programme (PMEGP)</span>
          </h1>

          <p className="text-base md:text-xl text-slate-700 max-w-3xl leading-relaxed font-semibold">
            A major credit-linked subsidy programme of the Government of India designed to establish micro enterprises in rural and urban areas, merging PMRY and REGP.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 mt-12">
        {/* Project Gallery Section */}
        {project.images && project.images.length > 0 && (
          <section className="mb-12 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-5 mb-6 gap-3">
              <h3 className="text-lg md:text-2xl font-black text-slate-900 flex items-center gap-2.5">
                <ImageIcon className="w-6 h-6 text-violet-700" />
                Project Gallery
              </h3>
              <span className="text-xs font-extrabold text-slate-400">
                Showing {project.images.length} photos of Entrepreneurship batches
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {project.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx)
                    setLightboxIndex(idx)
                  }}
                  className="group relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-xs hover:shadow-md hover:border-violet-400 transition-all duration-300"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.name} gallery image ${idx + 1}`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-xs font-bold bg-black/60 px-3 py-1.5 rounded-full border border-white/20">
                      View Photo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

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
