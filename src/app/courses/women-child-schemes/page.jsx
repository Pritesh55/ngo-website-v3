'use client'
import React, { useState } from 'react'
import {
  CheckCircle,
  Award,
  Shield,
  Phone,
  Mail,
  FileText,
  Heart,
  Users,
  Building,
  AlertCircle,
  FileCheck,
  Check,
  ChevronRight,
  Info,
  MapPin,
  Search,
  Sparkles,
  Printer,
  Eye,
  CheckSquare
} from 'lucide-react'
import Link from 'next/link'

const WomenChildSchemesPage = () => {
  const [activeTab, setActiveTab] = useState('sankat-mochan')
  const [searchQuery, setSearchQuery] = useState('')

  const schemes = [
    {
      id: 'sankat-mochan',
      name: 'સંકટ મોચન યોજના',
      category: 'આર્થિક સહાય',
      icon: AlertCircle,
      color: 'rose',
      docs: [
        "નિયત નમૂનાનું અરજી ફોર્મ અને પાસપોર્ટ સાઇઝનો ફોટો",
        "ચૂંટણીકાર્ડની ઝેરોક્ષ નકલ",
        "રેશનકાર્ડની ઝેરોક્ષ નકલ",
        "આધારકાર્ડની ઝેરોક્ષ નકલ",
        "બેંક પાસબુકના પ્રથમ પાનાની નકલ (અથવા કેન્સલ ચેક)",
        "અરજદારના રહેઠાણ અંગેનો પુરાવો (લાઇટ બિલ, વેરા બિલ અથવા ભાડા કરાર)",
        "મૃત્યુ પામનાર મુખ્ય કમાનાર વ્યક્તિનો કુદરતી કે અકસ્માતથી મૃત્યુ થયા અંગેનો મરણનો દાખલો",
        "કુટુંબની વાર્ષિક આવકનો સક્ષમ અધિકારીનો અસલ દાખલો",
        "બી.પી.એલ. (BPL) સ્કોર ૦ થી ૨૦ અંગેનો સત્તાવાર દાખલો",
        "મૃત્યુ પામનાર વ્યક્તિની ઉંમર મરણ વખતે ૧૮ થી ૬૫ વર્ષની હોવા અંગેનો પુરાવો",
        "અરજદારના તમામ બાળકોની ઉંમરના પ્રમાણપત્રો (LC અથવા જન્મ તારીખનો દાખલો)"
      ],
      info: "કુટુંબના એકમાત્ર કમાનાર સભ્યનું અકાળે અવસાન થતાં તેના આશ્રિત કુટુંબને તાત્કાલિક રાહત આપવા માટે સહાય યોજના."
    },
    {
      id: 'widow-sahay',
      name: 'વિધવા સહાય (ગંગા સ્વરૂપા સહાય)',
      category: 'સામાજિક સુરક્ષા',
      icon: Users,
      color: 'emerald',
      docs: [
        "નિયત નમૂનાનું ફોર્મ અને તાજો પાસપોર્ટ ફોટો",
        "રેશન કાર્ડની ઝેરોક્ષ નકલ",
        "ચૂંટણીકાર્ડની ઝેરોક્ષ નકલ",
        "આધારકાર્ડની ઝેરોક્ષ નકલ",
        "અરજદારના પતિનું પેઢીનામું (વારસદારોની ચકાસણી માટે)",
        "રહેઠાણ અંગેનો પુરાવો (બીલ / ચૂંટણી કાર્ડ / આધાર)",
        "પતિના અવસાનનો સરકારી મરણનો દાખલો",
        "પતિના અવસાન બાદ પુનઃ લગ્ન કર્યા નથી તે અંગેનું તલાટીનું પ્રમાણપત્ર",
        "અરજદારના બાળકોના ઉંમરનું પ્રમાણપત્ર (શાળા છોડ્યાનું પ્રમાણપત્ર / જન્મનો દાખલો)",
        "અરજદારની પોતાની ઉંમરનું પ્રમાણપત્ર / એલ.સી. (૩૦ વર્ષથી વધુ ઉંમરની પાત્રતા)",
        "કુટુંબની વાર્ષિક આવકનો દાખલો (નિયત આવક મર્યાદા અનુસાર)"
      ],
      info: "નિરાધાર વિધવા બહેનોને આત્મનિર્ભરતા અને આર્થિક સલામતી આપવા માટે માસિક નિયમિત નાણાકીય સહાય."
    },
    {
      id: 'remarriage-sahay',
      name: 'ગંગા સ્વરૂપા પુનઃલગ્ન આર્થિક સહાય',
      category: 'સામાજિક સુરક્ષા',
      icon: Heart,
      color: 'pink',
      docs: [
        "ગંગા સ્વરૂપા આર્થિક સહાય યોજના (વિધવા સહાય) મેળવતા હોવા અંગેનો મંજુરી હુકમની નકલ",
        "પુનઃલગ્ન નોંધણી કચેરીનું મેરેજ રજીસ્ટ્રેશન સર્ટિફિકેટ (પ્રમાણપત્ર)",
        "જે વ્યક્તિ સાથે પુનઃલગ્ન થયેલ છે તે નવા પતિના રહેઠાણ/સરનામા અંગેનો સત્તાવાર પુરાવો",
        "પુનઃલગ્ન કરનાર દંપતિના સંયુક્ત પાસપોર્ટ સાઇઝના ફોટા"
      ],
      info: "પુનઃલગ્ન કરીને સમાજમાં ફરીથી સન્માનપૂર્વક પુનઃવસન કરવા ઈચ્છતી બહેનો માટે નાણાકીય પ્રોત્સાહન.",
      note: "પુનઃલગ્ન કર્યાના દિવસથી ૬ (છ) માસની સમય મર્યાદામાં નિયત નમૂનામાં તમામ આધાર પુરાવા સહિત અરજી કરવાની રહેશે."
    },
    {
      id: 'destitute-support',
      name: 'નિરાધાર, વૃદ્ધ તથા અપંગોને સહાય',
      category: 'સામાજિક સુરક્ષા',
      icon: Shield,
      color: 'teal',
      docs: [
        "નિયત નમૂનાનું અરજી પત્રક અને પાસપોર્ટ સાઇઝનો ફોટો",
        "ચૂંટણીકાર્ડની નકલ",
        "રેશનકાર્ડની નકલ",
        "આધારકાર્ડની નકલ",
        "બેંક પાસબુકના પ્રથમ પાનાની નકલ",
        "રહેઠાણ અંગેનો પુરાવો (લાઇટ બિલ અથવા વેરા બિલ)",
        "અરજદારની ઉંમર પુરવાર કરતું પ્રમાણપત્ર (L.C. અથવા ડૉક્ટરનું વય પ્રમાણપત્ર)",
        "કુટુંબની વાર્ષિક આવકનો સક્ષમ સત્તાધિકારીનો દાખલો"
      ],
      info: "સમાજમાં એકલા અટૂલા અને અસહાય રહેતા વૃદ્ધો અને શારીરિક વિકલાંગતા ધરાવતા લોકો માટે માસિક ભથ્થું."
    },
    {
      id: 'vaya-vandan',
      name: 'વય વંદન યોજના',
      category: 'સામાજિક સુરક્ષા',
      icon: CheckCircle,
      color: 'amber',
      docs: [
        "નિયત નમૂનાનું ફોર્મ અને પાસપોર્ટ સાઇઝનો ફોટો",
        "ચૂંટણીકાર્ડની નકલ",
        "રેશનકાર્ડની નકલ",
        "આધારકાર્ડની નકલ",
        "બેંક પાસબુકના પ્રથમ પાનાની નકલ",
        "અરજદારના રહેઠાણ અંગેનો પુરાવો (સરનામાની સાબિતી)",
        "અરજદારની સત્તાવાર વય દર્શાવતું પ્રમાણપત્ર",
        "કુટુંબની આવકનો પ્રમાણિત દાખલો",
        "બી.પી.એલ. (BPL) યાદીમાં સમાવેશ હોવા અંગેનો સ્કોર ૦ થી ૨૦ નો દાખલો"
      ],
      info: "૬૦ વર્ષથી વધુ ઉંમરના ગરીબી રેખા હેઠળના વરિષ્ઠ નાગરિકો માટેની વિશેષ જીવન કલ્યાણ યોજના."
    },
    {
      id: 'caste-cert',
      name: 'જાતિ પ્રમાણપત્ર (Caste Certificate)',
      category: 'દાખલા / પ્રમાણપત્રો',
      icon: FileText,
      color: 'indigo',
      docs: [
        "અરજદારની શાળાનું અસલ શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.) અથવા જાતિના ઉલ્લેખવાળું બોનાફાઇડ પ્રમાણપત્ર",
        "અરજદારના પિતા, કાકા, અથવા દાદા પૈકી કોઈ એકનું શાળા છોડ્યાનું પ્રમાણપત્ર અથવા સત્તાવાર જાતિનો દાખલો",
        "રેશનકાર્ડની ઝેરોક્ષ નકલ (ગીરગઢડા કે સંબંધિત તાલુકાનું)",
        "આધારકાર્ડની ઝેરોક્ષ નકલ",
        "અરજદારના તાજા પાસપોર્ટ સાઇઝના ફોટા - ૩"
      ],
      info: "અનુસૂચિત જાતિ / જનજાતિ કે અન્ય પછાત વર્ગની ઓળખ આપતું સત્તાવાર પ્રમાણપત્ર."
    },
    {
      id: 'ews-cert',
      name: 'આર્થિક રીતે નબળા વર્ગોનું પ્રમાણપત્ર (EWS)',
      category: 'દાખલા / પ્રમાણપત્રો',
      icon: Building,
      color: 'cyan',
      docs: [
        "અરજદારનું શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.)",
        "અરજદારના પિતા, કાકા, દાદા, અથવા ફોઈ પૈકી કોઈ એક વ્યક્તિનું શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.)",
        "રેશનકાર્ડની નકલ (અરજદારના નામ સાથે)",
        "આધારકાર્ડની નકલ",
        "નિયત નમૂના મુજબનું સ્ટેમ્પ પેપર પર સોગંદનામું (Affidavit)",
        "મામલતદાર કે સક્ષમ સ્તરનો વાર્ષિક આવકનો અસલ દાખલો",
        "જમીનની માલિકી કે સ્થાવર મિલકતના દસ્તાવેજો (લાગુ પડતો મિલકત પુરાવો)"
      ],
      info: "સામાન્ય (બિન-અનામત) કેટેગરીના પરિવારો જે આર્થિક રીતે નબળા છે તેમને શૈક્ષણિક અને સરકારી રોજગાર માટેનો EWS દાખલો."
    },
    {
      id: 'unreserved-cert',
      name: 'બિન અનામત વર્ગો માટેનું પ્રમાણપત્ર',
      category: 'દાખલા / પ્રમાણપત્રો',
      icon: CheckSquare,
      color: 'purple',
      docs: [
        "અરજદારનું અસલ શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.) અથવા જાતિ દર્શાવતું બોનાફાઇડ સર્ટિફિકેટ",
        "અરજદારના પિતા, કાકા, દાદા, અથવા ફોઈ પૈકી કોઈ એકનું શાળા છોડ્યાનું પ્રમાણપત્ર (L.C.)",
        "રેશનકાર્ડની નકલ (નામના ઉલ્લેખ સાથે)",
        "આધારકાર્ડની નકલ",
        "તાજા પાસપોર્ટ સાઇઝના ફોટા - ૨"
      ],
      info: "બિન-અનામત વર્ગોના કલ્યાણ અને યોજનાકીય લોન-સબસિડી મેળવવા માટે ઉપયોગી જ્ઞાતિ અંગેનું પ્રમાણપત્ર."
    },
    {
      id: 'income-cert',
      name: 'આવકનો દાખલો (Income Certificate)',
      category: 'દાખલા / પ્રમાણપત્રો',
      icon: FileCheck,
      color: 'violet',
      docs: [
        "અરજદારના નામનો તલાટી-કમ-મંત્રીનો આવક અંગેનો પંચનામાવાળો અસલ દાખલો",
        "રેશનકાર્ડની નકલ (જેમાં ફરજિયાત અરજદારના નામનો ઉલ્લેખ થયેલો હોવો જોઈએ)",
        "આધારકાર્ડ અથવા સચિત્ર ચૂંટણીકાર્ડની ઝેરોક્ષ નકલ",
        "આવકના દાખલાનું નિયત ફોર્મ સંપૂર્ણ અને સુવાચ્ય અક્ષરે ભરાયેલું (નિયત કોર્ટ ફી સ્ટેમ્પ સાથે)",
        "સ્વ-ઘોષણાપત્રક (સેલ્ફ ડેકલેરેશન) યોગ્ય સહી સાથે"
      ],
      info: "શૈક્ષણિક ફી માફી, શિષ્યવૃત્તિઓ અને અન્ય યોજનાકીય યોગ્યતા પુરવાર કરવા માટે આવશ્યક સત્તાવાર આવક દાખલો."
    }
  ]

  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    scheme.info.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const activeScheme = schemes.find(s => s.id === activeTab) || schemes[0]

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans">

      {/* <!-- HERO SECTION --> */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-linear-to-br from-rose-900 via-orange-950 to-slate-900 text-white border-b border-orange-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.15),transparent_50%)]" />
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-rose-500/30 bg-rose-500/10 backdrop-blur-xs">
            <Sparkles className="w-4 h-4 text-rose-400 animate-pulse" />
            <span className="text-sm md:text-base font-bold tracking-wider text-rose-300">
              જિલ્લા મહિલા અને બાળ અધિકારીની કચેરી, અમદાવાદ
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            મહિલા અને બાળ વિકાસ યોજના અમલીકરણ
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-rose-150 max-w-5xl mx-auto mb-8 leading-relaxed font-semibold">
            સરકારી કલ્યાણલક્ષી યોજનાઓ જેવી કે સંકટ મોચન, વિધવા સહાય (ગંગા સ્વરૂપા), EWS પ્રમાણપત્રો અને અન્ય દસ્તાવેજો માટે જરૂરી તમામ આધાર-પુરાવાઓની યાદી મેળવો.
          </p>

          {/* Contact and Maps */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="https://wa.me/919974025126?text=Join%20now"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-[#25D366] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:bg-[#20ba59] transition-all text-sm md:text-base cursor-pointer shadow-md"
            >
              <img
                src="/icons/whatsapp-color-svgrepo-com.svg"
                alt="WhatsApp"
                className="w-5 h-5 object-contain brightness-0 invert"
              />
              વોટ્સએપ દ્વારા સંપર્ક કરો
            </Link>
            <Link
              href="tel:07926309452"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-linear-to-r from-rose-600 to-orange-600 text-white font-bold rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] text-sm md:text-base cursor-pointer shadow-md"
            >
              <Phone className="w-5 h-5" />
              કચેરી ફોન: ૦૭૯-૨૬૩૦૯૪૫૨
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- OFFICE ADDRESS AND INFO BAR --> */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-rose-50 text-rose-700 rounded-2xl flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">કચેરી સરનામું</p>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                સરકારી વસાહત, D ટાઈપ ક્વાર્ટર, નં. ૩૦૧ થી ૩૦૪, જિલ્લા સરકારી પુસ્તકાલય સામે, વસ્ત્રાપુર, અમદાવાદ.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 border-t lg:border-t-0 lg:border-x border-slate-100 py-4 lg:py-0 lg:px-6">
            <div className="p-3.5 bg-orange-50 text-orange-700 rounded-2xl flex-shrink-0">
              <Info className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">અરજી પ્રક્રિયા</p>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                નિયત ફોર્મ સાથે આધારો સંલગ્ન કરી એ ટી વી ટી (ATVT) શાખામાં અસલ ફાઈલ રજૂ કરવાની રહેશે.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3.5 bg-emerald-50 text-emerald-700 rounded-2xl flex-shrink-0">
              <CheckSquare className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">માર્ગદર્શન સેવા</p>
              <p className="text-sm font-bold text-slate-800 leading-snug">
                માનવ કલ્યાણ ટ્રસ્ટ દ્વારા તમામ જરૂરી દસ્તાવેજો એકઠા કરવામાં અને માર્ગદર્શન મેળવવામાં ૧૦૦% મફત સહાય.
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
                <h2 className="text-2xl font-black text-slate-900">આધાર-પુરાવા નિર્દેશિકા</h2>
                <p className="text-slate-500 text-sm font-semibold mt-1">વિવિધ યોજનાઓ માટે રજુ કરવાના થતા દસ્તાવેજોની ચેકલિસ્ટ</p>
              </div>
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="યોજના શોધો..."
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
                <p className="text-slate-500 font-bold">કોઈ મેળ ખાતી યોજનાઓ મળી નથી.</p>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row gap-6">

                {/* Scheme Navigation Sidebar List */}
                <div className="w-full md:w-1/3 flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
                  {filteredSchemes.map((scheme) => {
                    const SchemeIcon = scheme.icon
                    const isActive = activeTab === scheme.id
                    return (
                      <button
                        key={scheme.id}
                        onClick={() => setActiveTab(scheme.id)}
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
                        રીસેટ ચેકલિસ્ટ
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
                      <p className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">રજૂ કરવાના થતા દસ્તાવેજો:</p>
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
                      <span>તમામ દસ્તાવેજોની બે નકલો સ્વ-પ્રમાણિત (Self Attested) કરી રજૂ કરવાની રહેશે.</span>
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
              સત્તાવાર બોર્ડ નોટિસ ફોટો
            </h3>

            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 relative group mb-4">
              <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/district-women-child-officer-schemes.jpg" target='_blank'>
                <img
                  src="/images/courses/Benifite-to-woman-by-gevenments-schemes/district-women-child-officer-schemes.jpg"
                  alt="જિલ્લા મહિલા અને બાળ અધિકારીની કચેરી અમદાવાદ બોર્ડ"
                  className="w-full h-auto object-cover object-top max-h-[350px] transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

            </div>

            <p className="text-xs text-slate-550 leading-relaxed font-semibold">
              આ પાના પર આપેલ માહિતી અમદાવાદ કચેરીના નોટિસ બોર્ડ પર સત્તાવાર મુકવામાં આવેલ બોર્ડ પરથી લેવામાં આવી છે.
            </p>
          </div>

          {/* Manav Kalyan Trust Helpline */}
          <div className="bg-linear-to-br from-rose-600 to-orange-600 text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
            <h3 className="text-xl font-black mb-3">મફત હેલ્પલાઇન અને સહાય</h3>
            <p className="text-rose-100 text-sm leading-relaxed mb-6 font-semibold">
              અરજી ફોર્મ મેળવવા માટે અથવા તેને કેવી રીતે ભરવું, સોગંદનામું કરાવવામાં કઈ બાબતો ધ્યાનમાં રાખવી તેની મફત સહાયતા માટે અમારો સંપર્ક કરો.
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
                વોટ્સએપ હેલ્પડેસ્ક
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 py-3 border border-white/40 text-white font-bold rounded-2xl text-xs hover:bg-white/10 transition-colors w-full text-center"
              >
                સંપર્ક ફોર્મ ભરો
              </Link>
            </div>
          </div>

        </div>

      </section>

      {/* <!-- CTA BOTTOM --> */}
      {/* <!-- CALL TO ACTION (CTA) --> */}
      <section className="py-16 md:py-20 px-4 text-center bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            શું આપ આમાંથી કોઈ યોજનાના લાભાર્થી છો?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            અમારા કેન્દ્ર પર મહિલાઓ માટેની યોજનાઓની માહિતી પૂરી પાડવામાં આવે છે. યોગ્ય ફોર્મ ભરવા, કાગળો એકત્રિત કરવા અને સરકારી કચેરીમાં યોગ્ય રજૂઆત માટે આજે જ સંપર્ક કરો.
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
              વોટ્સએપ પૂછપરછ (Join Now)
            </Link>
            <Link
              href="tel:9974025126"
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

    </div>
  )
}

export default WomenChildSchemesPage
