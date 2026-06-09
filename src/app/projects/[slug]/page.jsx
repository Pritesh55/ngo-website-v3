'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { projects } from '@/data/projects'
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
  ExternalLink
} from 'lucide-react'

export default function ProjectDetailPage({ params }) {
  // Unwrap routing params using React.use (Next.js 15+ convention)
  const { slug } = React.use(params)
  const project = projects.find(p => p.slug === slug)

  // Carousel/Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0)

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
            મુખ્ય પાનું (Home)
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
                  મુખ્ય ધ્યેય (Project Goal)
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
                સહયોગી સંસ્થા (Supporting Agency)
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
                પ્રોજેક્ટ વિગત (Specifications)
              </h3>
              <div className="space-y-4">
                {Object.entries(project.details).map(([key, value]) => {
                  // Skip listing array fields (render below)
                  if (key === "Activities" || key === "Outcome" || key === "Goal" || key === "Object of the Project" || key === "Support" || key === "Supporting Agency") return null;
                  return (
                    <div key={key} className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-3 border-b border-slate-100 gap-1 text-sm md:text-base">
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
                  મુખ્ય પ્રવૃત્તિઓ (Activities)
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
                  પ્રોજેક્ટ પરિણામ (Outcome)
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
      </main>
    </div>
  )
}
