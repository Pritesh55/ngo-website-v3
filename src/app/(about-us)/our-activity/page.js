import { CommunityHealthSection } from '@/components/sections/rising_milestones/community_health'
import { SaltWorkersWelfareSection } from '@/components/sections/rising_milestones/salt_workers_welfare'
import { ScienceInnovationSection } from '@/components/sections/rising_milestones/science_innovation'
import { SocioEconomicSection } from '@/components/sections/rising_milestones/socio_economic'
import { WomenEmpowermentSection } from '@/components/sections/rising_milestones/woman_empowernment'
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


                    <WomenEmpowermentSection>
                    </WomenEmpowermentSection>

                    <SocioEconomicSection>
                    </SocioEconomicSection>

                    <CommunityHealthSection>
                    </CommunityHealthSection>

                    <ScienceInnovationSection>
                    </ScienceInnovationSection>

                    <SaltWorkersWelfareSection>
                    </SaltWorkersWelfareSection>
                </div>
            </section>


        </>
    )
}

export default Our_Activity_Page