'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowLeft,
  CheckCircle,
  Target,
  Users,
  Briefcase,
  Wrench,
  TrendingUp,
  Coins,
  Building,
  FileText,
  Clock,
  X,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckSquare,
  Square,
  HelpCircle,
  MapPin,
  Calendar,
  Image as ImageIcon,
  ActivityIcon
} from 'lucide-react'

export default function AhvyProjectDetail({ project }) {
  // Tabs State for Interventions
  const [activeTab, setActiveTab] = useState('social')

  // Gallery State
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Interactive Checklist State for Documents
  const [checkedDocs, setCheckedDocs] = useState({})

  // Toggle document checklist
  const toggleDoc = (index) => {
    setCheckedDocs(prev => ({
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

  // Intervention Tab Details
  const tabs = [
    {
      id: 'social',
      label: 'Social',
      icon: <Users className="w-4 h-4" />,
      title: 'Social Interventions: Empowering Artisan Communities',
      subtitle: 'Social steps for identifying and mobilizing artisans',
      color: 'border-orange-200 bg-orange-50 text-orange-950',
      items: [
        {
          title: 'Mobilization & Survey',
          desc: 'Engaging with artisan groups and Self-Help Groups (SHGs) to conduct comprehensive baseline surveys. Documenting identity cards, photos, Aadhaar numbers, EPIC numbers, and bank accounts for each artisan.'
        },
        {
          title: 'Awareness & Planning',
          desc: 'Conducting awareness camps and discussions within clusters to educate artisans and collectively formulate annual action plans.'
        },
        {
          title: 'Financial Inclusion',
          desc: 'Facilitating the opening of bank accounts for SHGs and individual artisans, notably under the Jan Dhan Yojana, to ensure financial integration.'
        },
        {
          title: 'Social Security Net',
          desc: 'Enrolling every craftsperson under critical social security schemes like RSBY (Rashtriya Swasthya Bima Yojana) and AABY (Aam Aadmi Bima Yojana).'
        },
        {
          title: 'Identity Provision',
          desc: 'Issuing Artisans\' Identity Cards (AIC) to all eligible cluster artisans.'
        },
        {
          title: 'Formalization of Groups',
          desc: 'Supporting registration and formation of Producer Companies, Federations, or Institutions (minimum 50% cluster artisans as members/shareholders). Financial support up to INR 1 lakh per year for up to 3 years.',
          badge: 'Up to INR 1,00,000 / year (max 3 years)'
        },
        {
          title: 'Cluster Manager Appointment',
          desc: 'Selecting qualified and experienced cluster managers to oversee and guide the cluster\'s development.'
        },
        {
          title: 'Artisans\' Credit Card (ACC)',
          desc: 'Facilitating flexible access to credit (for both investment and working capital) through Scheduled Banks in rural and urban areas.'
        }
      ]
    },
    {
      id: 'tech',
      label: 'Technology',
      icon: <Wrench className="w-4 h-4" />,
      title: 'Technological Interventions: Modernizing Craftsmanship',
      subtitle: 'Modern tools, prototype development, and training sessions',
      color: 'border-blue-200 bg-blue-50 text-blue-950',
      items: [
        {
          title: 'Tool Kit Assistance',
          desc: 'Providing financial aid of approximately INR 5,000 per tool kit to equip artisans with modern and improved tools.',
          badge: 'INR 5,000 / Tool Kit'
        },
        {
          title: 'Prototype Development & Skill Upgradation',
          desc: 'Granting up to INR 1.80 million per workshop to support the development of new prototypes and the adoption of advanced techniques.',
          badge: 'Up to INR 18 Lakhs / Workshop'
        },
        {
          title: 'Research & Development',
          desc: 'Offering up to INR 10 lakhs for cluster and market studies, development of new tools, processes, and techniques, including test marketing.',
          badge: 'Up to INR 10 Lakhs'
        },
        {
          title: 'Training Support',
          desc: 'Providing financial assistance for specialized training (e.g., up to INR 1,81,000 for general crafts and up to INR 5,755,000 for carpet training).',
          badge: 'INR 1.81 Lakhs (General) - 57.55 Lakhs (Carpet)'
        },
        {
          title: 'Seminars & Symposiums',
          desc: 'Funding up to INR 6.70 million for organizing events focused on policy issues and challenges within the handicraft sector.',
          badge: 'Up to INR 6.7 Million'
        },
        {
          title: 'Need-Based Studies',
          desc: 'Allocating INR 5 lakhs for studies on need-based technology, process, and infrastructure.',
          badge: 'INR 5 Lakhs'
        }
      ]
    },
    {
      id: 'marketing',
      label: 'Marketing',
      icon: <TrendingUp className="w-4 h-4" />,
      title: 'Marketing Interventions: Expanding Market Reach',
      subtitle: 'Exhibitions, emporium establishment, and market link support',
      color: 'border-emerald-200 bg-emerald-50 text-emerald-950',
      items: [
        {
          title: 'Marketing Events',
          desc: '75% financial assistance (up to INR 1,38,750) for general state organizations. Full transportation up to INR 1,85,000 + TA/DA up to INR 30,000 per artisan for NER & J&K organizations presenting outside their regions.',
          badge: 'Up to INR 1.85 Lakhs + TA/DA'
        },
        {
          title: 'Publicity Materials',
          desc: 'Providing 75% financial assistance (100% for printing brochures, folders/maps, catalogs) for promotional activities.',
          badge: '75% to 100% Assistance'
        },
        {
          title: 'New Emporia Infrastructure',
          desc: 'Up to 50% of project cost, capped at INR 23 lakhs for own buildings, INR 11.50 lakhs for rented, or INR 5.75 lakhs for renovation/expansion.',
          badge: 'Up to INR 23 Lakhs'
        },
        {
          title: 'Cluster & Exposure Visits',
          desc: '100% government assistance up to INR 4 lakhs per cluster visit for market linkage initiatives, and exposure visits to best practices based on merit.',
          badge: '100% (Up to INR 4 Lakhs)'
        },
        {
          title: 'Workshed Support',
          desc: 'Up to INR 1 lakh per workshed for artisan groups, covering storage for finished goods, raw materials, and working space.',
          badge: 'Up to INR 1 Lakh'
        },
        {
          title: 'Entrepreneurship Training',
          desc: 'Financial aid of INR 2 lakhs per training batch for entrepreneurship development programs.',
          badge: 'INR 2 Lakhs / Batch'
        }
      ]
    },
    {
      id: 'financial',
      label: 'Financial',
      icon: <Coins className="w-4 h-4" />,
      title: 'Financial Interventions: Strengthening Economic Base',
      subtitle: 'Assistance for corpus funds and project implementing agencies',
      color: 'border-purple-200 bg-purple-50 text-purple-950',
      items: [
        {
          title: 'Common Corpus Fund',
          desc: '100% assistance of INR 4,000 per artisan (up to INR 5,00,000 per cluster) for creating a common corpus, enhancing credit facilities, and bank loans.',
          badge: 'INR 4,000 / Artisan (Max 5 Lakhs)'
        },
        {
          title: 'Cluster Manager Support',
          desc: 'Monthly assistance of INR 27,566 for 60 months to support the cluster manager.',
          badge: 'INR 27,566 / month (for 5 years)'
        },
        {
          title: 'Project Implementing Agency (PIA) Support',
          desc: '5% of the total released amount (up to INR 1,00,000 for projects under INR 25 lakhs, and INR 1,50,000 for projects above INR 25 lakhs) for administrative and overhead support.',
          badge: 'Up to INR 1.5 Lakhs'
        }
      ]
    },
    {
      id: 'infra',
      label: 'Infrastructure',
      icon: <Building className="w-4 h-4" />,
      title: 'Cluster-Specific Infrastructure Interventions',
      subtitle: 'Raw material bank, common facility centers, and e-kiosks',
      color: 'border-rose-200 bg-rose-50 text-rose-950',
      items: [
        {
          title: 'Raw Material Bank',
          desc: 'Up to INR 2 crores to set up raw material banks, ensuring consistent, cost-effective, and uninterrupted supply of materials to cluster artisans.',
          badge: 'Up to INR 2 Crores'
        },
        {
          title: 'Common Facility Centre (CFC)',
          desc: 'Up to INR 60 lakhs per CFC for shared infrastructure, machines, tools, design templates, and collective manufacturing/processing activities.',
          badge: 'Up to INR 60 Lakhs'
        },
        {
          title: 'Resource Centre & E-Kiosks',
          desc: 'Support for setting up informational resource centers and digital e-kiosks to enhance market intelligence, connectivity, and direct orders.'
        }
      ]
    }
  ]

  const eligibilityCriteria = [
    "Apex Cooperative Societies & Cooperatives",
    "COHANDS (Council of Handicrafts Development Corporations)",
    "Handicraft Artists' Trusts",
    "Central and State Handlooms & Handicrafts Development Corporations",
    "Other government companies or agencies promoted by state governments or financial institutions",
    "Handicrafts Export Promotion Council (EPCH)",
    "Reputed NGOs (Non-Governmental Organizations)",
    "Renowned Indian and International designers",
    "Exporters and business owners registered under Section 25 of the Companies Act (non-profit organizations)",
    "Federations of NGOs/SHGs Consortiums, etc., registered under relevant laws",
    "The National Center for Product Development and Design (NCDPD)",
    "Metal Crafts Service Center (MHSC)",
    "Organizations registered for the long-term growth of craft clusters"
  ]

  const requiredDocuments = [
    "KYC Documents: Address proof, Aadhaar card, and PAN card of partners, authorized representatives, and directors.",
    "Organizational Documents: Self-attested copy of Memorandum of Association (MoA), Bylaws, and Legal Registration Certificate.",
    "Financial Records: Audited balance sheets and annual reports for the last three years (certified by a Chartered Accountant).",
    "Meeting Minutes: Copy of minutes from the last Annual General Meeting (AGM).",
    "Organizational Details: List of officers with full names, postal addresses, phone/mobile numbers, and email.",
    "Resolution for Aid: Copy of a resolution seeking financial assistance under the scheme from the Development Commissioner.",
    "Bank Details: Bank name, branch address, account number, IFSC, and signature validation details.",
    "Utilization Certificates: Details of funds utilized from DC (Handicrafts) and other central/state departments over last three years.",
    "Project Leadership: Name and contact details of the project head, nodal officer, and authorized contact official.",
    "Affidavit 1: Declaration that the majority of governing body members are not from the same family.",
    "Affidavit 2: Information about individuals holding membership in any other society registered in India.",
    "Affidavit 3: Confirmation that the organization is not blacklisted by any central/state government agency and not involved in illegal activities."
  ]

  return (
    <div className="min-h-screen bg-slate-50/70 pb-24 text-slate-800">
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
            Empowering Artisans: <br className="hidden md:inline" />
            <span className="text-slate-850">Ambedkar Hastshilp Vikas Yojana (AHVY)</span>
          </h1>

          <p className="text-base md:text-xl text-slate-700 max-w-3xl leading-relaxed font-semibold">
            A cluster-based government initiative designed to revitalize India's vibrant handicraft sector, aligned with Skill India and National Education Policy (NEP) 2020.
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
                <ImageIcon className="w-6 h-6 text-amber-700" />
                Project Gallery
              </h3>
              <span className="text-xs font-extrabold text-slate-400">
                Showing {project.images.length} photos of the clusters
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
                  className="group relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 cursor-pointer shadow-xs hover:shadow-md hover:border-amber-400 transition-all duration-300"
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


        {/* Intro Card & Key Specs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Introduction description */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs flex flex-col justify-between h-full">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 mb-4 flex items-center gap-2.5">
                <span className="p-1.5 bg-amber-100 text-amber-700 rounded-lg"><CheckCircle className="w-5 h-5" /></span>
                Overview
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold mb-5 text-justify whitespace-pre-line">
                The Ambedkar Hastshilp Vikas Yojana (AHVY) is a pivotal government initiative designed to revitalize and strengthen India's vibrant handicraft sector. Aligned with the broader goals of Skill India and the National Education Policy (NEP) 2020's emphasis on vocational and traditional arts, AHVY aims to foster a sustainable ecosystem for artisans by providing crucial financial, technological, and market support.
              </p>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-semibold text-justify">
                Operated as a cluster-based program under the Development Commissioner (Handicrafts), AHVY's core mission is to elevate Indian artisanal products by fortifying regional networks of craftspeople nationwide, ultimately enhancing their livelihoods and preserving invaluable cultural heritage.
              </p>
            </div>

            {/* Quick Fact Badges */}
            <div className="mt-8 pt-6 border-t border-slate-150 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Target Area</h4>
                  <p className="text-xs font-black text-slate-800">{project.details["Target Area"]}</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Users className="w-5 h-5 text-orange-600 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Beneficiaries</h4>
                  <p className="text-xs font-black text-slate-800">1000+ Artisans</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Duration</h4>
                  <p className="text-xs font-black text-slate-800">{project.details["Duration"]}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Specs */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs">
            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100 flex items-center gap-2">
              <ActivityIcon className="w-5 h-5 text-amber-700" />
              Project Specifications
            </h3>
            <div className="space-y-4">
              {Object.entries(project.details).map(([key, value]) => {
                if (key === "Activities" || key === "Outcome") return null;
                return (
                  <div key={key} className="flex flex-col sm:flex-row sm:items-start sm:justify-between py-3 border-b border-slate-100 gap-2 text-sm md:text-base">
                    <span className="text-slate-500 font-bold capitalize flex-shrink-0">{key}:</span>
                    <span className="font-extrabold text-slate-800 sm:text-right max-w-xs">{value}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Core Objectives Section */}
        <section className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-3">
              Core Objectives of AHVY
            </h2>
            <p className="text-slate-505 font-bold text-sm">
              The scheme is strategically designed to achieve critical milestones across the craft ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Objective 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg hover:border-amber-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-amber-50 text-amber-700 border border-amber-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">Market Promotion</h3>
              <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                Intensify awareness and demand for high-quality Indian handicrafts, particularly targeting niche and premium markets.
              </p>
            </div>

            {/* Objective 2 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg hover:border-orange-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-orange-50 text-orange-700 border border-orange-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">Production Expansion</h3>
              <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                Facilitate the growth and diversification of the production base for a wide range of handicraft products, from utility-based items to lifestyle goods.
              </p>
            </div>

            {/* Objective 3 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xs hover:shadow-lg hover:border-yellow-300 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-14 h-14 bg-yellow-50 text-yellow-700 border border-yellow-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-3">Heritage Preservation</h3>
              <p className="text-slate-650 text-sm leading-relaxed font-semibold">
                Actively conserve and revitalize languishing or endangered traditional crafts, ensuring the continuity of India's rich artistic legacy.
              </p>
            </div>
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
              alt="AHVY project full view"
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
