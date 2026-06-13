'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
import AhvyProjectDetail from '@/components/sections/AhvyProjectDetail'
import {
  ArrowLeft,
  CheckCircle,
  Target,
  MapPin,
  Calendar,
  ShieldAlert,
  DollarSign,
  Users,
  Activity,
  Hourglass,
  ExternalLink,
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function ProjectDetailPage({ params }) {
  // Unwrap routing params using React.use (Next.js 15+ convention)
  const { slug } = React.use(params)
  const project = projects.find(p => p.slug === slug)

  // Carousel/Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Lightbox Modal State
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Keyboard Navigation for Lightbox
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

  // 404 Fallback layout if project is not found
  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <ShieldAlert className="w-16 h-16 text-red-500 mb-4 animate-bounce" />
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Project Not Found</h1>
        <p className="text-slate-600 mb-6 max-w-md">The project you are looking for does not exist or has been moved.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Homepage
        </Link>
      </div>
    )
  }

  if (project.layout === 'ahvy') {
    return <AhvyProjectDetail project={project} />
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Dynamic Colored Header Hero */}
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
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight capitalize mb-4">
            {project.name}
          </h1>

          <p className="text-base md:text-xl text-slate-700 max-w-3xl leading-relaxed font-semibold">
            {project.description}
          </p>
        </div>
      </section>

      {/* Main Details Grid */}
      <main className="max-w-6xl mx-auto px-6 mt-12 md:mt-16">
        {project.layout === 'gratitude' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Image Gallery Card */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              {/* Gallery Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-4 md:p-5 shadow-xs">
                {/* Active Image Preview */}
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 relative group">
                  <img
                    src={project.images[activeImageIndex]}
                    alt={`${project.name} detail view`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Thumbnails Row for Multiple Photos */}
                {project.images.length > 1 && (
                  <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 scrollbar-thin">
                    {project.images.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${activeImageIndex === idx
                          ? 'border-blue-600 scale-[1.03] shadow-sm'
                          : 'border-slate-200 hover:border-slate-350'
                          }`}
                      >
                        <img src={imgUrl} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Support / Sponsor Info for Gratitude layout */}
              {project.details["Support"] && (
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 md:p-8">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-800" />
                    Supporting Agency
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                    {project.details["Support"]}
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Hospital Gratitude message */}
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">
              {/* Gratitude/Honoring Certificate */}
              <div className="bg-amber-50/45 border-2 border-amber-200 rounded-3xl p-6 md:p-10 shadow-sm text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-amber-400 rounded-tl-2xl pointer-events-none" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-amber-400 rounded-tr-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-amber-400 rounded-bl-2xl pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-amber-400 rounded-br-2xl pointer-events-none" />

                <p className="text-sm md:text-base font-bold text-amber-800 italic mb-6 border-b border-amber-200 pb-3 leading-relaxed">
                  {project.details.gratitudeMessage.sanskrit}
                </p>

                <h2 className="text-lg md:text-xl font-extrabold text-slate-850 mb-1">
                  {project.details.gratitudeMessage.hospital}
                </h2>

                <h1 className="text-xl md:text-2xl font-extrabold text-amber-700 tracking-wide uppercase mb-4 drop-shadow-xs">
                  {project.details.gratitudeMessage.title}
                </h1>

                <h3 className="text-sm md:text-base font-bold text-slate-700 mb-1">
                  {project.details.gratitudeMessage.recipient}
                </h3>

                <h4 className="text-sm md:text-base font-bold text-blue-800 mb-6">
                  {project.details.gratitudeMessage.partner}
                </h4>

                <p className="text-slate-700 text-xs md:text-sm leading-relaxed font-semibold text-center max-w-xl mx-auto mb-8 text-justify md:text-center whitespace-pre-line">
                  {project.details.gratitudeMessage.body}
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end gap-4 border-t border-amber-200 pt-4 text-xs font-bold text-slate-650">
                  <div className="text-center sm:text-left">
                    <p>{project.details.gratitudeMessage.location}</p>
                    <p>{project.details.gratitudeMessage.date}</p>
                  </div>
                  <div className="text-center sm:text-right">
                    <p className="italic text-[10px] text-slate-400 mb-1">{project.details.gratitudeMessage.signature.text}</p>
                    <p className="text-slate-800 font-extrabold">{project.details.gratitudeMessage.signature.name}</p>
                    <p className="text-[10px] text-slate-500">{project.details.gratitudeMessage.signature.role}</p>
                    <p className="text-[10px] text-slate-500">{project.details.gratitudeMessage.signature.facility}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">

            {/* Left Column: Image Gallery & Goal */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">

              {/* Gallery Card */}
              <div className="bg-white border border-slate-200 rounded-3xl p-4 md:p-5 shadow-xs">
                {/* Active Image Preview */}
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 relative group">
                  <img
                    src={project.images[activeImageIndex]}
                    alt={`${project.name} detail view`}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                {/* Thumbnails Row for Multiple Photos */}
                {project.images.length > 1 && (
                  <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1 scrollbar-thin">
                    {project.images.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${activeImageIndex === idx
                          ? 'border-blue-600 scale-[1.03] shadow-sm'
                          : 'border-slate-200 hover:border-slate-350'
                          }`}
                      >
                        <img src={imgUrl} alt="thumbnail" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Goal/Objective Callout */}
              {(project.details["Goal"] || project.details["Object of the Project"]) && (
                <div className="bg-blue-50/50 border border-blue-100 rounded-3xl p-6 md:p-8">
                  <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-700" />
                    Project Goal
                  </h3>
                  <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                    {project.details["Goal"] || project.details["Object of the Project"]}
                  </p>
                </div>
              )}

              {/* Support / Sponsor Info */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-6 md:p-8">
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <Users className="w-5 h-5 text-emerald-800" />
                  Supporting Agency
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                  {project.details["Support"] || project.details["Supporting Agency"]}
                </p>
              </div>

            </div>

            {/* Right Column: Project Specifications Sheet */}
            <div className="lg:col-span-7 flex flex-col gap-6 md:gap-8">

              {/* Core Specifications Table */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-700" />
                  Project Specifications
                </h3>
                <div className="space-y-4">
                  {Object.entries(project.details).map(([key, value]) => {
                    // Skip listing array fields and custom layout payloads
                    if (key === "Activities" || key === "Outcome" || key === "gratitudeMessage") return null;
                    return (
                      <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-slate-100 gap-2 lg:gap-3 xl:gap-4 text-sm md:text-base">
                        <span className="text-slate-500 font-bold capitalize">{key}:</span>
                        <span className="font-extrabold text-slate-800 sm:text-right max-w-sm">{value}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Activities Section */}
              {project.details["Activities"] && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-indigo-700" />
                    Activities
                  </h3>
                  <ul className="space-y-3.5">
                    {Array.isArray(project.details["Activities"]) ? (
                      project.details["Activities"].map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-2.5 flex-shrink-0" />
                        <span>{project.details["Activities"]}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Outcome Section */}
              {project.details["Outcome"] && (
                <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-700" />
                    Outcome
                  </h3>
                  <ul className="space-y-3.5">
                    {Array.isArray(project.details["Outcome"]) ? (
                      project.details["Outcome"].map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-700">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-0.5">{idx + 1}</span>
                          <span>{outcome}</span>
                        </li>
                      ))
                    ) : (
                      <li className="flex items-start gap-3 text-sm md:text-base font-semibold text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                        <span>{project.details["Outcome"]}</span>
                      </li>
                    )}
                  </ul>
                </div>
              )}

            </div>

          </div>
        )}

        {/* Project Gallery Section */}
        {project.images && project.images.length > 0 && (
          <section className="mt-12 md:mt-16 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-blue-700" />
              Project Gallery
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {project.images.map((imgUrl, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setActiveImageIndex(idx)
                    setLightboxIndex(idx)
                  }}
                  className="group relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-55 cursor-pointer shadow-xs hover:shadow-md hover:border-blue-400 transition-all duration-300"
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
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex flex-col justify-center items-center p-4 select-none">
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
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
              alt={`${project.name} full view`}
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
