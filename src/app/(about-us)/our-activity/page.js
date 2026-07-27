'use client'
import React from 'react'
import { CommunityHealthSection } from '@/components/sections/rising_milestones/community_health'
import { SaltWorkersWelfareSection } from '@/components/sections/rising_milestones/salt_workers_welfare'
import { ScienceInnovationSection } from '@/components/sections/rising_milestones/science_innovation'
import { SocioEconomicSection } from '@/components/sections/rising_milestones/socio_economic'
import { WomenEmpowermentSection } from '@/components/sections/rising_milestones/woman_empowernment'
import { EmploymentGenerationSection } from '@/components/sections/rising_milestones/employment_generation'
import { useCMS } from '@/context/CMSContext'
import { BarChart3, Users, Heart, Activity, Stethoscope, Lightbulb, Home, Shield } from 'lucide-react'

const iconMap = { BarChart3, Users, Heart, Activity, Stethoscope, Lightbulb, Home, Shield }

const Our_Activity_Page = () => {
    const { t, allContent } = useCMS()

    const sections = allContent?.risingMilestonesSections || []

    const mapMilestoneData = (slug) => {
        const data = sections.find(s => s.slug === slug)
        if (!data) return null
        
        const mapped = { ...data }
        if (typeof data.icon === 'string') {
            mapped.icon = iconMap[data.icon] || Heart
        }
        if (Array.isArray(data.projects)) {
            mapped.projects = data.projects.map(p => {
                if (typeof p === 'object' && p !== null) {
                    return {
                        ...p,
                        icon: typeof p.icon === 'string' ? iconMap[p.icon] : p.icon
                    }
                }
                return p
            })
        }
        return mapped
    }

    const employmentData = mapMilestoneData("Employment-generation")
    const womenData = mapMilestoneData("women-empowerment")
    const socioEconomicData = mapMilestoneData("socio-economic-development-activities")
    const communityHealthData = mapMilestoneData("community-health-programme")
    const scienceInnovationData = mapMilestoneData("science-innovation")
    const saltWorkersData = mapMilestoneData("salt-workers-welfare")

    return (
        <>
            <section className="pt-20 px-4 bg-glow-fresh border-b border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
                            {t('risingMilestones.title') || "Rising Milestones"}
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            {t('risingMilestones.description') || "Transformative programs empowering communities through strategic initiatives"}
                        </p>
                    </div>

                    {employmentData && <EmploymentGenerationSection Employment_generation_activity_data={employmentData} />}

                    {womenData && <WomenEmpowermentSection Women_Empowerment_activity_data={womenData} />}

                    {socioEconomicData && <SocioEconomicSection Socio_Economic_activity_data={socioEconomicData} />}

                    {communityHealthData && <CommunityHealthSection Community_Health_activity_data={communityHealthData} />}

                    {scienceInnovationData && <ScienceInnovationSection Science_Innovation_activity_data={scienceInnovationData} />}

                    {saltWorkersData && <SaltWorkersWelfareSection Salt_Workers_Welfare_activity_data={saltWorkersData} />}
                </div>
            </section>
        </>
    )
}

export default Our_Activity_Page