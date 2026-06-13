import React from 'react'
import { Eye, Target, Sparkles, Users, Handshake, Shield, GraduationCap, ChevronRight, Heart, UserPlus } from 'lucide-react'
import Link from 'next/link';
import Our_team from '@/components/sections/Our_team';
import CTA_Donate_or_vol from '@/components/sections/CTA_Donate_or_vol';

const About_us_Page = () => {
  return (
    <>



      {/* <!-- 1 ▸ HERO ---------------------------------------------------- --> */}
      <section className="relative flex items-center justify-center px-4 py-24 bg-linear-to-br from-orange-50 to-red-50 border-b border-orange-100">
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8 inline-block">
            <div className="px-4 py-2 rounded-full border border-orange-200 bg-orange-100/50 backdrop-blur-xs">
              <p className="text-sm font-semibold text-red-700">
                MANAV KALYAN TRUST • FOUR DECADES OF EMPOWERMENT
              </p>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Four Decades of
            <span className="bg-linear-to-r from-orange-600 via-red-500 to-darkred bg-clip-text text-transparent"> Quiet Empowerment</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
            A Gujarat-born charitable trust working since 1986 to place education, dignity, and opportunity in the hands of rural women and underprivileged children.
          </p>

          {/* Key Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-6">
            {[
              { label: 'Founded in', value: '1986', highlight: 'Mehsana, Gujarat' },
              { label: 'Legal Status', value: 'Registered Trust', highlight: 'Bombay Public Trust Act' },
              { label: 'Key Focus', value: 'Empowerment', highlight: 'Education & Skills' }
            ].map((stat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/80 border border-orange-150 backdrop-blur-xs shadow-xs">
                <p className="text-sm font-semibold text-slate-500 capitalize tracking-wider mb-1">
                  {stat.label}
                </p>
                <p className="text-2xl font-bold bg-linear-to-r from-orange-600 to-darkred bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-xs text-slate-600 font-semibold">{stat.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ticker strip --> */}
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 text-xs font-bold capitalize tracking-[0.25em] text-slate-600 sm:px-10 lg:px-16">
          <span>◆ Education</span>
          <span>◆ Skill Development</span>
          <span>◆ Women Empowerment</span>
          <span>◆ Rural Outreach</span>
          <span className="text-red-700">◆ Est. 29·11·1986</span>
        </div>
      </div>

      {/* <!-- 6 ▸ BASIC / LEGAL DETAILS ---------------------------------- --> */}
      <section className="bg-glow-cool py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-blue-200 bg-blue-50/50">
              <span className="text-xs font-bold text-blue-700 tracking-wider">05 — CERTIFICATIONS &amp; RECORDS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Registration &amp; Legal Compliance
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Officially registered, evaluated, and compliant under the applicable Indian regulatory boards since 1986.
            </p>
          </div>

          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                dt: 'Legal Entity',
                dd: 'Trust Organisation',
                sub: 'Registered under Bombay Public Trust Act, 1950',
                theme: 'from-orange-50/80 to-red-50/40',
                border: 'border-orange-100',
                tagClass: 'bg-orange-100 text-orange-700 border-orange-200'
              },
              {
                dt: 'Registration No.',
                dd: 'E — 2943 / Mehsana',
                sub: 'Registered in Gujarat, India',
                theme: 'from-blue-50/80 to-indigo-50/40',
                border: 'border-blue-100',
                tagClass: 'bg-blue-100 text-blue-700 border-blue-200'
              },
              {
                dt: 'Date of Inception',
                dd: '29 · 11 · 1986',
                sub: 'Active over 39 years of social service',
                theme: 'from-emerald-50/80 to-teal-50/40',
                border: 'border-emerald-100',
                tagClass: 'bg-emerald-100 text-emerald-700 border-emerald-200'
              },

              {
                dt: '12 AA · I.T. Act, 1961 (Old)',
                dd: 'AAATM7981LE20214',
                sub: 'Income Tax Exemption Approval',
                theme: 'from-pink-50/80 to-rose-50/40',
                border: 'border-pink-100',
                tagClass: 'bg-pink-100 text-pink-700 border-pink-200'
              },
              {
                dt: '12 AB (1)(b)  (New)',
                dd: 'AAATM7981L25AD01',
                sub: 'Income Tax Exemption Approval',
                theme: 'from-pink-50/80 to-rose-50/40',
                border: 'border-pink-100',
                tagClass: 'bg-pink-100 text-pink-700 border-pink-200'
              },
              {
                dt: 'FCRA, 1976',
                dd: '041910237',
                sub: 'Foreign Contribution Regulation Act compliant',
                theme: 'from-amber-50/80 to-yellow-50/40',
                border: 'border-amber-100',
                tagClass: 'bg-amber-100 text-amber-700 border-amber-200'
              },
              {
                dt: '80 G (5) · I.T. Act, 1961  (Old)',
                dd: 'AAATM7981LE20214',
                sub: 'Tax Deduction eligibility for donors',
                theme: 'from-purple-50/80 to-indigo-50/40',
                border: 'border-purple-100',
                tagClass: 'bg-purple-100 text-purple-700 border-purple-200'
              },
              {
                dt: '80 G (5)· (New)',
                dd: 'AAATM7981L25AD02',
                sub: 'Tax Deduction eligibility for donors',
                theme: 'from-purple-50/80 to-indigo-50/40',
                border: 'border-purple-100',
                tagClass: 'bg-purple-100 text-purple-700 border-purple-200'
              },
              {
                dt: 'Darpan registration id',
                dd: 'GJ/2016/0105370',
                sub: 'Niti aayog number',
                theme: 'from-purple-50/80 to-indigo-50/40',
                border: 'border-purple-100',
                tagClass: 'bg-purple-100 text-purple-700 border-purple-200'
              }

            ].map((detail, idx) => (
              <div
                key={idx}
                className={`bg-linear-to-br ${detail.theme} border ${detail.border} rounded-2xl p-6 shadow-xs flex flex-col justify-between`}
              >
                <div>
                  <dt className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${detail.tagClass} mb-4`}>
                    {detail.dt}
                  </dt>
                  <dd className="text-xl font-bold text-slate-900 leading-snug mb-1">
                    {detail.dd}
                  </dd>
                </div>
                {detail.sub && (
                  <dd className="text-xs text-slate-650 font-semibold mt-2 border-t border-slate-200/50 pt-2">
                    {detail.sub}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* <!-- 2 ▸ INTRODUCTION ------------------------------------------- --> */}
      <section className="bg-glow-cool py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto  px-6 sm:px-10 lg:px-16">

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-orange-200 bg-orange-50/50">
              <span className="text-xs font-bold text-orange-700 tracking-wider">01 — OUR HISTORY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              A Three-Decade Journey, Formalised
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              How a personal mission evolved into a structured foundation for community empowerment in Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Side Highlight Card */}
            <div className="lg:col-span-5">
              <div className="bg-linear-to-br from-orange-50/80 to-red-50/40 rounded-3xl border border-orange-100 p-8 shadow-xs">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Milestones</h3>
                <div className="space-y-4">
                  {[
                    { year: '1986', desc: 'Trust formally registered in Mehsana, Gujarat.' },
                    { year: '30+ Years', desc: 'Active welfare operations for rural community empowerment.' },
                    { year: 'Key Pillars', desc: 'Education, skill acquisition, and financial self-sufficiency.' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="px-3 py-1 bg-white border border-orange-200 rounded-lg text-red-700 font-bold text-sm">
                        {item.year}
                      </div>
                      <p className="text-slate-700 text-sm leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Detailed description text */}
            <div className="lg:col-span-7 space-y-6 text-base md:text-lg text-slate-700 leading-relaxed font-semibold">
              <p>
                Manav Kalyan Trust was founded with the simplistic goal of inspiring
                the power of skills and a love of learning in illiterate, underprivileged
                children. An individual's almost three‑decade‑old journey was
                formalised in 1986 as the Manav Kalyan Trust — a charitable not‑for‑profit trust.
              </p>
              <p>
                Today, MKT assists underprivileged women and young people, particularly
                those from Gujarat, in developing the skills they need to reach their full
                potential in education, the workplace and society at large. It also works
                with poor children.
              </p>
              <p>
                The Trust works to increase aspirations, achievements and life chances
                through participatory dialogues — assisting the oppressed to gain the
                confidence to envision a different world and to participate fully and fairly
                in both their immediate environment and the larger modern world.
              </p>
              <blockquote className="mt-10 border-l-4 border-orange-500 pl-6 text-xl italic font-bold text-slate-800 bg-orange-50/30 py-4 rounded-r-xl">
                “We share our insights and experiences with others so they can join in.”
              </blockquote>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- 3 ▸ VISION & MISSION --------------------------------------- --> */}
      <section className="bg-glow-warm py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto  px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-amber-200 bg-amber-50/50">
              <span className="text-xs font-bold text-amber-700 tracking-wider">02 — WHAT GUIDES US</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Vision &amp; Mission</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The fundamental principles and long-term aspirations guiding our day-to-day work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-linear-to-br from-orange-50/80 to-red-50/40 border border-orange-100 hover:border-orange-300 rounded-3xl overflow-hidden flex flex-col h-full">
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-orange-100 rounded-xl text-orange-700">
                      <Eye className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold capitalize tracking-widest text-orange-600 bg-white border border-orange-200 px-3 py-1 rounded-full">
                      Our Vision
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-4">
                    Educated &amp; Fair Society
                  </h3>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                    To establish an educated and fair society where <span className="text-orange-600 font-bold">each child and woman</span> is given the freedom to pursue their aspirations.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-orange-200/60 flex items-center gap-2 text-xs font-bold text-orange-700 capitalize tracking-wider">
                  <span>Freedom</span> • <span>Education</span> • <span>Equity</span>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="group hover:shadow-xl transition-all duration-300 bg-linear-to-br from-teal-50/80 to-emerald-50/40 border border-teal-100 hover:border-teal-300 rounded-3xl overflow-hidden flex flex-col h-full">
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-teal-100 rounded-xl text-teal-700">
                      <Target className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold capitalize tracking-widest text-teal-600 bg-white border border-teal-200 px-3 py-1 rounded-full">
                      Our Mission
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-4">
                    Closing Achievement Gaps
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed font-semibold">
                    To close achievement gaps among children and women in rural and underserved communities through <span className="text-teal-700 font-bold">quality skill development</span> — building an educated and empowered Gujarat with a special emphasis on self-sufficiency.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-teal-200/60 flex items-center gap-2 text-xs font-bold text-teal-700 capitalize tracking-wider">
                  <span>Skills</span> • <span>Equity</span> • <span>Self‑reliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- 4 ▸ AIMS & OBJECTIVES -------------------------------------- --> */}
      <section className="bg-glow-candy py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto  px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-red-200 bg-red-50/50">
              <span className="text-xs font-bold text-red-700 tracking-wider">03 — PILLARS OF ACTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Aims &amp; Objectives
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Five core values that dictate all of our initiatives and outreach programs across rural areas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'Empowerment',
                desc: 'Empowering all those who are economically disadvantaged and struggling with various issues in societies plagued by poverty.',
                icon: Sparkles,
                gradientClass: 'from-orange-50/80 to-red-50/40',
                borderClass: 'border-orange-100 hover:border-orange-300',
                iconBgClass: 'bg-orange-100',
                iconColorClass: 'text-orange-600',
                numClass: 'text-orange-600/30'
              },
              {
                num: '02',
                title: 'Participation',
                desc: 'Ensuring underprivileged children & women actively participate in educational and skill development activities.',
                icon: Users,
                gradientClass: 'from-blue-50/80 to-indigo-50/40',
                borderClass: 'border-blue-100 hover:border-blue-300',
                iconBgClass: 'bg-blue-100',
                iconColorClass: 'text-blue-600',
                numClass: 'text-blue-600/30'
              },
              {
                num: '03',
                title: 'Platform',
                desc: 'Aiming to be the primary resource and platform for the development of underserved communities.',
                icon: Handshake,
                gradientClass: 'from-emerald-50/80 to-teal-50/40',
                borderClass: 'border-emerald-100 hover:border-emerald-300',
                iconBgClass: 'bg-emerald-100',
                iconColorClass: 'text-emerald-600',
                numClass: 'text-emerald-600/30'
              },
              {
                num: '04',
                title: 'Future Focus',
                desc: 'Enlisting volunteers and professionals to work for the long-term betterment of those in disadvantaged circumstances.',
                icon: Shield,
                gradientClass: 'from-pink-50/80 to-rose-50/40',
                borderClass: 'border-pink-100 hover:border-pink-300',
                iconBgClass: 'bg-pink-100',
                iconColorClass: 'text-pink-600',
                numClass: 'text-pink-600/30'
              },
              {
                num: '05',
                title: 'Resource',
                desc: 'Giving people access to essential technical, financial, and educational resources so they can enjoy the benefits of life.',
                icon: GraduationCap,
                gradientClass: 'from-amber-50/80 to-yellow-50/40',
                borderClass: 'border-amber-100 hover:border-amber-300',
                iconBgClass: 'bg-amber-100',
                iconColorClass: 'text-amber-600',
                numClass: 'text-amber-600/30'
              }
            ].map((pillar, i) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={i}
                  className={`group hover:shadow-xl transition-all duration-300 bg-linear-to-br ${pillar.gradientClass} ${pillar.borderClass} border rounded-2xl overflow-hidden h-full flex flex-col`}
                >
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-6">
                        <span className={`font-bold text-4xl ${pillar.numClass}`}>{pillar.num}</span>
                        <div className={`p-2 rounded-lg ${pillar.iconBgClass} ${pillar.iconColorClass}`}>
                          <IconComp className="w-6 h-6" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* <!-- 5 ▸ LEADER MESSAGE ----------------------------------------- --> */}
      <section className="bg-glow-fresh py-24 border-b border-slate-100 relative overflow-hidden">
        <div className="mx-auto  px-6 sm:px-10 lg:px-16">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-teal-200 bg-teal-50/50">
              <span className="text-xs font-bold text-teal-700 tracking-wider">04 — PRESIDENTIAL VOICE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              A Message from our President
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Inspiring trust and driving social impact with bold actions and clear leadership.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-linear-to-br from-teal-50/80 to-slate-50 border-2 border-teal-200 rounded-3xl p-8 md:p-12 shadow-xs">
            <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
              <div className="flex-shrink-0 flex items-center gap-4">
                <div className="grid h-20 w-20 place-items-center rounded-full bg-teal-100 border border-teal-200 text-teal-800 font-bold text-3xl">
                  SP
                </div>
                <div className="md:hidden">
                  <h3 className="text-xl font-bold text-slate-900">Mrs. Savitriben Patel</h3>
                  <p className="text-xs font-semibold text-teal-850 capitalize tracking-wider">
                    President &amp; Managing Trustee
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <div className="hidden md:block mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">Mrs. Savitriben Patel</h3>
                  <p className="text-sm font-semibold text-teal-850 capitalize tracking-wider">
                    President &amp; Managing Trustee
                  </p>
                </div>

                <span className="text-6xl leading-none text-teal-600 font-bold block -mb-6">“</span>
                <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-semibold">
                  <p>
                    After making great strides since its inception, the Manav Kalyan Trust now stands tall and proud. Few can match the enviable reputation it has established for itself — all of this could be accomplished through bold thinking, unrelenting effort and practical application.
                  </p>
                  <p>
                    Education plays an important role in skill development, but it is just one aspect of a way of life that helps every woman, child and young person develop into valuable members of society — enthusiastic group learners, forward‑thinkers, effective communicators and responsible citizens.
                  </p>
                  <p>
                    Since it improves both the quality and the quantity of human resources available for development, gender equality and women's empowerment are essential for the growth of any society.
                  </p>
                  <p className="text-teal-700 font-bold text-xl italic pt-2">
                    Our team is giving it its all — and we hope to quickly transform society positively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- 6 ▸ OUR TEAM ----------------------------------------------- --> */}
      <Our_team />

      {/* <!-- 7 ▸ CLOSING / CTA ------------------------------------------ --> */}
      <CTA_Donate_or_vol />

    </>
  )
}

export default About_us_Page