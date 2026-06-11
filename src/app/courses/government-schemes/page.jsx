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
    { id: 'swavlamban', name: 'મહિલા સ્વાવલંબન યોજના', icon: Award, color: 'emerald' },
    { id: 'dikri', name: 'વ્હાલી દીકરી યોજના', icon: Heart, color: 'rose' },
    { id: 'safety', name: 'સુરક્ષા, સખી OSC અને ૧૮૧', icon: Shield, color: 'teal' },
    { id: 'pension', name: 'ગંગા સ્વરૂપા અને કલ્યાણ', icon: Users, color: 'indigo' },
    { id: 'scans', name: 'મૂળ માર્ગદર્શિકા પત્રકો', icon: FileText, color: 'slate' }
  ]

  // Documents list for Mahila Swavlamban
  const swavlambanDocs = [
    "ઉંમરનો પુરાવો (શાળા છોડ્યાનું પ્રમાણપત્ર / ચૂંટણી કાર્ડ / મેડિકલ સર્ટીફીકેટ પૈકી કોઈપણ એક)",
    "આધારકાર્ડ રજુ કરવું",
    "તાલીમનું / અનુભવનું / આવડતનું પ્રમાણપત્ર",
    "મશીનરી / ફર્નીચર / કાચા માલનું / પાકું ભાવપત્રક (અસલ તથા ઝેરોક્ષ સ્વ પ્રમાણિત કરીને રજુ કરવા)",
    "રેશનકાર્ડની ઝેરોક્ષ નકલ",
    "કાયમી રહેઠાણ અંગેનો પુરાવો",
    "વાર્ષિક આવકનો દાખલો (મામલતદાર / તાલુકા વિકાસ અધિકારી / નાયબ મામલતદાર / નાયબ તાલુકા વિકાસ અધિકારી / વિસ્તરણ અધિકારી (પંચાયત) / તલાટી-કમ-મંત્રી (પંચાયત) નો રજૂ કરવાનો રહેશે. અન્ય પ્રમાણપત્ર માન્ય રાખવામાં આવશે નહિ)",
    "જાતિ અંગેનો સક્ષમ અધિકારીનો દાખલો (મામલતદાર / તાલુકા વિકાસ અધિકારી / સમાજ કલ્યાણ અધિકારી)",
    "વિકલાંગ / વિધવા હોય તો તે અંગેનું સિવિલ સર્જનનું પ્રમાણપત્ર અથવા સમાજ સુરક્ષાનું વિકલાંગ ઓળખ કાર્ડ",
    "તમામ દસ્તાવેજો બે નકલમાં સ્વપ્રમાણિત કરી રજૂ કરવાના રહેશે",
    "બેંક પાસબુકની નકલ"
  ]

  const [activeTab2_WCS, setactiveTab2_WCS] = useState('sankat-mochan')
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
              મહિલા ઉત્કર્ષ અને સામાજિક આત્મનિર્ભરતા કાર્યક્રમ
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            સરકારી યોજનાઓનું અમલીકરણ
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-xl text-teal-150 max-w-6xl mx-auto mb-8 leading-relaxed font-medium">
            અમે વિવિધ સરકારી યોજનાઓ નો લાભ ગરીબ જરૂરિયાત મંદ મહિલાઓ ને અપાવીએ છીએ. યોગ્ય લાયકાત ધરાવતી બહેનોને પૂરતી માહિતી અને અરજી પ્રક્રિયામાં ૧૦૦% વિનામૂલ્યે સહાય પૂરી પાડવામાં આવે છે.
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
              વોટ્સએપ દ્વારા સંપર્ક કરો
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

      {/* <!-- QUICK INFO BAR --> */}
      <section className="bg-white border-b border-slate-200 py-6 px-4 shadow-xs">
        <div className=" mx-auto flex flex-wrap justify-around gap-8 text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-emerald-50 text-emerald-700 rounded-2xl">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">સેવા ફી</p>
              <p className="text-base font-bold text-slate-800">૧૦૦% મફત સેવા અને સહાય</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start border-t md:border-t-0 md:border-x border-slate-100 py-4 md:py-0 md:px-6">
            <div className="p-3 bg-rose-50 text-rose-700 rounded-2xl">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">લાભાર્થી પાત્રતા</p>
              <p className="text-base font-bold text-slate-800">જરૂરિયાતમંદ અને નિરાધાર બહેનો</p>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="p-3 bg-teal-50 text-teal-700 rounded-2xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">સેવા સમયગાળો</p>
              <p className="text-base font-bold text-slate-800">કાયમી માર્ગદર્શન કેન્દ્ર</p>
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
              <span>વિશેષ હેલ્પડેસ્ક સહાય</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-white">
              મદદ અને માર્ગદર્શન જોઈએ છે?
            </h2>
            <p className="text-base md:text-lg text-emerald-50 leading-relaxed font-semibold">
              કોઈપણ સરકારી યોજનાની અરજી માટે કયા દસ્તાવેજોની જરૂર પડશે અથવા તમારી પાત્રતા શું છે તેની મફત ચકાસણી અમારા સેવા કેન્દ્ર પરથી મેળવો.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto flex flex-col gap-3 relative z-10">
            <Link
              href="tel:9974025126"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-white text-teal-950 hover:bg-slate-55 transition-all font-extrabold rounded-2xl text-base shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4.5 h-4.5 text-emerald-700" />
              <span>કૉલ કરો: ૯૪૨૬૦૬૨૦८૩</span>
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
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-wide">આત્મનિર્ભરતા યોજના</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">મહિલા સ્વાવલંબન યોજના</h2>
                </div>
                <div className="bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl text-center">
                  <p className="text-xxs font-bold uppercase text-slate-400">મહત્તમ લોન ભલામણ</p>
                  <p className="text-xl font-black text-emerald-700">રૂ. ૨,૦૦,૦૦૦/-</p>
                </div>
              </div>

              {/* Objective */}
              <div className="bg-linear-to-r from-emerald-50/50 to-teal-50/20 p-5 rounded-2xl border border-emerald-100/50 mb-6">
                <h3 className="font-bold text-emerald-900 mb-1 flex items-center gap-2">
                  <Info className="w-4.5 h-4.5" />
                  યોજનાનો મુખ્ય ઉદ્દેશ્ય
                </h3>
                <p className="text-slate-700 text-sm md:text-base leading-relaxed font-medium">
                  ગરીબી રેખા હેઠળ જીવતા અને જરૂરિયાતમંદ કુટુંબોની મહિલાઓને સ્વરોજગારી મેળવવા માટે બેંક લોનની ભલામણ કરીને અને સબસિડી અપાવીને પોતાના પગભર બનાવવાનો છે.
                </p>
              </div>

              {/* Eligibility Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-slate-200 rounded-2xl p-4 space-y-1 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase">લાભાર્થીની વય મર્યાદા</p>
                  <p className="text-base font-bold text-slate-800">૧૮ વર્ષ થી ૬૫ વર્ષ</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-4 space-y-1 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase">યોજના વ્યાપ (Trades)</p>
                  <p className="text-base font-bold text-slate-800">કુલ ૩૦૭ પ્રકારના અલગ-અલગ ધંધા / ઉદ્યોગ</p>
                </div>
                <div className="border border-slate-200 rounded-2xl p-4 space-y-2 md:col-span-2 bg-slate-50/50">
                  <p className="text-xs font-bold text-slate-400 uppercase">વાર્ષિક આવક મર્યાદા</p>
                  <div className="grid grid-cols-2 gap-4 text-sm font-bold text-slate-800 pt-1">
                    <div>• ગ્રામ્ય વિસ્તાર: રૂ. ૧,૨૦,૦૦૦/-</div>
                    <div>• શહેરી વિસ્તાર: રૂ. ૧,૫૦,૦૦૦/-</div>
                  </div>
                </div>
              </div>

              {/* Subsidy Scale */}
              <h3 className="font-bold text-base text-slate-900 mb-3">મળવા પાત્ર સબસિડીનું ધોરણ (Subsidy)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 mb-1">સામાન્ય વર્ગની મહિલા</p>
                  <p className="text-xl font-bold text-slate-800">૩૦% સબસિડી</p>
                  <p className="text-xxs text-slate-500 font-semibold mt-1">અથવા મહત્તમ રૂ. ૬૦,૦૦૦/-</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 mb-1">અנוસૂચિત જાતિ / જનજાતિ</p>
                  <p className="text-xl font-bold text-slate-800">૩૫% સબસિડી</p>
                  <p className="text-xxs text-slate-500 font-semibold mt-1">લાયકાત ધરાવતી બહેનો માટે</p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center">
                  <p className="text-xs font-bold text-slate-500 mb-1">વિધવા અથવા દિવ્યાંગ (&gt;૪૦%)</p>
                  <p className="text-xl font-bold text-emerald-700 font-extrabold">૪૦% સબસિડી</p>
                  <p className="text-xxs text-emerald-600 font-semibold mt-1">સરકારના વિશેષ પ્રોત્સાહન હેઠળ</p>
                </div>
              </div>

              {/* Application form info */}
              <div className="border border-slate-100 rounded-2xl p-4 flex gap-3.5 bg-slate-50 text-sm mb-6">
                <FileText className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-800">અરજી ફોર્મ અને ભલામણ પ્રક્રિયા</p>
                  <p className="text-slate-650 mt-1 leading-relaxed text-sm md:text-base">
                    મહિલા સ્વાવલંબન યોજનાનું અરજીપત્રક દરેક જિલ્લાની <strong>મહિલા અને બાળ અધિકારીની કચેરીએથી વિના મૂલ્યે</strong> મળશે. અરજી ફોર્મ ભરીને રજૂ કર્યા બાદ, અધિકારીઓ દ્વારા તેની ચકાસણી કરીને બેંકોને લોન માટે ભલામણ મોકલવામાં આવે છે.
                  </p>
                </div>
              </div>

              {/* 11 Documents Checklist */}
              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center gap-2">
                  <FileCheck className="w-5.5 h-5.5 text-emerald-600" />
                  અરજી માટેના ૧૧ જરૂરી દસ્તાવેજો (બે નકલમાં સ્વપ્રમાણિત)
                </h3>

                <p className="text-xs text-slate-500 mb-4 italic">
                  દસ્તાવેજો એકઠા કરતી વખતે નીચેની યાદીને ચેકલિસ્ટ તરીકે વાપરી શકો છો:
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
              <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wider">સંબંધિત લીફલેટ ફોટોગ્રાફ (Scan Leaflet)</p>
              <div className="rounded-2xl overflow-hidden border border-slate-150 bg-slate-50">

                <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg">
                  <img
                    src="/images/courses/Benifite-to-woman-by-gevenments-schemes/Mahila-Swavlamban-Yojna.jpeg"
                    alt="મહિલા સ્વાવલંબન યોજના"
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
                  <span className="px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold tracking-wide">દીકરી કલ્યાણ અને શિક્ષણ</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">વ્હાલી દીકરી યોજના</h2>
                </div>
                <div className="bg-rose-50 border border-rose-100 px-4 py-2 rounded-2xl text-center">
                  <p className="text-xxs font-bold uppercase text-slate-400">કુલ નાણાકીય સહાય</p>
                  <p className="text-xl font-black text-rose-700">રૂ. ૧,૦૦,૦૦૦/-</p>
                </div>
              </div>

              {/* Purpose */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-rose-50/40 border border-rose-100/50 p-4 rounded-2xl text-center">
                  <div className="text-rose-600 text-xl font-black mb-1">૧</div>
                  <p className="text-sm md:text-base font-bold text-slate-700">દીકરીઓનો જન્મદર વધારવા અને કન્યા જન્મને પ્રોત્સાહન</p>
                </div>
                <div className="bg-teal-50/40 border border-teal-100/50 p-4 rounded-2xl text-center">
                  <div className="text-teal-600 text-xl font-black mb-1">૨</div>
                  <p className="text-sm md:text-base font-bold text-slate-700">શિક્ષણમાં દીકરીઓનો ડ્રોપઆઉટ રેશિયો ઘટાડવો</p>
                </div>
                <div className="bg-emerald-50/40 border border-emerald-100/50 p-4 rounded-2xl text-center">
                  <div className="text-emerald-600 text-xl font-black mb-1">૩</div>
                  <p className="text-sm md:text-base font-bold text-slate-700">બાળલગ્નની હાનિકારક પ્રથા અટકાવવી</p>
                </div>
              </div>

              {/* Details Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 md:p-6 mb-8 space-y-4">
                <h3 className="font-bold text-slate-800 flex items-center gap-2">
                  <Info className="w-5 h-5 text-rose-500" />
                  યોજના અંતર્ગત પાત્રતા અને માપદંડો
                </h3>
                <ul className="space-y-3 text-sm md:text-base text-slate-700 font-semibold pl-4 list-disc">
                  <li>દીકરીના જન્મથી <span className="text-rose-700">એક વર્ષની સમય મર્યાદામાં</span> આ યોજના માટે ફોર્મ ભરવાનું રહેશે.</li>
                  <li>દંપતીની (પતિ અને પત્નીની સંયુક્ત) વાર્ષિક આવક મર્યાદા <span className="text-emerald-700">રૂ. ૨,૦૦,૦૦૦/- (બે લાખ) કે તેથી ઓછી</span> હોવી જોઈએ.</li>
                  <li>દંપતીના પ્રથમ ત્રણ સંતાનો પૈકીની તમામ દીકરીઓ આ યોજનાનો લાભ લેવા પાત્ર છે.</li>
                </ul>
              </div>

              {/* Installment Steps - Stepper */}
              <h3 className="font-bold text-lg text-slate-900 mb-6">મળવા પાત્ર સહાયના હપ્તા (Installment Milestones)</h3>

              <div className="relative border-l-2 border-rose-150 ml-4 md:ml-6 space-y-8 mb-8">

                {/* Step 1 */}
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-3.5 top-0.5 bg-rose-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                    ૧
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-base text-slate-900">પ્રથમ હપ્તો - પ્રાથમિક પ્રવેશ વખતે</h4>
                      <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100 text-rose-750 font-bold text-sm md:text-base">રૂ. ૪,૦૦૦/- (સહાય)</span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-1">જ્યારે દીકરી પ્રથમ ધોરણમાં (1st Standard) પ્રવેશ મેળવે ત્યારે આ આર્થિક સહાય મળવાપાત્ર છે.</p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-3.5 top-0.5 bg-rose-500 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                    ૨
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-base text-slate-900">બીજો હપ્તો - માધ્યમિક પ્રવેશ વખતે</h4>
                      <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100 text-rose-750 font-bold text-sm md:text-base">રૂ. ૬,૦૦૦/- (સહાય)</span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-1">દીકરી ધોરણ ૯ (9th Standard) માં પ્રવેશે ત્યારે આ હપ્તો મળવાપાત્ર બને છે.</p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="relative pl-6 md:pl-8">
                  <div className="absolute -left-3.5 top-0.5 bg-emerald-600 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs">
                    ૩
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-sm md:text-base text-slate-900">ત્રીજો હપ્તો - ઉચ્ચ શિક્ષણ કે લગ્ન સહાય</h4>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-800 font-bold text-sm md:text-base">રૂ. ૧,૦૦,૦૦૦/- (સહાય)</span>
                    </div>
                    <p className="text-slate-500 text-sm md:text-base mt-1">દીકરી ૧૮ વર્ષ પૂર્ણ કરે ત્યારે તે દીકરીને તેના ઉચ્ચ શિક્ષણ માટે અથવા લગ્ન માટે સહાય તરીકે એકસામટી આ રકમ આપવામાં આવે છે.</p>
                  </div>
                </div>

              </div>

              {/* Submission Info */}
              <div className="border border-rose-100 bg-rose-50/30 rounded-2xl p-5 text-sm">
                <h4 className="font-bold text-rose-900 mb-2 flex items-center gap-1.5">
                  <Building className="w-4.5 h-4.5" />
                  અરજી ફોર્મ ક્યાં રજુ કરવું?
                </h4>
                <p className="text-slate-650 leading-relaxed text-sm md:text-base">
                  આ યોજનાનો લાભ લેવા માટે નીચે આપેલા સ્થાનો પર સંપર્ક કરી ફોર્મ જમા કરાવી શકાય છે:
                </p>
                <ul className="mt-2 space-y-1.5 font-bold text-slate-850 text-sm md:text-base">
                  <li>• ગ્રામ્ય કક્ષાએ: ગ્રામપંચાયત ખાતે VCE (Village Computer Entrepreneur) મારફતે</li>
                  <li>• તાલુકા કક્ષાએ: મામલતદાર કચેરી ખાતે</li>
                  <li>• જિલ્લા કક્ષાએ: જિલ્લા મહિલા અને બાળ અધિકારીશ્રીની કચેરી ખાતે</li>
                </ul>
              </div>

            </div>

            {/* Display leaflet */}
            <div className="bg-white rounded-3xl border border-slate-200 p-4 shadow-sm max-w-sm mx-auto w-full">
              <p className="text-xs font-bold text-slate-400 mb-3 text-center uppercase tracking-wider">સંબંધિત લીફલેટ ફોટોગ્રાફ (Scan Leaflet)</p>
              <div className="rounded-2xl overflow-hidden border border-slate-150 bg-slate-50">

                <Link href="/images/courses/Benifite-to-woman-by-gevenments-schemes/vhali-dikri-Yojna.jpeg">
                  <img
                    src="/images/courses/Benifite-to-woman-by-gevenments-schemes/vhali-dikri-Yojna.jpeg"
                    alt="વ્હાલી દીકરી યોજના"
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
                  <span className="px-2.5 py-0.5 rounded bg-rose-50 text-rose-750 text-xxs font-extrabold uppercase">તાત્કાલિક સેન્ટર</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">સખી - વન સ્ટોપ સેન્ટર (OSC)</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                હિંસાથી પીડિત મહિલાઓ/કિશોરીઓને એક જ સ્થળેથી તાત્કાલિક આશ્રય તથા સંકલિત સેવાઓ પૂરી પાડવા માટે વન સ્ટોપ સેન્ટર (OSC) સખી યોજના કાર્યરત છે. ગુજરાતના તમામ ૩૩ જિલ્લાઓમાં આ સેન્ટર કાર્યરત છે.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm md:text-base">અપાતી મુખ્ય સેવાઓ:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">હિંસાથી પીડિત કિશોરીઓ/મહિલાઓને તાત્કાલિક તબીબી સારવાર.</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">હિંસાથી પીડિત મહિલાઓને ટૂંકાગાળાનો આશ્રય અને સુરક્ષા.</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">હિંસા સામે રક્ષણ મેળવવા માટે કાયદાકીય સલાહ અને પૂરતું માર્ગદર્શન.</span>
                </div>
                <div className="border border-slate-200 rounded-xl p-3.5 flex items-start gap-2.5 bg-slate-50">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-slate-700 font-semibold">પોલીસની સહાય તથા યોગ્ય પરામર્શ (Counseling) સેવાઓ.</span>
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
                  <span className="px-2.5 py-0.5 rounded bg-teal-50 text-teal-750 text-xxs font-extrabold uppercase">સહાયક સેવા કેન્દ્ર</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">પોલીસ સ્ટેશન બેઇઝ્ડ સપોર્ટ સેન્ટર (PBSC)</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                આ સેન્ટરનો મુખ્ય હેતુ ઘરેલુ હિંસા, અત્યાચાર અને સામાજિક અસમાનતા જેવા પ્રશ્નોમાં પીડિત મહિલાને પોતે આત્મવિશ્વાસપૂર્વક નિર્ણય લેવા સક્ષમ બનાવવાનો અને સંસ્થાકીય સહાય પૂરી પાડવાનો છે.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm md:text-base">મુખ્ય કાર્યપદ્ધતિ અને કલ્યાણ લક્ષ્યો:</h3>
              <div className="space-y-3.5 text-sm md:text-base text-slate-700 font-semibold">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-800">૧. કાઉન્સેલીંગ દ્વારા સમસ્યાનો ઉકેલ</p>
                  <p className="text-slate-600 mt-1 text-xs leading-relaxed">
                    જે તે હિંસાગ્રસ્ત મહિલાની ફરિયાદના આધારે બન્ને પક્ષ સાથે પદ્ધતિસર કાઉન્સેલીંગ કરી પરસ્પર સંમતિથી સમસ્યાનો ઉકેલ લાવવા સનિષ્ઠ પ્રયાસો કરવામાં આવે છે.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-800">૨. કાનૂની માર્ગદર્શન અને પોલીસ ફરિયાદ સહાય</p>
                  <p className="text-slate-600 mt-1 text-xs leading-relaxed">
                    જો કાઉન્સેલિંગ દ્વારા સમસ્યાનો ઉકેલ ન આવે, તો પીડિત મહિલાને કાનૂની અધિકારો અને કાયદાઓની જીણવટભરી માહિતી આપવી, અને જો જરૂર જણાય તો પોલીસ ફરિયાદ નોંધાવવામાં સંપૂર્ણ કાયદાકીય સહાય.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-slate-800">૩. માળખાગત સંકલન</p>
                  <p className="text-slate-600 mt-1 text-xs leading-relaxed">
                    મહિલાની ચોક્કસ સમસ્યા અને તેના કાયમી ઉકેલ સંદર્ભે વિવિધ સરકારી અને બિન-સરકારી કલ્યાણકારી માળખાઓ સાથે સુવ્યવસ્થિત સંકલન સાધવું.
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
                  <span className="px-2.5 py-0.5 rounded bg-red-100 text-red-800 text-xxs font-extrabold uppercase">24x7 હેલ્પલાઇન</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">અભયમ્ - ૧૮૧ મહિલા હેલ્પલાઇન</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                વિવિધ પ્રકારની હિંસાથી પીડિત મહિલાઓને તાત્કાલિક આકસ્મિક સંજોગોમાં તમામ માહિતી, રેસ્ક્યુ સહાય અને યોગ્ય ફોલો-અપ મળી રહે તે માટે સરકાર દ્વારા ૧૮૧ નંબરની અભયમ્ મહિલા હેલ્પલાઇન કાર્યરત કરાયેલ છે.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    પોલીસ એક્શન ડેસ્ક
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    મહિલાઓ, યુવતીઓ અને કિશોરીઓ સાથે થતી ટેલીફોનિક કે ઓનલાઇન સતામણી અટકાવવા માટે સંબંધિત વ્યક્તિને કાયદાકીય સૂચના આપી અટકાવવાના પ્રયાસો કરાય છે.
                  </p>
                </div>

                <div className="border border-slate-200 rounded-2xl p-4">
                  <h4 className="font-bold text-slate-800 text-sm mb-1.5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    અભયમ્ મોબાઈલ એપ્લિકેશન
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    મહિલા સુરક્ષા માટે ખાસ તૈયાર કરેલ એપ જેમાં જીપીએસ ટ્રેકર છે. આપત્તિના સમયે ફોનને હલાવવાથી (Shake) ફોન આપોઆપ લાગશે અને રેસ્ક્યુ વાન સ્થળ પર દોડી જશે.
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
                    <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xxs font-extrabold uppercase">આજીવન પેન્શન સહાય</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">ગંગા સ્વરૂપા આર્થિક સહાય યોજના</h2>
                  </div>
                </div>
                <div className="bg-emerald-50 px-4 py-2 rounded-xl text-center">
                  <p className="text-xxs text-slate-500 font-bold uppercase">માસિક આર્થિક સહાય</p>
                  <p className="text-base font-black text-emerald-700">રૂ. ૧,૨૫૦/-</p>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                ગંગા સ્વરૂપા (વિધવા) બહેનોને સામાજિક અને આર્થિક સુરક્ષા પૂરી પાડવાના હેતુથી સરકારશ્રી દ્વારા માસિક સહાય સીધી જ તેમના પોસ્ટ અથવા રાષ્ટ્રીયકૃત બેંક ખાતામાં (DBT મારફતે) જમા કરવામાં આવે છે.
              </p>

              <h3 className="font-bold text-slate-950 mb-3 text-sm md:text-base">તાજેતરમાં થયેલા મહત્વના સુધારા (૧-૪-૨૦૧૯ થી અમલી):</h3>
              <div className="space-y-3.5 mb-6">
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-700 font-bold">સહાય આજીવન મળશે: અગાઉ ૨૧ વર્ષનો પુત્ર થતાં આ સહાય બંધ કરવામાં આવતી હતી તે નિયમ હવે નાબૂદ કરવામાં આવેલ છે.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex gap-3 text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <p className="text-slate-700 font-bold">માસિક વધારો: પેન્શનની રકમ વધારીને દર મહિને રૂ. ૧,૨૫૦/- કરવામાં આવેલ છે.</p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl">
                <h4 className="font-bold text-slate-800 text-xs uppercase mb-2">કુટુંબની વાર્ષિક આવક મર્યાદા:</h4>
                <div className="grid grid-cols-2 gap-4 text-sm md:text-base font-extrabold text-slate-700">
                  <div>• ગ્રામ્ય વિસ્તાર: રૂ. ૧,૨૦,૦૦૦/-</div>
                  <div>• શહેરી વિસ્તાર: રૂ. ૧,૫૦,૦૦૦/-</div>
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
                    <span className="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xxs font-extrabold uppercase">પુનઃલગ્ન આર્થિક પ્રોત્સાહન</span>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">ગંગા સ્વરૂપા પુન:લગ્ન આર્થિક સહાય યોજના</h2>
                  </div>
                </div>
                <div className="bg-rose-50 px-4 py-2 rounded-xl text-center">
                  <p className="text-xxs text-slate-500 font-bold uppercase">કુલ સહાય પ્રોત્સાહન</p>
                  <p className="text-base font-black text-rose-700">રૂ. ૫૦,૦૦૦/-</p>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                મહિલા અને બાળ વિકાસ વિભાગની આ યોજનાનો મુખ્ય ઉદ્દેશ્ય ગંગા સ્વરૂપા વિધવા સહાય મેળવતી બહેનોને પુનઃલગ્ન કરી નવું ગૃહસ્થ જીવન શરૂ કરવા માટે આર્થિક સહાય આપવાનો છે.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">લાભાર્થી વય મર્યાદા</h4>
                  <p className="text-sm md:text-base font-bold text-slate-800">૧૮ વર્ષ થી ૫૦ વર્ષ સુધીની બહેનો</p>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-1">સહાય ચૂકવવાની પદ્ધતિ</h4>
                  <p className="text-xs leading-relaxed text-slate-700 font-bold">
                    • DBT થી બચત ખાતામાં: રૂ. ૨૫,૦૦૦/-<br />
                    • નેશનલ સેવિંગ્સ સર્ટિફિકેટ (NSC): રૂ. ૨૫,૦૦૦/-
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-amber-500 bg-amber-50 text-amber-900 p-4 rounded-r-xl text-sm md:text-base font-semibold">
                <p className="font-bold flex items-center gap-1.5 mb-1">
                  <AlertCircle className="w-4.5 h-4.5 text-amber-600" />
                  અરજી કરવાની પ્રક્રિયા:
                </p>
                <p>
                  અરજી પત્રકો વેબસાઈટ <Link href="http://wcd.gujarat.gov.in" target="_blank" rel="noopener noreferrer" className="underline font-bold text-emerald-800">wcd.gujarat.gov.in</Link> પર ઉપલબ્ધ છે. ફોર્મ ભરીને સંબંધિત મહિલા અને બાળ અધિકારીશ્રીની કચેરી પર પુનઃલગ્ન કર્યાની તારીખથી <strong>૬ માસની અંદર</strong> જમા કરાવવાના રહેશે.
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
                  <span className="px-2.5 py-0.5 rounded bg-teal-100 text-teal-800 text-xxs font-extrabold uppercase">આશ્રય સેવા</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">આશ્રય ગૃહ / નારી સંરક્ષણ ગૃહ</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                રાજ્યની નિરાશ્રિત અને ઘરેલુ હિંસાનો સામનો કરી રહેલી ૧૮ વર્ષથી મોટી ઉંમરની મહિલાને અને તેના બાળકોને આશ્રય આપવા સમગ્ર ગુજરાતમાં રક્ષણ ગૃહો કાર્યરત છે.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm">મળતી કલ્યાણકારી સેવાઓ:</h3>
              <ul className="space-y-2.5 text-sm md:text-base text-slate-700 font-semibold list-disc pl-5">
                <li>હિંસાથી પીડિત મહિલાઓ અને તેમના બાળકોને સુરક્ષિત આશ્રય અને સુરક્ષા પૂરી પાડવી.</li>
                <li>આશ્રય લેતી બહેનોની સમયાંતરે નિઃશુલ્ક આરોગ્ય તપાસ અને વ્યવસાયિક તાલીમ/વિકાસ પ્રવૃત્તિઓ સાથે જોડાણ.</li>
                <li>નિષ્ણાત કાઉન્સેલર દ્વારા સમસ્યામાંથી બહાર લાવવા માટે પરામર્શ (Counseling) સત્રોનું આયોજન.</li>
              </ul>
            </div>

            {/* Beti Bachao - Beti Padhao */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-slate-100">
                <div className="p-3 bg-rose-50 text-rose-700 rounded-xl">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <span className="px-2.5 py-0.5 rounded bg-rose-100 text-rose-800 text-xxs font-extrabold uppercase">રાષ્ટ્રીય ઝુંબેશ</span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-1">બેટી બચાવો - બેટી પઢાવો</h2>
                </div>
              </div>

              <p className="text-slate-650 text-base md:text-lg leading-relaxed mb-6 font-semibold">
                માનનીય પ્રધાનમંત્રીશ્રી દ્વારા ૨૦૧૫માં હરિયાણાના પાણીપત ખાતેથી સમાજમાં દીકરીઓ પ્રત્યેના અસંતુલનને રોકવા અને દીકરીઓના વિકાસને વેગ આપવાના ઉદ્દેશ્ય સાથે શરૂ કરાયેલ રાષ્ટ્રીય યોજના.
              </p>

              <h3 className="font-bold text-slate-900 mb-3 text-sm">યોજનાના મુખ્ય સૂચકાંકો અને લક્ષ્યો:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm md:text-base text-slate-700 font-semibold">
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• દીકરી જન્મને દેશવ્યાપી પ્રોત્સાહન આપવું.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• દીકરીઓમાં એનીમિયા અને ઓછા વજનનું પ્રમાણ અટકાવવું.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• કન્યા શિક્ષણ અને જન્મદર પ્રત્યે સમુદાયને સક્રિય કરવા.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• તમામ નવજાત દીકરીઓનું ૧૦૦% રસીકરણ સુનિશ્ચિત કરવું.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• દીકરીઓની શાળામાં સુરક્ષા અને POCSO એક્ટ-2012 હેઠળ સુરક્ષા.</div>
                <div className="p-3 rounded-xl border border-slate-150 bg-slate-50">• શાળાઓમાં દીકરીઓ માટે અલાયદા શૌચાલયો સુનિશ્ચિત કરવા.</div>
              </div>
            </div>

          </div>
        )}

        {/* 5 ▸ ORIGINAL LEAFLET SCANS */}
        {activeTab === 'scans' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <div className="mb-6">
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold tracking-wide">અધિકૃત પત્રકો</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">માર્ગદર્શિકા પત્રકો (Scan Copy)</h2>
                <p className="text-slate-500 text-sm md:text-base mt-1">જિલ્લા મહિલા બાળ વિકાસ કચેરી દ્વારા પ્રકાશિત અધિકૃત માહિતી પત્રકોના મૂળ સ્કેન અત્રે આપેલા છે.</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

                <div className="border border-slate-200 p-4 rounded-2xl bg-slate-50">
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">લિસ્ટ ઓફ ઓલ યોજના વિગત પત્રક - ૧</p>
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
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">લિસ્ટ ઓફ ઓલ યોજના વિગત પત્રક - ૨</p>
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
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">મહિલા સ્વાવલંબન યોજના પત્રક</p>
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
                  <p className="text-xs font-bold text-slate-500 mb-2.5 text-center">વ્હાલી દીકરી યોજના પત્રક</p>
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

      {/* <!-- OFFICIAL COORDINATION PARTNER BANNER --> */}
      < section className="bg-linear-to-br from-teal-50 to-emerald-50 py-12 px-4 border-y border-teal-100" >
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-teal-800 font-bold uppercase tracking-wider text-sm md:text-base">યોજના સંયોજક અને સંચાલન માહિતી</p>
          <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-normal">
            “કમિશ્નર શ્રી મહિલા બાળ વિકાસ કચેરી” ના સહયોગથી
          </h2>
          <p className="text-sm font-bold text-slate-700 max-w-xl mx-auto">
            જિલ્લા વિવિધલક્ષી મહિલા કલ્યાણ કેન્દ્ર, સંચાલિત - <strong>માનવ કલ્યાણ ટ્રસ્ટ</strong>
          </p>
          <div className="bg-white border border-teal-100 p-5 rounded-2xl max-w-2xl mx-auto shadow-xs text-sm md:text-base text-slate-650 space-y-1.5 font-bold">
            <p className="text-slate-800 font-extrabold">ઓફિસ સરનામું:</p>
            <p> ૪૨૭, કલાસાગર શોપીંગ મોલ, સાંઈબાબા મંદિરની સામે, સત્તાધાર ક્રોસ રોડ, ઘાટલોડિયા, અમદાવાદ - ૩૮૦૦૬૧</p>
            <div className="pt-2 flex flex-wrap justify-center gap-4 text-emerald-800">
              <span>• મોબા. : ૯૪૨૬૦૬૨૦૮૩</span>
              <span>• મેનેજીંગ ટ્રસ્ટી : સાવિત્રીબેન પટેલ</span>
            </div>
          </div>
        </div>
      </section >

      {/* <!-- CALL TO ACTION (CTA) --> */}
      < section className="py-16 md:py-20 px-4 text-center bg-white" >
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
      </section >

    </div >
  )
}

export default GovtSchemesPage
