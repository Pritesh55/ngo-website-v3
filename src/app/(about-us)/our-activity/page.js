import { CommunityHealthSection } from '@/components/sections/rising_milestones/community_health'
import { SaltWorkersWelfareSection } from '@/components/sections/rising_milestones/salt_workers_welfare'
import { ScienceInnovationSection } from '@/components/sections/rising_milestones/science_innovation'
import { SocioEconomicSection } from '@/components/sections/rising_milestones/socio_economic'
import { WomenEmpowermentSection } from '@/components/sections/rising_milestones/woman_empowernment'
import { EmploymentGenerationSection } from '@/components/sections/rising_milestones/employment_generation'

import { Employment_generation_activity_data, Women_Empowerment_activity_data, Socio_Economic_activity_data, Community_Health_activity_data, Science_Innovation_activity_data, Salt_Workers_Welfare_activity_data } from '@/data/rising_milestones_data.jsx'

import React from 'react'

const Our_Activity_Page = () => {

    return (
        <>
            <section className="pt-20 px-4 bg-glow-fresh border-b border-slate-100 relative overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-teal-900 mb-4">
                            Rising Milestones
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            Transformative programs empowering communities through strategic initiatives
                        </p>
                    </div>

                    <EmploymentGenerationSection Employment_generation_activity_data={Employment_generation_activity_data} />

                    <WomenEmpowermentSection Women_Empowerment_activity_data={Women_Empowerment_activity_data} />

                    <SocioEconomicSection Socio_Economic_activity_data={Socio_Economic_activity_data} />

                    <CommunityHealthSection Community_Health_activity_data={Community_Health_activity_data} />

                    <ScienceInnovationSection Science_Innovation_activity_data={Science_Innovation_activity_data} />

                    <SaltWorkersWelfareSection Salt_Workers_Welfare_activity_data={Salt_Workers_Welfare_activity_data} />
                </div>
            </section>
        </>
    )
}

export default Our_Activity_Page