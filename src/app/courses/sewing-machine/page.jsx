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
                મહિલા સશક્તિકરણ અને કૌશલ્ય વર્ધન કાર્યક્રમ
              </p>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            સીવણ મશીન ઓપરેટર કોર્સ<br />
            <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent">
              Sewing Machine Operator
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-slate-700 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-semibold">
            માત્ર ૩ મહિનામાં તમારા ભવિષ્યને બદલો અને સંપૂર્ણપણે આત્મનિર્ભર બનો!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link
              href="https://wa.me/919426062068?text=Join%20now"
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
              href="tel:9426062068"
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
                    <h3 className="text-xs md:text-sm font-bold capitalize tracking-wider text-slate-500 mb-1">સમયગાળો (Duration)</h3>
                    <p className="text-lg md:text-xl font-bold text-slate-900">૩ મહિના (3 Months)</p>
                    <p className="text-xs md:text-sm text-slate-650 font-semibold mt-1">સંપૂર્ણ પ્રાયોગિક તાલીમ (Hands-on training)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 pt-5 border-t border-orange-200/50">
                  <div className="p-2.5 md:p-3 bg-red-100 rounded-xl text-red-700 flex-shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold capitalize tracking-wider text-slate-500 mb-1">કોર્સ ફી (Course Fee)</h3>
                    <p className="text-lg md:text-xl font-bold text-red-700">₹ 3000 (૩ મહિના)</p>
                    <p className="text-xs md:text-sm text-slate-650 font-semibold mt-1">મહિલા આત્મનિર્ભરતા પ્રોત્સાહન હેઠળ</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4 pt-5 border-t border-orange-200/50">
                  <div className="p-2.5 md:p-3 bg-amber-100 rounded-xl text-amber-700 flex-shrink-0">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xs md:text-sm font-bold capitalize tracking-wider text-slate-500 mb-1">સફળતાનો આંકડો (Track Record)</h3>
                    <p className="text-lg md:text-xl font-bold text-slate-900">૧૨૦+ મહિલાઓ સશક્ત</p>
                    <p className="text-xs md:text-sm text-slate-650 font-semibold mt-1">આર્થિક રીતે આત્મનિર્ભર અને સ્વતંત્ર</p>
                  </div>
                </div>

              </div>

              {/* Course Objective Card */}
              <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-3xl shadow-xs">
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-2 md:mb-3 border-b border-slate-100 pb-2">કોર્સનો મુખ્ય ઉદ્દેશ્ય</h3>
                <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                  ઔદ્યોગિક મશીન ઓપરેશન અને ગારમેન્ટ કન્સ્ટ્રક્શનની ટેકનિકલ કુશળતા મેળવીને મહિલાઓને સન્માનજનક નોકરી મેળવવામાં અથવા પોતાનો ઘર-વ્યવસાય શરૂ કરવામાં સક્ષમ બનાવવાનો છે.
                </p>
              </div>

            </div>

            {/* Right Column: Detailed Curriculum */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">

              <div className="bg-white border border-slate-200 rounded-3xl p-5 md:p-8 shadow-xs flex-1">
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-5 md:mb-6 border-b border-slate-100 pb-3 md:pb-4">
                  તમે શું શીખશો? (Course Syllabus)
                </h2>

                <div className="space-y-5 md:space-y-6">

                  {/* Skill 1 */}
                  <div className="flex gap-3 md:gap-4 items-start">
                    <div className="p-2 md:p-2.5 bg-orange-100 text-orange-700 rounded-xl flex-shrink-0 mt-1">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">પ્રોફેશનલ સીવણ મશીન પર પકડ</h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                        ઔદ્યોગિક અને પ્રોફેશનલ સીવણ મશીનોનું સેટઅપ, સુચારું સંચાલન, સેફ્ટી કંટ્રોલ અને પાયાની જાળવણી (Maintenance) ની સંપૂર્ણ વ્યવહારુ માહિતી આપવામાં આવે છે.
                      </p>
                    </div>
                  </div>

                  {/* Skill 2 */}
                  <div className="flex gap-3 md:gap-4 items-start pt-5 border-t border-slate-100">
                    <div className="p-2 md:p-2.5 bg-blue-100 text-blue-700 rounded-xl flex-shrink-0 mt-1">
                      <Scissors className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">સ્ટીચિંગ ટેકનિક અને ડિઝાઇનિંગ</h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                        વિવિધ પ્રકારના કાપડ પર ગુણવત્તાસભર અને ચોકસાઈપૂર્વક સિલાઈ કરવી, આધુનિક કટિંગ અને સ્ટીચિંગ ટેકનિક સાથે લેટેસ્ટ ફેશન ટ્રેન્ડ મુજબ કપડાંનું ડિઝાઇનિંગ શીખવવામાં આવે છે.
                      </p>
                    </div>
                  </div>

                  {/* Skill 3 */}
                  <div className="flex gap-3 md:gap-4 items-start pt-5 border-t border-slate-100">
                    <div className="p-2 md:p-2.5 bg-emerald-100 text-emerald-700 rounded-xl flex-shrink-0 mt-1">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-bold text-slate-900 mb-1">રોજગારલક્ષી અને સ્વરોજગાર માર્ગદર્શન</h4>
                      <p className="text-slate-650 text-sm md:text-base leading-relaxed font-semibold">
                        ગારમેન્ટ ફેક્ટરીમાં કામ કરવા માટેની સજ્જતા, ગુણવત્તા નિયંત્રણ (Quality Control) ના ધોરણો, વર્ક સેફ્ટી, and સ્વનિર્ભર વ્યવસાય કે બુટિક સેટઅપ ચલાવવા માટેનું માર્ગદર્શન.
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
                <span className="text-xs md:text-sm font-bold text-emerald-800 tracking-wider">તાલીમ કેન્દ્ર (OUR FACILITY)</span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
                પ્રાયોગિક શિક્ષણ અને સહાયક વાતાવરણ
              </h2>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
                અમારા તાલીમ કેન્દ્રમાં, અમે સુનિશ્ચિત કરીએ છીએ કે દરેક વિદ્યાર્થીનીને પોતાનું વ્યક્તિગત સીવણ મશીન અને પૂરતો પ્રાયોગિક સમય મળે. અનુભવી પ્રશિક્ષકો દ્વારા વ્યક્તિગત ધ્યાન આપવામાં આવે છે જેથી દરેક તાલીમાર્થી આત્મવિશ્વાસપૂર્વક શીખી શકે.
              </p>

              <blockquote className="border-l-4 border-emerald-500 pl-4 py-1.5 text-slate-600 text-sm md:text-base italic font-semibold">
                “જેમ તમે ઉપરના ફોટામાં અમારા તાલીમ કેન્દ્રની ઝાંખી જોઈ શકો છો, અમે ઉત્તમ સાધનો સાથે પ્રાયોગિક શિક્ષણ પૂરું પાડીએ છીએ.”
              </blockquote>
            </div>

          </div>

        </div>
      </section>


      {/* <!-- 4 ▸ CTA REGISTER -------------------------------------------- --> */}
      <section className="bg-glow-warm py-12 md:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
            આજે જ જોડાઈને સ્વનિર્ભર બનો!
          </h2>

          <p className="text-base md:text-lg text-slate-700 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed font-semibold">
            નવી બેચ ટૂંક સમયમાં શરૂ થઈ રહી છે. તમારા ભવિષ્યને સિક્યોર કરવા અથવા કૌશલ્ય શીખવા માટે અત્યારે જ સંપર્ક કરો.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a
              href="https://wa.me/919426062068?text=Join%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-md hover:bg-[#20ba59] transition-all text-sm md:text-base capitalize tracking-wider cursor-pointer"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              વોટ્સએપ દ્વારા જોડાઓ (Join Now)
            </a>
            <a
              href="tel:9426062068"
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-orange-500 to-darkred text-white font-bold rounded-xl hover:shadow-lg hover:shadow-red-500/35 transition-all text-sm md:text-base capitalize tracking-wider cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              સંપર્ક કરો (Call to Register)
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 border-2 border-slate-350 text-slate-700 font-bold rounded-xl hover:bg-slate-100 transition-all text-sm md:text-base cursor-pointer"
            >
              <Mail className="w-5 h-5" />
              ઇમેઇલ દ્વારા પૂછપરછ
            </a>
          </div>

          <div className="mt-10 md:mt-12 text-xxs md:text-xs text-slate-500 font-bold tracking-widest capitalize">
            MANAV KALYAN TRUST • AHMEDABAD / MEHSANA
          </div>

        </div>
      </section>
    </>
  )
}

export default SewingMachineCoursePage
