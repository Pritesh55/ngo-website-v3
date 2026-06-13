'use client'
import React from 'react'
import Link from 'next/link'
import { FolderOpen, ArrowRight, Image as ImageIcon } from 'lucide-react'
import { projects } from '@/data/projects'
import Section_header from './common/section_header'
import Image from 'next/image'

export function Our_Projects_Cards_Section() {

  const our_projcts_section_header_info = {
    id: 2,
    icon: <FolderOpen className="w-4 h-4 text-blue-700" />,
    subTitle: 'અમારા પ્રોજેક્ટ્સ (OUR PROJECTS)',
    title: 'અમારા મુખ્ય સેવા પ્રોજેક્ટ્સ ',
    description: 'મહિલા સશક્તિકરણ, ગ્રામીણ વિકાસ, કુદરતી આપત્તિ રાહત કાર્ય અને આરોગ્ય ક્ષેત્રે માનવ કલ્યાણ ટ્રસ્ટના અવિરત પ્રયાસો.',
  }
  return (
    <section id="our-projects" className="bg-gradient-to-b from-slate-50 to-white py-16 md:py-24 px-4 sm:px-6 border-b border-slate-100 relative overflow-hidden">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <Section_header section_header_info={our_projcts_section_header_info}></Section_header>

        {/* Projects Grid (2-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-8 mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gradient-to-br ${project.theme} border ${project.border} rounded-3xl p-5 md:p-6 shadow-xs flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full`}
            >
              <div>
                {/* Project Image Container */}
                <div className="h-48 md:h-64 w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 mb-5 relative group">
                  <Link href={`/projects/${project.slug}`}>
                    <Image
                      src={project.images[0]}
                      alt={project.name}
                      width={574}
                      height={296}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    {/* Badge for project number */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-xs text-slate-800 text-xs font-extrabold rounded-full border border-slate-200/50 shadow-xs">
                      Project {project.id}
                    </div>
                    {/* Badge for multiple photos */}
                    {project.images.length > 1 && (
                      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-xs text-white text-xs font-bold rounded-full border border-white/20">
                        <ImageIcon className="w-3.5 h-3.5" />
                        <span>{project.images.length} Photos</span>
                      </div>
                    )}
                  </Link>
                </div>

                {/* Project Heading */}
                <h3 className="text-lg md:text-xl font-extrabold text-slate-900 leading-snug mb-3 capitalize">
                  {project.name}
                </h3>

                {/* Project Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-semibold line-clamp-3">
                  {project.description}
                </p>

                {/* Quick Info Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.details["Target Area"] && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/80 border border-slate-200 text-slate-700">
                      📍 {project.details["Target Area"]}
                    </span>
                  )}
                  {project.details["Duration"] && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/80 border border-slate-200 text-slate-700">
                      ⏱️ {project.details["Duration"]}
                    </span>
                  )}
                  {project.details["Budget"] && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/80 border border-slate-200 text-slate-700">
                      💰 Budget: {project.details["Budget"]}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                <span className={`px-3 py-1.5 rounded-full text-xs font-extrabold border ${project.tagClass}`}>
                  {project.supportType}
                </span>

                <Link
                  href={`/projects/${project.slug}`}
                  className={`inline-flex items-center justify-center gap-1 px-5 py-2.5 rounded-xl text-xs md:text-sm font-extrabold transition-all duration-200 bg-gradient-to-r ${project.btnClass} shadow-xs`}
                >
                  વિગત જુઓ (Details)
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Our_Projects_Cards_Section
