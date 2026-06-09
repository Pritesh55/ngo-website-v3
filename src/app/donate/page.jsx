'use client'
import React, { useState } from 'react'
import { Heart, Building, Globe, Copy, Check, MapPin, Mail, Phone, ShieldCheck, Landmark } from 'lucide-react'

const DonatePage = () => {
  const [copiedText, setCopiedText] = useState('')

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(''), 2000)
  }

  const bankDetailsIndia = [
    { label: "Name of the Account", value: "MANAV KALYAN TRUST AHMEDABAD A/C MPWWC SABARMATI CENTRE" },
    { label: "Account Number", value: "02130110003459", copyable: true },
    { label: "IFSC Code", value: "UCBA0000213", copyable: true },
    { label: "Name of the Bank", value: "UCO BANK NAVARANGPURA (0213)" },
    { label: "Bank Address", value: "GROUND FLR, UCO BHAVAN ASHRAM ROAD,NAVARANGPURA, AHMEDABAD GUJARAT-380009" }
  ]

  const bankDetailsOverseas = [
    { label: "Name of the Account", value: "MANAV KALYAN TRUST" },
    { label: "Account Number", value: "40676517726", copyable: true },
    { label: "IFSC Code", value: "SBIN0000691", copyable: true },
    { label: "Name of the Bank", value: "STATE BANK OF INDIA NEW DELHI MAIN BRANCH - (00691)" },
    { label: "Bank Address", value: "N. D. MAIN BRANCH 11, PARLIAMENT STREET NEW DELHI, NCT OF DELHI 110001 Tel: 11 23374140" }
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center px-4 py-20 bg-linear-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-100/50 backdrop-blur-xs">
            <Heart className="w-4 h-4 text-orange-700 fill-orange-700/20" />
            <span className="text-xs font-bold text-orange-700 tracking-wider">SUPPORT US (મદદ કરો)</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-5 leading-tight">
            Empower Communities Through
            <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent"> Your Generosity</span>
          </h1>

          <p className="text-base md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed font-semibold">
            તમારું દાન અમારા મહિલા સશક્તિકરણ, વ્યવસાયિક તાલીમ અને ગ્રામીણ સહાયતા કાર્યક્રમોને નવી ઊંચાઈ આપશે.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Exemption Alert Banner */}
        <div className="mb-12 max-w-4xl mx-auto bg-emerald-50 border border-emerald-200 rounded-2xl p-5 flex gap-4 items-center shadow-xs">
          <div className="p-2.5 bg-emerald-100 rounded-xl text-emerald-700 flex-shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm md:text-base">Tax Exemption Exclusively under 80(G)</h3>
            <p className="text-xs md:text-sm text-slate-650 font-semibold mt-0.5">
              All donations sent to Manav Kalyan Trust are exempted under section 80(G) of the Income Tax Act of 1961.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">

          {/* Column 1: India Donations */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs flex-1 hover:border-orange-350 hover:shadow-lg transition-all duration-300">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-orange-100 text-orange-700 rounded-2xl">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block text-xxs font-bold text-orange-600 uppercase tracking-widest bg-orange-50 px-2 py-0.5 rounded-md mb-1">
                    Domestic
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">Donation Within India</h2>
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Direct Bank Transfer</h3>
              <div className="space-y-4 mb-8">
                {bankDetailsIndia.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-2.5 border-b border-slate-100 gap-1 text-sm">
                    <span className="text-slate-500 font-semibold">{item.label}</span>
                    <div className="justify-between max-w-1/2 sm:text-rightp-3.5 rounded-xl transition-all duration-150 flex items-start gap-3 cursor-pointer bg-white hover:bg-slate-50">
                      <span className="font-bold text-slate-800">{item.value}</span>
                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, `in-${item.label}`)}
                          className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                          title={`Copy ${item.label}`}
                        >
                          {copiedText === `in-${item.label}` ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Cheque / DD Details */}
              <div className="bg-orange-50/50 border border-orange-100 rounded-2xl p-5 md:p-6">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <Mail className="w-4 h-4 text-orange-700" />
                  By Cheque / DD (ટપાલ દ્વારા)
                </h4>
                <p className="text-xs md:text-sm text-slate-700 font-semibold mb-4 leading-relaxed">
                  Drawn in favour of <strong className="text-slate-900">"Manav Kalyan Trust"</strong> and mail it to the following address:
                </p>
                <div className="space-y-4 text-xs md:text-sm text-slate-600 font-semibold leading-relaxed pl-2 border-l-2 border-orange-200">
                  <p>
                    <strong className="text-slate-800">MANAV KALYAN TRUST</strong><br />
                    427 - 4th floor, Kalasagar Shopping Mall,<br />
                    Opp. Saibaba Temple, Near Satadhar cross road,<br />
                    Ghatlodia, Ahmedabad - 380061, Gujarat (India)
                  </p>
                  <div className="space-y-1 pt-2 border-t border-orange-100/50">
                    <p className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-450" />
                      Mo: 9974025126
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-slate-450" /> mktahmedabad1986@gmail.com / psavitri13@yahoo.com
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Column 2: Overseas Donations */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-xs flex-1 hover:border-blue-350 hover:shadow-lg transition-all duration-300">

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="p-3 bg-blue-100 text-blue-700 rounded-2xl">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <span className="inline-block text-xxs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md mb-1">
                    International
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-slate-900">For Overseas Donors</h2>
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Banking Details (FCRA Account)</h3>
              <div className="space-y-4 mb-8">
                {bankDetailsOverseas.map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row justify-between sm:items-center py-2.5 border-b border-slate-100 gap-1 text-sm">
                    <span className="text-slate-500 font-semibold">{item.label}</span>
                    <div className="flex items-center gap-2 justify-between max-w-1/2 sm:text-right">
                      <span className="font-bold text-slate-800">{item.value}</span>
                      {item.copyable && (
                        <button
                          onClick={() => handleCopy(item.value, `os-${item.label}`)}
                          className="p-1 hover:bg-slate-100 rounded text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
                          title={`Copy ${item.label}`}
                        >
                          {copiedText === `os-${item.label}` ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compliance & Regulation Details */}
              <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 md:p-6">
                <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Compliance &amp; Legitimacy
                </h4>
                <p className="text-xs md:text-sm text-slate-700 font-semibold mb-3 leading-relaxed">
                  Registered under Bombay Public trust Act - 1950 (Regd No. E - 2943/Mehsana, Date: 29-11-1986).
                </p>

                <p className="font-bold text-slate-900 mb-3 flex items-center gap-2 text-sm md:text-base">
                  Income – Tax exemption
                </p>
                <div className="space-y-3 pt-3 border-t border-blue-100/50 text-xs md:text-sm font-semibold ">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <div className="flex flex-col gap-y-1">
                      <strong>U/S 12AA of the I.T. Act , 1961 :</strong>
                      <span className="text-base text-green-600 font-semibold">AAATM7981LE20214 (Dated: 28-05-2021)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <div className="flex flex-col gap-y-1">
                      <strong>U/S 80G (5) of the I.T. Act , 1961 :</strong>
                      <span className="text-base text-green-600 font-semibold">AAATM7981LF20214 (Date: 01-06-2021)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <div className="flex flex-col gap-y-1">
                      <strong>FCRA Registered :</strong>
                      <span className="text-base text-green-600 font-semibold">FCRA Regd No: 041910337 (Date: 20-07-2006)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-700 font-bold">•</span>
                    <div className="flex flex-col gap-y-1">
                      <strong>Registration number (National CSR Portal) :</strong>
                      <span className="text-base text-green-600 font-semibold">CSR00009140</span>
                    </div>
                  </div>
                  <p className="flex items-start gap-2 mt-12 mb-4">
                    <span className="text-blue-700 font-normal">•</span>
                    <span>Work spread over Gujarat as a leading NGO implementing Various project, collaboration with
                      Various Department, Different Target Group like Women, Children, people living below Poverty
                      line, Salt Workers, Weaker section, special focus on natural calamities affected population like
                      Earthquake, Cyclone, Tsunami and riots. </span>
                  </p>


                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default DonatePage
