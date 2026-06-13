'use client'
import React from 'react'
import { CheckCircle, Calendar, Award, Scissors, Wrench, Briefcase, ChevronRight, Phone, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

const SewingMachineCoursePage = () => {
  return (
    <>
      {/* <!-- 1 ▸ HERO SECTION --------------------------------------------- --> */}
      <section className="relative flex items-center justify-center px-4 py-12 md:py-24 bg-linear-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Tagline Badge */}
          <div className="mb-5 md:mb-6 inline-block">
            <div className="px-4 py-1.5 md:px-5 md:py-2 rounded-full border border-orange-200 bg-orange-100/50 backdrop-blur-xs">
              <p className="text-xs md:text-base font-semibold text-red-700 capitalize tracking-wider">
                Women Empowerment and Skill Development Program
              </p>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent">
              Sewing Machine Operator Course
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-slate-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
            Change your future in just 3 months and become completely self-reliant!
          </p>

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
              WhatsApp Inquiry (Join Now)
            </Link>
            <Link
              href="tel:9974025126"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-xl transition-all text-sm md:text-base cursor-pointer shadow-sm"
            >
              <Phone className="w-5 h-5" />
              Call for Guidance
            </Link>
            <Link
              href="https://www.google.com/maps/place/MANAV+KALYAN+TRUST/@23.0720672,72.5124606,13z/data=!4m6!3m5!1s0x395e834433dac7e3:0x6098b80bc73d2bdd!8m2!3d23.0747676!4d72.535598!16s%2Fg%2F11ddwgd7wq?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold rounded-xl transition-all text-sm md:text-base cursor-pointer shadow-sm"
            >
              <MapPin className="w-5 h-5 text-emerald-700" />
              Office Visit (Google Maps)
            </Link>


          </div>
        </div>
      </section>

      {/* <!-- 2 ▸ COURSE DETAIL & OVERVIEW ---------------------------------- --> */}
      <section className="bg-glow-cool py-12 md:py-20 px-4 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

            {/* Left Column: Core Info & Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Highlight Metrics (Legal Details Style) */}
              <div className="bg-linear-to-br from-orange-50/80 to-red-50/40 border-2 border-orange-200 rounded-3xl p-5 md:p-6 shadow-xs space-y-5 md:space-y-6">

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="p-2.5 md:p-3 bg-orange-100 rounded-xl text-orange-700 flex-shrink-0">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold capitalize tracking-wider text-slate-500 mb-1">Duration</h3>
                    <p className="text-lg md:text-xl font-bold text-slate-900">3 Months</p>
                    <p className="text-xs md:text-sm text-slate-650 font-semibold mt-1">Complete hands-on training</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 pt-5 border-t border-orange-200/50">
                  <div className="p-2.5 md:p-3 bg-red-100 rounded-xl text-red-700 flex-shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold capitalize tracking-wider text-slate-500 mb-1">Course Fee</h3>
                    <p className="text-lg md:text-xl font-bold text-red-700">₹ 3,000 (3 Months)</p>
                    <p className="text-xs md:text-sm text-slate-650 font-semibold mt-1">Under Women Self-Reliance Initiative</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 pt-5 border-t border-orange-200/50">
                  <div className="p-2.5 md:p-3 bg-amber-100 rounded-xl text-amber-700 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold capitalize tracking-wider text-slate-500 mb-1">Track Record</h3>
                    <p className="text-lg md:text-xl font-bold text-slate-900">120+ Empowered Women</p>
                    <p className="text-xs md:text-sm text-slate-650 font-semibold mt-1">Economically self-reliant and independent</p>
                  </div>
                </div>

              </div>

              {/* Course Objective Card */}
              <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-3xl shadow-xs">
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3 border-b border-slate-100 pb-2">Main Objective of the Course</h3>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                  To enable women to secure respectable jobs or start their own home-based business by gaining technical skills in industrial machine operation and garment construction.
                </p>
              </div>

            </div>

            {/* Right Column: Detailed Curriculum */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

              <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-xs flex-1">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-5 md:mb-6 border-b border-slate-100 pb-3 md:pb-4">
                  What you will learn? (Course Syllabus)
                </h2>

                <div className="space-y-5 md:space-y-6">

                  {/* Skill 1 */}
                  <div className="flex gap-3 md:gap-4 items-start">
                    <div className="p-2 md:p-2.5 bg-orange-100 text-orange-700 rounded-xl flex-shrink-0 mt-1">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Mastery of Professional Sewing Machines</h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                        Complete practical knowledge of setup, smooth operation, safety control, and basic maintenance of industrial and professional sewing machines is provided.
                      </p>
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div className="flex gap-3 md:gap-4 items-start pt-5 border-t border-slate-100">
                    <div className="p-2 md:p-2.5 bg-blue-100 text-blue-700 rounded-xl flex-shrink-0 mt-1">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Stitching Techniques and Designing</h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                        Stitching with quality and precision on various fabrics, garment designing according to the latest fashion trends along with modern cutting and stitching techniques is taught.
                      </p>
                    </div>
                  </div>

                  {/* Skill 3 */}
                  <div className="flex gap-3 md:gap-4 items-start pt-5 border-t border-slate-100">
                    <div className="p-2 md:p-2.5 bg-emerald-100 text-emerald-700 rounded-xl flex-shrink-0 mt-1">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">Employment and Self-Employment Guidance</h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                        Preparation for working in garment factories, Quality Control standards, work safety, and guidance for running a self-sustaining business or boutique setup.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* <!-- 3 ▸ FACILITY GALLERY SECTION --------------------------------- --> */}
      <section className="bg-glow-fresh py-12 md:py-20 px-4 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-center">

            {/* Visual Section */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-md border-2 border-emerald-150">
              <img
                src="/images/courses/img8.jpg"
                alt="Manav Kalyan Trust Sewing training center facility"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Description Text */}
            <div className="lg:col-span-6 space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-100/50">
                <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wider">OUR FACILITY</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                Practical Education and Supportive Environment
              </h2>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                At our training center, we ensure that every student gets their own sewing machine and ample practical time. Personal attention is provided by experienced instructors so that every trainee can learn with confidence.
              </p>

              <blockquote className="border-l-4 border-emerald-500 pl-4 py-1.5 text-slate-600 text-sm md:text-base italic font-semibold">
                “As you can see the glimpse of our training center in the photo above, we provide practical education with excellent equipment.”
              </blockquote>
            </div>

          </div>

        </div>
      </section>


      {/* <!-- 4 ▸ CTA REGISTER -------------------------------------------- --> */}
      <section className="bg-glow-warm py-12 md:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            Join today and become self-reliant!
          </h2>

          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-semibold">
            New batch is starting soon. Contact us now to secure your future or learn skills.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="https://wa.me/919974025126?text=Join%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-md hover:bg-[#20ba59] transition-all text-sm md:text-base capitalize tracking-wider cursor-pointer"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              Join via WhatsApp (Join Now)
            </a>
            <a
              href="tel:9974025126"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-orange-500 to-darkred text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/35 transition-all text-sm md:text-base capitalize tracking-wider cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              Call to Register
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border-2 border-slate-350 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm md:text-base cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              Inquire via Email
            </a>
          </div>

          <div className="mt-10 md:mt-12 text-xxs md:text-xs text-slate-500 font-bold tracking-widest capitalize">
            MANAV KALYAN TRUST • AHMEDABAD
          </div>

        </div>
      </section>
    </>
  )
}

export default SewingMachineCoursePage
