'use client'
import React, { useState } from 'react'
import {
  Check,
  CheckCircle,
  Shield,
  Phone,
  FileText,
  Heart,
  Users,
  Building,
  Info,
  MapPin,
  Search,
  Sparkles,
  Eye,
  CheckSquare,
  Award,
  Clock,
  FileCheck,
  AlertCircle,
} from 'lucide-react'
import Link from 'next/link'

const GovtSchemesPage = () => {
  const [activeTab, setActiveTab] = useState('swavlamban');

  const tabs = [
    { id: 'swavlamban', name: 'Mahila Swavlamban Yojana', icon: Award, color: 'emerald' },
    { id: 'dikri', name: 'Vhali Dikri Yojana', icon: Heart, color: 'rose' },
    { id: 'safety', name: 'Safety, Sakhi OSC & 181', icon: Shield, color: 'teal' },
    { id: 'pension', name: 'Ganga Swarupa & Welfare', icon: Users, color: 'indigo' },
    { id: 'scans', name: 'Guideline Leaflets', icon: FileText, color: 'slate' }
  ]

  // Documents list for Mahila Swavlamban
  const swavlambanDocs = [
    "Proof of Age (Any one of School Leaving Certificate / Voter ID Card / Medical Certificate)",
    "Submit Aadhar Card",
    "Certificate of Training / Experience / Skill",
    "Quotation for Machinery / Furniture / Raw Material (Submit original and self-attested photocopy)",
    "Photocopy of Ration Card",
    "Proof of Permanent Residence",
    "Annual Income Certificate (Must be issued by Mamlatdar / Taluka Development Officer / Deputy Mamlatdar / Deputy Taluka Development Officer / Extension Officer (Panchayat) / Talati-cum-Mantri (Panchayat). Other certificates will not be accepted)",
    "Caste Certificate from Competent Officer (Mamlatdar / Taluka Development Officer / Social Welfare Officer)",
    "Civil Surgeon Certificate for Specially Abled / Widow Certificate or Specially Abled Identity Card from Social Security",
    "All documents must be submitted self-attested in duplicate",
    "Copy of Bank Passbook"
  ]

  const [activeTab2_WCS, setactiveTab2_WCS] = useState('sankat-mochan')
  const [searchQuery, setSearchQuery] = useState('')

  const schemes = [
    {
      id: 'sankat-mochan',
      name: 'Sankat Mochan Yojana',
      category: 'Financial Assistance',
      icon: AlertCircle,
      color: 'rose',
      docs: [
        "Prescribed application form and passport size photo",
        "Photocopy of Voter ID Card",
        "Photocopy of Ration Card",
        "Photocopy of Aadhar Card",
        "Copy of the first page of bank passbook (or cancelled check)",
        "Proof of applicant's residence (Electricity bill, property tax bill, or rent agreement)",
        "Death certificate of the deceased primary breadwinner (natural or accidental death)",
        "Original annual family income certificate from a competent authority",
        "Official certificate of BPL score between 0 and 20",
        "Proof of age of the deceased person being between 18 and 65 years at the time of death",
        "Age certificates of all children of the applicant (LC or birth certificate)"
      ],
      info: "Assistance scheme to provide immediate relief to the dependent family upon the untimely death of the sole breadwinner of the family."
    },
    {
      id: 'widow-sahay',
      name: 'Widow Sahay (Ganga Swarupa Assistance)',
      category: 'Social Security',
      icon: Users,
      color: 'emerald',
      docs: [
        "Prescribed form and recent passport size photo",
        "Photocopy of Ration Card",
        "Photocopy of Voter ID Card",
        "Photocopy of Aadhar Card",
        "Pedhinamu (family tree / list of heirs) of the applicant's husband",
        "Proof of residence (Bill / Voter ID Card / Aadhar)",
        "Official death certificate of the husband",
        "Talati certificate certifying no remarriage after husband's death",
        "Age certificate of applicant's children (School Leaving Certificate / Birth Certificate)",
        "Age certificate/LC of the applicant (eligibility above 30 years)",
        "Annual family income certificate (according to prescribed income limits)"
      ],
      info: "Regular monthly financial assistance to destitute widows to provide self-reliance and economic security."
    },
    {
      id: 'remarriage-sahay',
      name: 'Ganga Swarupa Remarriage Financial Assistance',
      category: 'Social Security',
      icon: Heart,
      color: 'pink',
      docs: [
        "Copy of approval order for receiving Ganga Swarupa Financial Assistance (Widow Pension)",
        "Marriage Registration Certificate from the Remarriage Registry Office",
        "Official proof of residence/address of the new husband with whom remarried",
        "Joint passport size photos of the remarried couple"
      ],
      info: "Financial incentive for widows wishing to remarry and rehabilitate respectably in society.",
      note: "The application must be submitted along with all supporting documents in the prescribed format within a time limit of 6 (six) months from the date of remarriage."
    },
    {
      id: 'destitute-support',
      name: 'Assistance to Destitute, Elderly and Specially Abled',
      category: 'Social Security',
      icon: Shield,
      color: 'teal',
      docs: [
        "નિયત નમૂનાનું અરજી પત્રક અને પાસપોર્ટ સાઇઝનો ફોટો",
        "Copy of Voter ID Card",
        "Copy of Ration Card",
        "Copy of Aadhar Card",
        "Copy of the first page of bank passbook",
        "રહેઠાણ અંગેનો પુરાવો (લાઇટ બિલ અથવા વેરા બિલ)",
        "Age certificate of the applicant (L.C. or doctor's age certificate)",
        "Annual family income certificate from a competent authority"
      ],
      info: "Monthly allowance for elderly and physically challenged people living alone and helpless in society."
    },
    {
      id: 'vaya-vandan',
      name: 'Vaya Vandan Yojana',
      category: 'Social Security',
      icon: CheckCircle,
      color: 'amber',
      docs: [
        "નિયત નમૂનાનું ફોર્મ અને પાસપોર્ટ સાઇઝનો ફોટો",
        "Copy of Voter ID Card",
        "Copy of Ration Card",
        "Copy of Aadhar Card",
        "Copy of the first page of bank passbook",
        "Proof of applicant's residence (address proof)",
        "Certificate showing the official age of the applicant",
        "Certified family income certificate",
        "Certificate of inclusion in BPL list showing score between 0 and 20"
      ],
      info: "Special life welfare scheme for senior citizens below the poverty line aged above 60 years."
    },
    {
      id: 'caste-cert',
      name: 'Caste Certificate',
      category: 'Certificates / Attestations',
      icon: FileText,
      color: 'indigo',
      docs: [
        "Original School Leaving Certificate (L.C.) of the applicant or Bonafide Certificate mentioning caste",
        "School Leaving Certificate or official caste certificate of any one of the applicant's father, uncle, or grandfather",
        "Photocopy of Ration Card (of Girgadhada or respective taluka)",
        "Photocopy of Aadhar Card",
        "3 recent passport size photos of the applicant"
      ],
      info: "Official certificate identifying Scheduled Caste / Scheduled Tribe or Other Backward Classes."
    },
    {
      id: 'ews-cert',
      name: 'Economically Weaker Sections Certificate (EWS)',
      category: 'Certificates / Attestations',
      icon: Building,
      color: 'cyan',
      docs: [
        "School Leaving Certificate (L.C.) of the applicant",
        "School Leaving Certificate (L.C.) of any one of the applicant's father, uncle, grandfather, or aunt",
        "Copy of Ration Card (with the applicant's name)",
        "Copy of Aadhar Card",
        "Affidavit on stamp paper in the prescribed format",
        "Original annual family income certificate from Mamlatdar or competent authority",
        "Land ownership or immovable property documents (applicable property proof)"
      ],
      info: "EWS certificate for general (unreserved) category families who are economically weak, useful for education and government employment."
    },
    {
      id: 'unreserved-cert',
      name: 'Certificate for Unreserved Categories',
      category: 'Certificates / Attestations',
      icon: CheckSquare,
      color: 'purple',
      docs: [
        "Original School Leaving Certificate (L.C.) of the applicant or Bonafide Certificate showing caste",
        "School Leaving Certificate (L.C.) of any one of the applicant's father, uncle, grandfather, or aunt",
        "Copy of Ration Card (with name mentioned)",
        "Copy of Aadhar Card",
        "2 recent passport size photos"
      ],
      info: "Caste certificate useful for obtaining welfare benefits and scheme loan-subsidies for unreserved categories."
    },
    {
      id: 'income-cert',
      name: 'Income Certificate',
      category: 'Certificates / Attestations',
      icon: FileCheck,
      color: 'violet',
      docs: [
        "Original income certificate with panchnama in the name of the applicant signed by Talati-cum-Mantri",
        "Copy of Ration Card (in which applicant's name must be mentioned)",
        "Photocopy of Aadhar Card or Voter ID Card with photo",
        "Prescribed application form for income certificate filled completely and legibly (with prescribed court fee stamp)",
        "Self-declaration form with proper signature"
      ],
      info: "Official income certificate essential for proving eligibility for educational fee waiver, scholarships, and other schemes."
    }
  ]

  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.info.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activeScheme = schemes.find(s => s.id === activeTab2_WCS) || schemes[0]

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">

      {/* <!-- HERO SECTION --> */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-emerald-900 via-teal-950 to-slate-900 text-white border-b border-teal-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 bg-teal-500/10 backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-teal-400 animate-pulse" />
            <span className="text-sm md:text-base font-bold tracking-wider text-teal-300">
              Women Upliftment and Social Self-Reliance Program
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Implementation of Government Schemes
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-teal-150 max-w-6xl mx-auto mb-8 leading-relaxed font-medium">
            We assist poor and needy women in benefiting from various government schemes. Proper information and 100% free assistance in the application process are provided to eligible women.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/919974025126?text=Join%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:bg-[#20ba59] transition-all text-sm md:text-base tracking-wider cursor-pointer"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              Contact via WhatsApp
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

      {/* <!-- QUICK INFO BAR --> */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 shadow-xs">
        <div className=" mx-auto flex flex-wrap justify-around gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Fee</p>
              <p className="text-base font-bold text-slate-800">100% Free Service and Support</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start border-t md:border-t-0 md:border-x border-slate-100 py-4 md:py-0 md:px-6">
            <div className="p-3 bg-rose-50 text-rose-700 rounded-2xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Beneficiary Eligibility</p>
              <p className="text-base font-bold text-slate-800">જરૂરિયાતમંદ અને નિરાધાર બહેનો</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Service Duration</p>
              <p className="text-base font-bold text-slate-800">Permanent Guidance Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- MAIN GUIDANCE HIGHLIGHT (BELOW HERO & INFO BAR) --> */}
      <section className="px-4 pt-10 pb-4 max-w-7xl mx-auto">
        <div className="bg-linear-to-br from-emerald-600 via-teal-700 to-indigo-900 text-white rounded-3xl p-8 md:p-10 shadow-xl border border-emerald-400/40 relative overflow-hidden flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_50%)] pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />

          <div className="space-y-3 max-w-2xl text-center xl:text-left relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Special Helpdesk Support</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white">
              Need Help and Guidance?
            </h2>
            <p className="text-base md:text-lg text-emerald-50 leading-relaxed font-semibold">
              Get a free verification of what documents are required for any government scheme application or what your eligibility is from our service center.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3 relative z-10">
            <Link
              href="tel:9974025126"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-teal-950 hover:bg-slate-55 transition-all font-extrabold rounded-2xl text-base shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4.5 h-4.5 text-emerald-700" />
              <span>Call: 9426062083</span>
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

      {/* <!-- HORIZONTAL TABS BAR --> */}
      <section className="bg-slate-50 z-20 border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-sm md:text-base whitespace-nowrap transition-all duration-150 cursor-pointer ${isActive
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                >
                  <Icon className="w-4.5 h-4.5 flex-shrink-0" />
                  <span>{tab.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* <!-- TAB CONTENT WRAPPER --> */}
      <section className="py-8 px-4 max-w-7xl mx-auto">

        {/* 1 ▸ MAHILA SWAVLAMBAN YOJANA */}
        {activeTab === 'swavlamban' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">

              {/* Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide">Self-Reliance Scheme</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Mahila Swavlamban Yojana</h2>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl text-center">
                  <p className="text-xxs font-bold uppercase text-slate-400">Maximum Loan Recommendation</p>
                  <p className="text-xl font-black text-emerald-700">Rs. 2,00,000/-</p>
                </div>
              </div>

              {/* Objective */}
              <div className="bg-linear-to-r from-emerald-50/50 to-teal-50/20 p-5 rounded-2xl border border-emerald-100/50 mb-6">
                <h3 className="font-bold text-emerald-900 mb-1 flex items-center gap-2">
                  <Info className="w-4.5 h-4.5" />
                  Main Objective of the Scheme
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  To make women from needy and below-poverty-line families self-reliant by recommending bank loans and providing subsidies to help them secure self-employment.
                </p>
              </div>

              {/* Eligibility Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-slate-200 rounded-2xl p-4 space-y-1 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase">Beneficiary Age Limit</p>
                  <p className="text-base font-bold text-slate-800">18 Years to 65 Years</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-4 space-y-1 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase">Scheme Trades Scope</p>
                  <p className="text-base font-bold text-slate-800">Total 307 different types of businesses/industries</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-4 space-y-2 md:col-span-2 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase">Annual Income Limit</p>
                  <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-800 pt-1">
                    <div>• Rural Area: Rs. 1,20,000/-</div>
                    <div>• Urban Area: Rs. 1,50,000/-</div>
                  </div>
                </div>
              </div>

              {/* Subsidy Scale */}
              <h3 className="font-bold text-base text-slate-900 mb-3">Eligible Subsidy Scale (Subsidy)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 mb-1">General Category Women</p>
                  <p className="text-xl font-bold text-slate-800">30% Subsidy</p>
                  <p className="text-xxs text-slate-500 font-semibold mt-1">Or maximum Rs. 60,000/-</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 mb-1">SC / ST</p>
                  <p className="text-xl font-bold text-slate-800">35% Subsidy</p>
                  <p className="text-xxs text-slate-500 font-semibold mt-1">For eligible women</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 mb-1">Widow or Specially Abled (&gt;40%)</p>
                  <p className="text-xl font-bold text-emerald-700 font-extrabold">40% Subsidy</p>
                  <p className="text-xxs text-emerald-600 font-semibold mt-1">Under special government incentive</p>
                </div>
              </div>

              {/* Application form info */}
              <div className="border border-slate-100 rounded-2xl p-4 flex gap-3.5 bg-slate-50 text-sm mb-6">
                <FileText className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">Application Form and Recommendation Process</p>
                  <p className="text-slate-650 mt-1 leading-relaxed text-sm md:text-base">
                    Mahila Swavlamban Yojanaનું અરજીપત્રક દરેક જિલ્લાની <strong>મહિલા અને બાળ અધિકારીની કચેરીએથી વિના મૂલ્યે</strong> મળશે. અરજી ફોર્મ ભરીને રજૂ કર્યા બાદ, અધિકારીઓ દ્વારા તેની ચકાસણી કરીને બેંકોને લોન માટે ભલામણ મોકલવામાં આવે છે.
                  </p>
                </div>
              </div>

              {/* 11 Documents Checklist */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <FileCheck className="w-5.5 h-5.5 text-emerald-600" />
                  11 Required Documents for Application (Self-Attested in Duplicate)
                </h3>

                <p className="text-xs text-slate-500 mb-4 italic">
                  You can use the list below as a checklist when collecting documents:
                </p>

                <div className="space-y-2">
                  {swavlambanDocs.map((doc, idx) => {
                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer border-slate-200 text-slate-800`}
                      >

                        <span className={`text-sm md:text-base leading-relaxed font-medium`}>
                          ({idx + 1}) {doc}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

            </div>

            {/* Display leaflet */}
            <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm max-w-sm mx-auto w-full">
              <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wider">Related Leaflet Image (Scan Leaflet)</p>
              <div className="rounded-2xl overflow-hidden border border-slate-150 bg-slate-50">

                <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg">
                  <img
                    src="/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg"
                    alt="Mahila Swavlamban Yojana"
                    className="w-full h-auto object-contain mx-auto max-h-[220px]"
                  />
                </Link>

              </div>
            </div>

          </div>
        )}

        {/* 2 ▸ VHALI DIKRI YOJANA */}
        {activeTab === 'dikri' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">

              {/* Title & Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                <div>
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide">Daughter's Welfare and Education</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Vhali Dikri Yojana</h2>
                </div>
                <div className="bg-rose-50 border border-rose-100 px-4 py-2 rounded-2xl text-center">
                  <p className="text-xxs font-bold uppercase text-slate-400">Total Financial Assistance</p>
                  <p className="text-xl font-black text-rose-700">Rs. 1,00,000/-</p>
                </div>
              </div>

              {/* Purpose */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-rose-50/40 border border-rose-100/50 p-4 rounded-2xl text-center">
                  <div className="text-rose-600 text-xl font-black mb-1">૧</div>
                  <p className="text-sm md:text-base font-bold text-slate-700">To increase the birth rate of daughters and encourage female birth</p>
                </div>
                <div className="bg-teal-50/40 border border-teal-100/50 p-4 rounded-2xl text-center">
                  <div className="text-teal-600 text-xl font-black mb-1">૨</div>
                  <p className="text-sm md:text-base font-bold text-slate-700">To reduce the dropout ratio of daughters in education</p>
                </div>
                <div className="bg-emerald-50/40 border border-emerald-100/50 p-4 rounded-2xl text-center">
                  <div className="text-emerald-600 text-xl font-black mb-1">૩</div>
                  <p className="text-sm md:text-base font-bold text-slate-700">To prevent the harmful practice of child marriage</p>
                </div>
              </div>

              {/* Details Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 md:p-6 mb-8 space-y-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Info className="w-5 h-5 text-rose-500" />
                  Eligibility and Criteria Under the Scheme
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-slate-700 font-semibold pl-4 list-disc">
                  <li>The form for this scheme must be filled within <span className="text-rose-700">one year of the birth</span> of the daughter.</li>
                  <li>દંપતીની (પતિ અને પત્નીની સંયુક્ત) Annual Income Limit <span className="text-emerald-700">Rs. 2,00,000/- (બે લાખ) કે તેથી ઓછી</span> હોવી જોઈએ.</li>
                  <li>All daughters among the first three children of the couple are eligible to benefit from this scheme.</li>
                </ul>
              </div>

              {/* Installment Steps - Stepper */}
              <h3 className="font-bold text-lg text-slate-900 mb-6">Eligible Support Installments (Installment Milestones)</h3>

              <div className="relative border-l-2 border-rose-150 ml-4 md:ml-6 space-y-8 mb-8">

                {/* Step 1 */}
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-3.5 top-0.5 bg-rose-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                    ૧
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-base text-slate-900">First Installment - At Primary Admission</h4>
                      <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100 text-rose-750 font-bold text-sm md:text-base">Rs. 4,000/- (Assistance)</span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-1">This financial assistance is eligible when the daughter gets admission in the 1st Standard.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-3.5 top-0.5 bg-rose-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                    ૨
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-base text-slate-900">Second Installment - At Secondary Admission</h4>
                      <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100 text-rose-750 font-bold text-sm md:text-base">Rs. 6,000/- (Assistance)</span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-1">This installment becomes eligible when the daughter enters 9th Standard.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-3.5 top-0.5 bg-emerald-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                    ૩
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-base text-slate-900">Third Installment - Higher Education or Marriage Assistance</h4>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 font-bold text-sm md:text-base">Rs. 1,00,000/- (સહાય)</span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-1">When the daughter completes 18 years, this lump sum amount is given as assistance for her higher education or marriage.</p>
                  </div>
                </div>

              </div>

              {/* Submission Info */}
              <div className="border border-rose-100 bg-rose-50/30 rounded-2xl p-5 text-sm">
                <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-1.5">
                  <Building className="w-4.5 h-4.5" />
                  Where to Submit the Application Form?
                </h4>
                <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                  To benefit from this scheme, you can contact and submit the form at the following locations:
                </p>
                <ul className="mt-2 space-y-1.5 font-bold text-slate-850 text-sm md:text-base">
                  <li>• Rural Level: At the Gram Panchayat through VCE (Village Computer Entrepreneur)</li>
                  <li>• Taluka Level: At the Mamlatdar Office</li>
                  <li>• District Level: At the District Women and Child Officer's Office</li>
                </ul>
              </div>

            </div>

            {/* Display leaflet */}
            <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm max-w-sm mx-auto w-full">
              <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wider">Related Leaflet Image (Scan Leaflet)</p>
              <div className="rounded-2xl overflow-hidden border border-slate-150 bg-slate-50">

                <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/vhali-dikri-Yojna.jpeg">
                  <img
                    src="/images/courses/Benifite-to-woman-by-gevenments-schemes/vhali-dikri-Yojna.jpeg"
                    alt="Vhali Dikri Yojana"
                    className="w-full h-auto object-contain mx-auto max-h-[220px]"
                  />
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* 3 ▸ SAFETY, SAKHI OSC AND 181 ABHAYAM */}
        {activeTab === 'safety' && (
          <div className="space-y-6 animate-fadeIn">

            {/* Sakhi One Stop Center */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="p-3 bg-rose-100 text-rose-700 rounded-xl">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-rose-50 text-rose-750 text-xxs font-extrabold uppercase">Immediate Support Center</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Sakhi - One Stop Centre (OSC)</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                Sakhi One Stop Centre (OSC) scheme is operational to provide immediate shelter and integrated services to women/girls affected by violence from a single location. These centres are operational in all 33 districts of Gujarat.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm md:text-base">Key Services Provided:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">Immediate medical treatment for girls/women affected by violence.</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">Short-term shelter and security for women affected by violence.</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">Legal advice and proper guidance to obtain protection against violence.</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">Police assistance and appropriate counseling services.</span>
                </div>
              </div>
            </div>

            {/* Police Station Based Support Centre (PBSC) */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="p-3 bg-teal-100 text-teal-700 rounded-xl">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-teal-50 text-teal-750 text-xxs font-extrabold uppercase">Support Service Center</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Police Station Based Support Centre (PBSC)</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                The main objective of this center is to enable women victims of domestic violence, harassment, and social inequality to make decisions confidently and provide institutional support.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm md:text-base">Main Procedures and Welfare Goals:</h3>
              <div className="space-y-3.5 text-sm md:text-base text-slate-700 font-semibold">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-800">1. Problem Solving through Counseling</p>
                  <p className="text-slate-600 mt-1 text-xs leading-relaxed">
                    Based on the complaint of the victim woman, systematic counseling is conducted with both parties to make sincere efforts to resolve the problem by mutual consent.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-800">2. Legal Guidance and Police Complaint Assistance</p>
                  <p className="text-slate-600 mt-1 text-xs leading-relaxed">
                    If the problem is not resolved through counseling, providing detailed information about legal rights and laws to the victim, and complete legal assistance in filing a police complaint if necessary.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-800">3. Structural Coordination</p>
                  <p className="text-slate-600 mt-1 text-xs leading-relaxed">
                    Establish systematic coordination with various government and non-governmental welfare structures regarding the specific problem of the woman and its permanent solution.
                  </p>
                </div>
              </div>
            </div>

            {/* 181 Abhayam Helpline */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-red-500/5 rounded-bl-full flex items-center justify-center text-red-500">
                <Phone className="w-8 h-8 animate-wiggle" />
              </div>

              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="p-3 bg-red-50 text-red-650 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-xxs font-extrabold uppercase">24x7 Helpline</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Abhayam - 181 Women Helpline</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                The 181 Abhayam Women Helpline has been launched by the government to ensure that women affected by various types of violence receive all information, rescue assistance, and proper follow-up in immediate emergencies.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Police Action Desk
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    Efforts are made to prevent telephonic or online harassment of women, youth, and girls by giving legal warnings/notices to the concerned person.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Abhayam Mobile Application
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    A specially designed app for women's safety containing a GPS tracker. In times of emergency, shaking the phone will automatically place a call and the rescue van will rush to the location.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 4 ▸ OTHER SCHEMES (GANGA SWARUPA, ETC) */}
        {activeTab === 'pension' && (
          <div className="space-y-6 animate-fadeIn">

            {/* Ganga Swarupa Financial Assistance */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xxs font-extrabold uppercase">Lifelong Pension Support</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Ganga Swarupa Financial Assistance Scheme</h2>
                  </div>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-xl text-center">
                  <p className="text-xxs text-slate-500 font-bold uppercase">Monthly Financial Assistance</p>
                  <p className="text-base font-black text-emerald-700">Rs. 1,250/-</p>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                With the aim of providing social and economic security to Ganga Swarupa (widow) sisters, monthly assistance is deposited directly into their post office or nationalized bank accounts by the government (through DBT).
              </p>

              <h3 className="font-bold text-slate-950 mb-3 text-sm md:text-base">Important Recent Amendments (Effective from 01-04-2019):</h3>
              <div className="space-y-3.5 mb-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-700 font-bold">Assistance will be lifelong: The rule under which this assistance was discontinued upon the son turning 21 years of age has now been abolished.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-700 font-bold">માસિક વધારો: પેન્શનની રકમ વધારીને દર મહિને Rs. 1,250/- કરવામાં આવેલ છે.</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">કુટુંબની Annual Income Limit:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm md:text-base font-extrabold text-slate-700">
                  <div>• Rural Area: Rs. 1,20,000/-</div>
                  <div>• Urban Area: Rs. 1,50,000/-</div>
                </div>
              </div>
            </div>

            {/* Ganga Swarupa Remarriage Support */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-rose-50 text-rose-600 rounded-xl">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xxs font-extrabold uppercase">Remarriage Financial Incentive</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Ganga Swarupa Remarriage Financial Assistance Scheme</h2>
                  </div>
                </div>
                <div className="bg-rose-50 px-4 py-2 rounded-xl text-center">
                  <p className="text-xxs text-slate-500 font-bold uppercase">Total Assistance Incentive</p>
                  <p className="text-base font-black text-rose-700">Rs. 50,000/-</p>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                મહિલા અને બાળ વિકાસ વિભાગની આ Main Objective of the Scheme ગંગા સ્વરૂપા વિધવા સહાય મેળવતી બહેનોને પુનઃલગ્ન કરી નવું ગૃહસ્થ જીવન શરૂ કરવા માટે આર્થિક સહાય આપવાનો છે.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Beneficiary Age Limit</h4>
                  <p className="text-sm md:text-base font-bold text-slate-800">Women from 18 to 50 years old</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">Payment Method of Assistance</h4>
                  <p className="text-xs leading-relaxed text-slate-700 font-bold">
                    • Through DBT to savings account: Rs. 25,000/-<br />
                    • National Savings Certificate (NSC): Rs. 25,000/-
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-amber-500 bg-amber-50 text-amber-900 p-4 rounded-r-xl text-sm md:text-base font-semibold">
                <p className="font-bold flex items-center gap-1.5 mb-1">
                  <AlertCircle className="w-4.5 h-4.5 text-amber-600" />
                  Application Process:
                </p>
                <p>
                  Application forms are available on the website <Link href="http://wcd.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-emerald-800">wcd.gujarat.gov.in</Link>. Forms must be filled and submitted to the concerned Women and Child Officer's office <strong>within 6 months</strong> from the date of remarriage.
                </p>
              </div>
            </div>

            {/* Shelter Home / Nari Sanrakshan Gruh */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="p-3 bg-teal-50 text-teal-700 rounded-xl">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 text-xxs font-extrabold uppercase">Shelter Service</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Shelter Home / Nari Sanrakshan Gruh</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                Shelter homes are operational across Gujarat to provide shelter to destitute women above 18 years and their children who are facing domestic violence.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm">Welfare Services Offered:</h3>
              <ul className="space-y-2.5 text-sm md:text-base text-slate-700 font-semibold list-disc pl-5">
                <li>Provide safe shelter and security to women victims of violence and their children.</li>
                <li>Periodic free health check-ups and linkage with vocational training/development activities for sheltered women.</li>
                <li>Organization of counseling sessions by expert counselors to help overcome the trauma.</li>
              </ul>
            </div>

            {/* Beti Bachao - Beti Padhao */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="p-3 bg-rose-50 text-rose-700 rounded-xl">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xxs font-extrabold uppercase">National Campaign</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">Beti Bachao - Beti Padhao</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                A national scheme launched by the Honorable Prime Minister in 2015 from Panipat, Haryana, with the aim of preventing imbalance against daughters in society and accelerating the development of daughters.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm">Main Indicators and Goals of the Scheme:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-slate-700 font-semibold">
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• Nationwide promotion of female births.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• Prevention of anemia and low birth weight among daughters.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• Activating the community towards girl child education and birth rate.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• Ensuring 100% immunization of all newborn daughters.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• Safety of daughters in school and protection under POCSO Act-2012.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• Ensuring separate toilets for girls in schools.</div>
              </div>
            </div>

          </div>
        )}

        {/* 5 ▸ ORIGINAL LEAFLET SCANS */}
        {activeTab === 'scans' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wide">Official Handouts</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">Guideline Leaflets (Scan Copies)</h2>
                <p className="text-slate-500 text-sm md:text-base mt-1">Original scans of official information leaflets published by the District Women and Child Development Office are provided here.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                <div className="border border-slate-200 p-4 rounded-2xl bg-slate-50">
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">List of all schemes details leaflet - 1</p>
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-1">

                    <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/List-of-all-yojana-with-detail-01.jpeg">
                      <img
                        src="/images/courses/Benifite-to-woman-by-gevenments-schemes/List-of-all-yojana-with-detail-01.jpeg"
                        alt="Government Schemes Flyer 1"
                        className="w-full h-auto max-h-[160px] object-contain mx-auto"
                      />
                    </Link>

                  </div>
                </div>

                <div className="border border-slate-200 p-4 rounded-2xl bg-slate-50">
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">List of all schemes details leaflet - 2</p>
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-1">

                    <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/list-of-all-yojna-with-detail-02.jpeg">
                      <img
                        src="/images/courses/Benifite-to-woman-by-gevenments-schemes/list-of-all-yojna-with-detail-02.jpeg"
                        alt="Government Schemes Flyer 2"
                        className="w-full h-auto max-h-[160px] object-contain mx-auto"
                      />
                    </Link>

                  </div>
                </div>

                <div className="border border-slate-200 p-4 rounded-2xl bg-slate-50">
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">Mahila Swavlamban Yojana પત્રક</p>
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-1">

                    <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg">
                      <img
                        src="/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg"
                        alt="Mahila Swavlamban Flyer"
                        className="w-full h-auto max-h-[160px] object-contain mx-auto"
                      />

                    </Link>

                  </div>
                </div>

                <div className="border border-slate-200 p-4 rounded-2xl bg-slate-50">
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">Vhali Dikri Yojana પત્રક</p>
                  <div className="rounded-xl overflow-hidden border border-slate-200 bg-white p-1">
                    <Link
                      href="/images/courses/Benifite-to-woman-by-gevenments-schemes/vhali-dikri-Yojna.jpeg">
                      <img
                        src="/images/courses/Benifite-to-woman-by-gevenments-schemes/vhali-dikri-Yojna.jpeg"
                        alt="Vhali Dikri Flyer"
                        className="w-full h-auto max-h-[160px] object-contain mx-auto"
                      />
                    </Link>



                  </div>
                </div>

              </div>
            </div>
          </div>
        )
        }

      </section >

      {/* <!-- OFFICE ADDRESS AND INFO BAR --> */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-rose-50 text-rose-700 rounded-2xl flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Office Address</p>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                Government Housing, D-Type Quarters, No. 301 to 304, Opposite District Government Library, Vastrapur, Ahmedabad.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-6">
            <div className="p-3.5 bg-orange-50 text-orange-700 rounded-2xl flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Application Procedure</p>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                The original file, along with relevant documents attached to the prescribed form, must be submitted to the ATVT branch.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-emerald-50 text-emerald-700 rounded-2xl flex-shrink-0">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Guidance Service</p>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                100% free assistance by Manav Kalyan Trust in collecting all necessary documents and obtaining guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- SEARCH AND LEAFLET NOTICE BOARD --> */}
      <section className="px-4 py-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Left Part: Interactive Document Directory */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-black text-slate-900">Required Documents Directory</h2>
                <p className="text-slate-500 text-sm font-semibold mt-1">Checklist of documents to be submitted for various schemes</p>
              </div>
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search scheme..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-55 border border-slate-300 rounded-2xl py-3 pl-10 pr-4 text-sm font-semibold focus:outline-none focus:border-rose-500 transition-colors"
                />
                <Search className="w-5 h-5 text-slate-400 absolute left-3 top-3.5" />
              </div>
            </div>

            {/* List of filtered schemes */}
            {filteredSchemes.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-slate-200 rounded-2xl">
                <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <p className="text-slate-500 font-bold">No matching schemes found.</p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6">

                {/* Scheme Navigation Sidebar List */}
                <div className="w-full md:w-1/3 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                  {filteredSchemes.map((scheme) => {
                    const SchemeIcon = scheme.icon
                    const isActive = activeTab2_WCS === scheme.id
                    return (
                      <button
                        key={scheme.id}
                        onClick={() => setactiveTab2_WCS(scheme.id)}
                        className={`flex items-center gap-3 w-full text-left px-4 py-3.5 rounded-2xl font-bold text-sm transition-all border whitespace-nowrap md:whitespace-normal cursor-pointer ${isActive
                          ? 'bg-rose-600 text-white border-rose-600 shadow-md shadow-rose-600/15'
                          : 'bg-white hover:bg-slate-50 text-slate-650 border-slate-250/70'
                          }`}
                      >
                        <SchemeIcon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-rose-600'}`} />
                        <span className="truncate md:line-clamp-2 md:whitespace-normal">{scheme.name}</span>
                      </button>
                    )
                  })}
                </div>

                {/* Checklist Main Content Panel */}
                <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-slate-100 md:pl-6 pt-6 md:pt-0">
                  <div className="space-y-4">
                    {/* Header Info */}
                    <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-slate-100">
                      <div>
                        <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xxs font-extrabold tracking-wide uppercase">
                          {activeScheme.category}
                        </span>
                        <h3 className="text-xl md:text-2xl font-black text-slate-900 mt-1">{activeScheme.name}</h3>
                      </div>
                      <button
                        onClick={() => resetChecklist(activeScheme.id)}
                        className="text-xs font-bold text-slate-450 hover:text-rose-600 transition-colors"
                      >
                        Reset Checklist
                      </button>
                    </div>

                    <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                      {activeScheme.info}
                    </p>

                    {activeScheme.note && (
                      <div className="bg-orange-50 border border-orange-200 text-orange-850 p-4 rounded-2xl flex gap-3 text-xs md:text-sm font-semibold">
                        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <p>{activeScheme.note}</p>
                      </div>
                    )}

                    {/* Checkbox Checklist */}
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Documents to be submitted:</p>
                      <div className="space-y-2">
                        {activeScheme.docs.map((doc, idx) => {

                          return (
                            <div
                              key={idx}
                              className={`p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 cursor-pointer bg-rose-50/40 border-rose-200 text-slate-800 shadow-xs
                                }`}
                            >
                              <span className="text-sm md:text-base leading-relaxed font-semibold">
                                {`${idx + 1}.`}
                              </span>
                              <span className={`text-sm md:text-base leading-relaxed font-semibold`}>
                                {doc}
                              </span>
                            </div>
                          )
                        })}
                      </div>
                    </div>

                    {/* Help Note */}
                    <div className="pt-4 border-t border-slate-100 text-xxs md:text-xs text-slate-500 font-bold flex items-center gap-1.5">
                      <Info className="w-4 h-4 text-slate-400" />
                      <span>Two copies of all documents must be submitted, self-attested.</span>
                    </div>

                  </div>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* Right Part: Image Leaflet View and Contact Helpline */}
        <div className="lg:col-span-4 space-y-6">

          {/* Visual Notice Board Panel */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-sm text-center">
            <h3 className="text-base font-black text-slate-900 mb-3 flex items-center justify-center gap-2">
              <Eye className="w-5 h-5 text-rose-600" />
              Official Notice Board Photo
            </h3>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative group mb-4">
              <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/district-women-child-officer-schemes.jpg" target='_blank'>
                <img
                  src="/images/courses/Benifite-to-woman-by-gevenments-schemes/district-women-child-officer-schemes.jpg"
                  alt="District Women and Child Officer's Office Ahmedabad Board"
                  className="w-full h-auto object-cover object-top max-h-[350px] transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

            </div>

            <p className="text-xs text-slate-550 leading-relaxed font-semibold">
              The information provided on this page is taken from the official board placed on the notice board of the Ahmedabad office.
            </p>
          </div>

          {/* Manav Kalyan Trust Helpline */}
          <div className="bg-linear-to-br from-rose-600 to-orange-600 text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
            <h3 className="text-xl font-black mb-3">Free Helpline and Assistance</h3>
            <p className="text-rose-100 text-sm leading-relaxed mb-6 font-semibold">
              Contact us for free assistance on how to obtain or fill the application form, and what things to consider when getting an affidavit.
            </p>
            <div className="space-y-3">
              <Link
                href="https://wa.me/919974025126?text=Scheme%20Assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 py-3.5 bg-white text-rose-900 font-extrabold rounded-2xl text-sm hover:bg-slate-50 transition-colors cursor-pointer w-full text-center shadow-xs"
              >
                <img
                  src="/icons/whatsapp-color-svgrepo-com.svg"
                  alt="WhatsApp"
                  className="w-5 h-5 object-contain"
                />
                WhatsApp Helpdesk
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 py-3 border border-white/40 text-white font-bold rounded-2xl text-xs hover:bg-white/10 transition-colors w-full text-center"
              >
                Fill Contact Form
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* <!-- OFFICIAL COORDINATION PARTNER BANNER --> */}
      < section className="bg-linear-to-br from-teal-50 to-emerald-50 py-12 px-4 border-y border-teal-100" >
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-teal-800 font-bold uppercase tracking-wider text-sm md:text-base">Scheme Coordinator and Management Information</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-normal">
            In collaboration with "Commissioner Shri Women and Child Development Office"
          </h2>
          <p className="text-sm font-bold text-slate-700 max-w-xl mx-auto">
            District Multi-purpose Women Welfare Center, Managed by - <strong>Manav Kalyan Trust</strong>
          </p>
          <div className="bg-white border border-teal-100 p-5 rounded-2xl max-w-2xl mx-auto shadow-xs text-sm md:text-base text-slate-650 space-y-1.5 font-bold">
            <p className="text-slate-800 font-extrabold">Office Address:</p>
            <p> 427, Klasagar Shopping Mall, Opposite Saibaba Temple, Sattadhar Cross Roads, Ghatlodia, Ahmedabad - 380061</p>
            <div className="pt-2 flex flex-wrap justify-center gap-4 text-emerald-800">
              <span>• Mob. : 9426062083</span>
              <span>• Managing Trustee : Savitriben Patel</span>
            </div>
          </div>
        </div>
      </section >

      {/* <!-- CALL TO ACTION (CTA) --> */}
      < section className="py-16 md:py-20 px-4 text-center bg-white" >
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            Are you a beneficiary of any of these schemes?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Information about schemes for women is provided at our center. Contact us today for filling appropriate forms, collecting documents, and proper representation in government offices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 w-full">
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
      </section >

    </div >
  )
}

export default GovtSchemesPage
