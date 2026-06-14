import React from 'react'

const Section_header = ({ section_header_info }) => {
    return (
        <>
            {/* Awards Heading */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full border border-amber-200">
                    {section_header_info.icon}
                    <span className="text-sm font-semibold text-amber-700">{section_header_info.subTitle}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    {section_header_info.title}
                </h2>
                <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                    {section_header_info.description}
                </p>
            </div>
        </>
    )
}

export default Section_header